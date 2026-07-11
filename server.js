const express = require("express");
const http = require("http");
const os = require("os");
const path = require("path");
const { Server } = require("socket.io");

const PORT = Number(process.env.PORT || 5173);
const HOST = process.env.HOST || "0.0.0.0";
const MODE_LABELS = {
  solo: "1인 플레이",
  duo: "2인 대전",
  trio: "3인 대전",
  squad: "4인 대전",
  quint: "5인 대전",
};
const FINAL_STANDING_MIN_PLAYERS = 2;

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const rooms = new Map();
const playerHighScores = new Map();

app.use(express.static(__dirname));

app.get("/network-info", (_request, response) => {
  response.json({
    port: PORT,
    localUrl: `http://localhost:${PORT}`,
    networkUrls: getLocalNetworkUrls(),
  });
});

app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

function createRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  do {
    code = Array.from({ length: 6 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
  } while (rooms.has(code));
  return code;
}

function normalizeNickname(nickname) {
  const value = String(nickname || "").trim();
  return value.slice(0, 16) || "Player";
}

function normalizeMaxPlayers(maxPlayers) {
  const value = Number(maxPlayers);
  if (!Number.isInteger(value) || value < 1 || value > 5) {
    return 1;
  }
  return value;
}

function normalizeScore(value) {
  const score = Number(value);
  return Number.isFinite(score) && score > 0 ? Math.floor(score) : 0;
}

function getStoredHighScore(playerId, providedHighScore = 0) {
  return Math.max(
    normalizeScore(playerHighScores.get(playerId)),
    normalizeScore(providedHighScore),
  );
}

function setStoredHighScore(playerId, highScore) {
  const nextHighScore = Math.max(getStoredHighScore(playerId), normalizeScore(highScore));
  playerHighScores.set(playerId, nextHighScore);
  return nextHighScore;
}

function createAiPlayer(room) {
  const playerNumber = room.players.length + 1;
  return {
    id: `ai-${room.roomCode}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    nickname: `AI P${playerNumber}`,
    isHost: false,
    isReady: true,
    isConnected: true,
    isAI: true,
    rank: null,
    isEliminated: false,
    isGameOver: false,
    score: 0,
    level: 0,
    lines: 0,
    highScore: 0,
  };
}

function createSpectator(socketId, nickname) {
  return {
    id: socketId,
    nickname: normalizeNickname(nickname) || "Spectator",
    isSpectator: true,
    isConnected: true,
  };
}

function canStart(room) {
  const connectedPlayers = room.players.filter((player) => player.isConnected);
  if (room.maxPlayers === 1) {
    return connectedPlayers.length === 1;
  }

  return (
    connectedPlayers.length === room.maxPlayers &&
    connectedPlayers.every((player) => player.isReady)
  );
}

function isFinalStandingRoom(room) {
  return room.maxPlayers >= FINAL_STANDING_MIN_PLAYERS;
}

function getActivePlayers(room) {
  return room.players.filter((player) => player.isConnected && !player.isEliminated);
}

function getPlayerRank(player) {
  const rank = Number(player?.rank);
  return Number.isFinite(rank) && rank > 0 ? rank : null;
}

function assignFinalStandingRanks(room, winner) {
  if (winner) {
    winner.rank = 1;
    winner.isEliminated = false;
    winner.isGameOver = false;
  }

  const usedRanks = new Set(
    room.players
      .map((player) => getPlayerRank(player))
      .filter((rank) => rank !== null),
  );
  const unrankedPlayers = room.players
    .filter((player) => player.isConnected && getPlayerRank(player) === null)
    .sort((a, b) => (
      (b.score || 0) - (a.score || 0) ||
      (b.lines || 0) - (a.lines || 0) ||
      String(a.nickname).localeCompare(String(b.nickname))
    ));

  let nextRank = 1;
  unrankedPlayers.forEach((player) => {
    while (usedRanks.has(nextRank)) {
      nextRank += 1;
    }
    player.rank = nextRank;
    usedRanks.add(nextRank);
  });
}

function finishFinalStandingIfReady(room) {
  if (!isFinalStandingRoom(room) || room.gameStatus !== "playing") {
    return false;
  }

  const activePlayers = getActivePlayers(room);
  if (activePlayers.length > 1) {
    return false;
  }

  const winner = activePlayers[0] || null;
  assignFinalStandingRanks(room, winner);

  room.gameStatus = "gameOver";
  room.rematchVotes = new Set();
  emitRoom(room);
  io.to(room.roomCode).emit("gameOver", {
    roomCode: room.roomCode,
    winnerId: winner?.id || null,
    gameStatus: room.gameStatus,
  });
  return true;
}

function markPlayerEliminated(room, playerId) {
  if (!isFinalStandingRoom(room) || room.gameStatus !== "playing") {
    return;
  }

  const player = room.players.find((entry) => entry.id === playerId);
  if (!player || !player.isConnected || player.isEliminated) {
    return;
  }

  const activeBefore = getActivePlayers(room).length;
  player.isEliminated = true;
  player.isReady = false;
  player.rank = Math.max(1, activeBefore);

  if (!finishFinalStandingIfReady(room)) {
    emitRoom(room);
  }
}

function finishScoreDuelIfReady(room) {
  if (isFinalStandingRoom(room) || room.maxPlayers !== 2 || room.gameStatus !== "playing") {
    return false;
  }

  const connectedPlayers = room.players.filter((player) => player.isConnected);
  if (connectedPlayers.length < room.maxPlayers) {
    return false;
  }

  if (!connectedPlayers.every((player) => player.isGameOver || player.isEliminated)) {
    return false;
  }

  const rankedPlayers = [...connectedPlayers].sort((a, b) => (
    (b.score || 0) - (a.score || 0) ||
    (b.lines || 0) - (a.lines || 0)
  ));

  rankedPlayers.forEach((player, index) => {
    player.rank = index + 1;
    player.isEliminated = index > 0;
  });

  room.gameStatus = "gameOver";
  room.rematchVotes = new Set();
  emitRoom(room);
  io.to(room.roomCode).emit("gameOver", {
    roomCode: room.roomCode,
    winnerId: rankedPlayers[0]?.id || null,
    gameStatus: room.gameStatus,
  });
  return true;
}

function updatePlayerStats(player, snapshot) {
  player.score = Number(snapshot?.score) || 0;
  player.level = Number(snapshot?.level) || 0;
  player.lines = Number(snapshot?.lines) || 0;
  player.highScore = Math.max(
    normalizeScore(player.highScore),
    normalizeScore(snapshot?.highScore),
    normalizeScore(player.score),
  );
  if (!player.isAI) {
    setStoredHighScore(player.id, player.highScore);
  }
  player.isGameOver = Boolean(snapshot?.isGameOver);
}

function getConnectedHumanPlayers(room) {
  return room.players.filter((player) => player.isConnected && !player.isAI);
}

function getRematchVotes(room) {
  if (!(room.rematchVotes instanceof Set)) {
    room.rematchVotes = new Set(room.rematchVotes || []);
  }
  return room.rematchVotes;
}

function resetRoomForRematch(room) {
  room.players.forEach((player) => {
    player.isReady = player.isAI;
    player.isEliminated = false;
    player.isGameOver = false;
    player.rank = null;
    player.score = 0;
    player.level = 0;
    player.lines = 0;
  });

  room.gameStatus = "playing";
  room.rematchVotes = new Set();
}

function tryStartRematch(room) {
  if (room.gameStatus !== "gameOver") {
    return false;
  }

  const humanPlayers = getConnectedHumanPlayers(room);
  const votes = getRematchVotes(room);
  if (humanPlayers.length === 0 || !humanPlayers.every((player) => votes.has(player.id))) {
    return false;
  }

  resetRoomForRematch(room);
  emitRoom(room);
  io.to(room.roomCode).emit("gameStarted", {
    roomCode: room.roomCode,
    gameStatus: room.gameStatus,
  });
  return true;
}

function serializeRoom(room, playerId) {
  const me = room.players.find((player) => player.id === playerId);
  const spectator = room.spectators?.find((entry) => entry.id === playerId);
  const rematchVotes = Array.from(getRematchVotes(room));
  return {
    roomId: room.roomId,
    roomCode: room.roomCode,
    selectedMode: room.selectedMode,
    modeLabel: room.modeLabel,
    maxPlayers: room.maxPlayers,
    players: room.players,
    playerId,
    nickname: me?.nickname || spectator?.nickname || "",
    isHost: room.hostId === playerId,
    isReady: Boolean(me?.isReady),
    isConnected: Boolean(me?.isConnected || spectator?.isConnected),
    isSpectator: Boolean(spectator),
    spectatorCount: room.spectators?.length || 0,
    gameStatus: room.gameStatus,
    canStart: !spectator && room.gameStatus === "lobby" && room.hostId === playerId && canStart(room),
    rematchVotes,
  };
}

function emitRoom(room) {
  [...room.players, ...(room.spectators || [])].forEach((entry) => {
    io.to(entry.id).emit("roomUpdated", serializeRoom(room, entry.id));
  });
}

function findPlayerRoom(socketId) {
  for (const room of rooms.values()) {
    if (
      room.players.some((player) => player.id === socketId) ||
      room.spectators?.some((spectator) => spectator.id === socketId)
    ) {
      return room;
    }
  }
  return null;
}

function removePlayerFromRoom(room, socketId) {
  if (room.spectators?.some((spectator) => spectator.id === socketId)) {
    room.spectators = room.spectators.filter((spectator) => spectator.id !== socketId);
    emitRoom(room);
    return;
  }

  room.players = room.players.filter((player) => player.id !== socketId);

  const humanPlayers = room.players.filter((player) => !player.isAI);
  if (humanPlayers.length === 0) {
    rooms.delete(room.roomCode);
    return;
  }

  if (room.hostId === socketId) {
    room.hostId = humanPlayers[0].id;
  }

  room.players.forEach((player) => {
    player.isHost = player.id === room.hostId;
  });
  emitRoom(room);
}

io.on("connection", (socket) => {
  socket.on("createRoom", ({ nickname, selectedMode, maxPlayers, highScore }) => {
    const roomCode = createRoomCode();
    const cappedPlayers = normalizeMaxPlayers(maxPlayers);
    const mode = MODE_LABELS[selectedMode] ? selectedMode : "solo";
    const storedHighScore = setStoredHighScore(socket.id, highScore);
    const host = {
      id: socket.id,
      nickname: normalizeNickname(nickname),
      isHost: true,
      isReady: false,
      isConnected: true,
      isAI: false,
      rank: null,
      isEliminated: false,
      isGameOver: false,
      score: 0,
      level: 0,
      lines: 0,
      highScore: storedHighScore,
    };

    const room = {
      roomId: `room-${roomCode}`,
      roomCode,
      selectedMode: mode,
      modeLabel: MODE_LABELS[mode],
      maxPlayers: cappedPlayers,
      players: [host],
      spectators: [],
      hostId: socket.id,
      gameStatus: "lobby",
      rematchVotes: new Set(),
      createdAt: Date.now(),
    };

    rooms.set(roomCode, room);
    socket.join(roomCode);
    socket.emit("roomJoined", serializeRoom(room, socket.id));
  });

  socket.on("joinRoom", ({ roomCode, nickname, highScore }) => {
    const code = String(roomCode || "").trim().toUpperCase();
    const room = rooms.get(code);

    if (!room) {
      socket.emit("lobbyError", "방 코드를 찾을 수 없습니다.");
      return;
    }

    if (!["lobby", "playing"].includes(room.gameStatus)) {
      socket.emit("lobbyError", "이미 끝난 방입니다.");
      return;
    }

    const connectedCount = room.players.filter((player) => player.isConnected).length;
    const aiReplacementIndex = room.players.findIndex((player) => player.isAI && player.isConnected);
    if (connectedCount >= room.maxPlayers && aiReplacementIndex === -1) {
      socket.emit("lobbyError", "방 인원이 가득 찼습니다.");
      return;
    }

    const storedHighScore = setStoredHighScore(socket.id, highScore);
    const player = {
      id: socket.id,
      nickname: normalizeNickname(nickname),
      isHost: false,
      isReady: room.gameStatus === "playing",
      isConnected: true,
      isAI: false,
      rank: null,
      isEliminated: false,
      isGameOver: false,
      score: 0,
      level: 0,
      lines: 0,
      highScore: storedHighScore,
    };

    if (connectedCount >= room.maxPlayers && aiReplacementIndex !== -1) {
      room.players.splice(aiReplacementIndex, 1, player);
    } else {
      room.players.push(player);
    }
    socket.join(code);
    socket.emit("roomJoined", serializeRoom(room, socket.id));
    emitRoom(room);
  });

  socket.on("joinSpectator", ({ roomCode, nickname }) => {
    const code = String(roomCode || "").trim().toUpperCase();
    const room = rooms.get(code);

    if (!room) {
      socket.emit("lobbyError", "관전할 방 코드를 찾을 수 없습니다.");
      return;
    }

    if (room.players.some((player) => player.id === socket.id)) {
      socket.emit("roomJoined", serializeRoom(room, socket.id));
      return;
    }

    room.spectators = (room.spectators || []).filter((spectator) => spectator.id !== socket.id);
    room.spectators.push(createSpectator(socket.id, nickname || "Spectator"));
    socket.join(code);
    socket.emit("roomJoined", serializeRoom(room, socket.id));
    emitRoom(room);
  });

  socket.on("addAiPlayer", ({ roomCode }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());

    if (!room || room.gameStatus !== "lobby") {
      return;
    }

    if (room.hostId !== socket.id) {
      socket.emit("lobbyError", "AI 추가는 방장만 할 수 있습니다.");
      return;
    }

    const connectedCount = room.players.filter((player) => player.isConnected).length;
    if (connectedCount >= room.maxPlayers) {
      socket.emit("lobbyError", "이미 모든 슬롯이 찼습니다.");
      return;
    }

    room.players.push(createAiPlayer(room));
    emitRoom(room);
  });

  socket.on("toggleReady", ({ roomCode }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());
    const player = room?.players.find((entry) => entry.id === socket.id);

    if (!room || !player || room.gameStatus !== "lobby") {
      return;
    }

    player.isReady = !player.isReady;
    emitRoom(room);
  });

  socket.on("startGame", ({ roomCode }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());
    if (!room || room.hostId !== socket.id || !canStart(room)) {
      return;
    }

    room.players.forEach((player) => {
      player.isEliminated = false;
      player.isGameOver = false;
      player.rank = null;
      player.score = 0;
      player.level = 0;
      player.lines = 0;
    });
    room.rematchVotes = new Set();
    room.gameStatus = "playing";
    emitRoom(room);
    io.to(room.roomCode).emit("gameStarted", {
      roomCode: room.roomCode,
      gameStatus: room.gameStatus,
    });
  });

  socket.on("boardSnapshot", ({ roomCode, snapshot }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());
    const player = room?.players.find((entry) => entry.id === socket.id);

    if (!room || !player || player.isEliminated || room.gameStatus !== "playing") {
      return;
    }

    updatePlayerStats(player, snapshot);

    socket.to(room.roomCode).emit("opponentBoardSnapshot", {
      playerId: socket.id,
      snapshot: {
        ...snapshot,
        highScore: player.highScore,
        isGameOver: player.isGameOver,
      },
    });

    finishScoreDuelIfReady(room);
  });

  socket.on("playerEliminated", ({ roomCode, playerId }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());
    const reporter = room?.players.find((entry) => entry.id === socket.id);
    const target = room?.players.find((entry) => entry.id === playerId);

    if (!room || !reporter || !target) {
      return;
    }

    const canReportElimination = target.id === socket.id || (target.isAI && room.hostId === socket.id);
    if (!canReportElimination) {
      return;
    }

    markPlayerEliminated(room, target.id);
  });

  socket.on("requestRematch", ({ roomCode }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());
    const player = room?.players.find((entry) => entry.id === socket.id);

    if (!room || !player || player.isAI || room.gameStatus !== "gameOver") {
      return;
    }

    const votes = getRematchVotes(room);
    votes.add(player.id);

    if (!tryStartRematch(room)) {
      emitRoom(room);
    }
  });

  socket.on("leaveRoom", ({ roomCode }) => {
    const room = rooms.get(String(roomCode || "").trim().toUpperCase());
    if (!room) {
      return;
    }

    socket.leave(room.roomCode);
    removePlayerFromRoom(room, socket.id);
  });

  socket.on("disconnect", () => {
    const room = findPlayerRoom(socket.id);
    if (!room) {
      return;
    }

    const spectator = room.spectators?.find((entry) => entry.id === socket.id);
    if (spectator) {
      removePlayerFromRoom(room, socket.id);
      return;
    }

    const player = room.players.find((entry) => entry.id === socket.id);
    if (player) {
      player.isConnected = false;
      player.isReady = false;
      if (room.gameStatus === "playing" && isFinalStandingRoom(room)) {
        player.isEliminated = true;
        player.rank = Math.max(1, getActivePlayers(room).length + 1);
      }
    }

    const connectedHumanPlayers = room.players.filter((entry) => entry.isConnected && !entry.isAI);
    if (connectedHumanPlayers.length === 0) {
      rooms.delete(room.roomCode);
      return;
    }

    if (room.hostId === socket.id) {
      const nextHost = connectedHumanPlayers[0];
      room.hostId = nextHost.id;
      room.players.forEach((entry) => {
        entry.isHost = entry.id === nextHost.id;
      });
    }

    if (!finishFinalStandingIfReady(room)) {
      emitRoom(room);
    }
  });
});

function getLocalNetworkUrls() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((network) => (
      network &&
      network.family === "IPv4" &&
      !network.internal
    ))
    .map((network) => `http://${network.address}:${PORT}`);
}

server.listen(PORT, HOST, () => {
  const localUrl = `http://localhost:${PORT}`;
  const networkUrls = getLocalNetworkUrls();

  console.log("TETRIS BATTLE server is running.");
  console.log(`내 컴퓨터 접속: ${localUrl}`);
  if (networkUrls.length > 0) {
    console.log("친구 접속 주소:");
    networkUrls.forEach((url) => console.log(`  ${url}`));
  } else {
    console.log("친구 접속 주소를 찾지 못했습니다. 같은 와이파이 IP를 확인하세요.");
  }
  console.log("같은 와이파이 친구에게 위 주소와 방 코드를 알려주세요.");
});
