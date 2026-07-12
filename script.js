const COLS = 10;
const ROWS = 20;
const BLOCK = 30;
const PREVIEW_BLOCK = 24;

const COLORS = {
  I: "#14c7c4",
  O: "#f5dc3a",
  T: "#a446ff",
  S: "#20c933",
  Z: "#e52222",
  J: "#3676ff",
  L: "#da7a10",
};

const SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

const LINE_POINTS = [0, 40, 100, 300, 1200];
const SOFT_DROP_POINTS = 1;
const HARD_DROP_POINTS = 2;
const LOCK_POINTS = 10;
const COMBO_BONUS_POINTS = 50;
const COMBO_TIMEOUT_MS = 3000;
const SOLO_LINE_REWARD_COINS = 10;
const LINE_CLEAR_EFFECT_DURATION = 560;
const LINE_CLEAR_PARTICLES_PER_CELL = 5;
const GHOST_PIECE_ALPHA = 0.26;
const GHOST_PIECE_INSET = 4;
const SHOP_OFFER_COUNT = 4;
const SHOP_ROTATION_MS = 5 * 60 * 1000;
const AI_BASE_DROP_INTERVAL = 260;
const FINAL_STANDING_MIN_PLAYERS = 2;
const HIGH_SCORE_KEY = "tetris-battle-high-score";
const MUSIC_PREF_KEY = "tetris-battle-music-enabled";
const MUSIC_VOLUME_KEY = "tetris-battle-music-volume-db";
const COIN_BALANCE_KEY = "tetris-battle-coin-balance";
const OWNED_THEMES_KEY = "tetris-battle-owned-themes";
const EQUIPPED_THEME_KEY = "tetris-battle-equipped-theme";
const OWNED_BLOCK_SKINS_KEY = "tetris-battle-owned-block-skins";
const EQUIPPED_BLOCK_SKIN_KEY = "tetris-battle-equipped-block-skin";
const OWNED_SONGS_KEY = "tetris-battle-owned-songs";
const EQUIPPED_SONG_KEY = "tetris-battle-equipped-song";
const WIN_COUNT_KEY = "tetris-battle-win-count";
const AI_DIFFICULTY_KEY = "tetris-battle-ai-difficulty";
const DEFAULT_BLOCK_SKIN_ID = "classic-blocks";
const DEFAULT_SONG_ID = "classic-ai-loop";
const BLOCK_SKIN_PRICE = 10000;
const MONEY_REWARD_CODES = new Set(["돈", "*돈*"]);
const MONEY_REWARD_COINS = 90000;
const QR_VERSION = 5;
const QR_SIZE = QR_VERSION * 4 + 17;
const QR_DATA_CODEWORDS = 108;
const QR_EC_CODEWORDS = 26;
const QR_BYTE_CAPACITY = 106;
const QR_FORMAT_BITS_L = [
  0b111011111000100,
  0b111001011110011,
  0b111110110101010,
  0b111100010011101,
  0b110011000101111,
  0b110001100011000,
  0b110110001000001,
  0b110100101110110,
];
const HARDCORE_UNLOCK_WINS = 30;
const MUSIC_BPM = 148;
const MUSIC_STEP_SECONDS = 60 / MUSIC_BPM / 4;
const MUSIC_MASTER_VOLUME = 0.16;
const MAX_MUSIC_VOLUME_DB = 65;
const DEFAULT_MUSIC_VOLUME_DB = 55;
const PIECES = Object.keys(SHAPES);
const MODE_CONFIG = {
  solo: {
    label: "1인 플레이",
    description: "혼자 연습 모드",
    maxPlayers: 1,
  },
  duo: {
    label: "2인 대전",
    description: "친구 1명과 대결",
    maxPlayers: 2,
  },
  trio: {
    label: "3인 대전",
    description: "3명이 경쟁",
    maxPlayers: 3,
  },
  squad: {
    label: "4인 대전",
    description: "최대 4명 경쟁",
    maxPlayers: 4,
  },
  quint: {
    label: "5인 대전",
    description: "최대 5명 경쟁",
    maxPlayers: 5,
  },
};
const PREVIEW_PATTERNS = [
  [
    [2, 7],
    [3, 7],
    [2, 8],
    [3, 8],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
  ],
  [
    [1, 6],
    [1, 7],
    [2, 7],
    [3, 7],
    [3, 8],
    [4, 8],
    [2, 9],
    [3, 9],
  ],
  [
    [4, 5],
    [2, 6],
    [3, 6],
    [4, 6],
    [1, 8],
    [2, 8],
    [2, 9],
    [3, 9],
  ],
  [
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 8],
    [5, 8],
    [3, 9],
    [4, 9],
  ],
];
const MUSIC_LEAD = [
  "E5", null, "G5", "A5", "C6", null, "A5", "G5",
  "E5", "D5", "C5", null, "D5", "E5", "G5", null,
  "A5", null, "C6", "B5", "A5", "G5", "E5", null,
  "D5", "E5", "G5", "A5", "E5", null, "C5", null,
];
const MUSIC_BASS = [
  "A2", null, null, null, "F2", null, null, null,
  "G2", null, null, null, "E2", null, null, null,
  "A2", null, null, null, "C3", null, null, null,
  "G2", null, null, null, "E2", null, null, null,
];
const MUSIC_ARP = [
  "A3", "C4", "E4", "A4", "F3", "A3", "C4", "F4",
  "G3", "B3", "D4", "G4", "E3", "G3", "B3", "E4",
  "A3", "C4", "E4", "A4", "C4", "E4", "G4", "C5",
  "G3", "B3", "D4", "G4", "E3", "G3", "B3", "E4",
];
const DEFAULT_MUSIC_TRACK = {
  id: DEFAULT_SONG_ID,
  name: "기본 AI 루프",
  description: "처음부터 가지고 있는 기본 신스 멜로디",
  price: 0,
  bpm: MUSIC_BPM,
  lead: MUSIC_LEAD,
  bass: MUSIC_BASS,
  arp: MUSIC_ARP,
  accent: "#14c7c4",
};
const SHOP_MUSIC_TRACKS = [
  {
    id: "ai-neon-rush",
    name: "AI 네온 러시",
    description: "빠르게 달리는 하늘색 신스 배틀곡",
    price: 1200,
    bpm: 156,
    lead: [
      "G5", null, "B5", "D6", "E6", null, "D6", "B5",
      "A5", "B5", null, "G5", "D6", null, "E6", null,
      "G5", "A5", "B5", null, "D6", "E6", "G6", null,
      "E6", "D6", "B5", "A5", "G5", null, "D5", null,
    ],
    bass: [
      "G2", null, null, null, "E2", null, null, null,
      "D2", null, null, null, "B2", null, null, null,
      "G2", null, null, null, "B2", null, null, null,
      "D3", null, null, null, "E2", null, null, null,
    ],
    arp: [
      "G3", "B3", "D4", "G4", "E3", "G3", "B3", "E4",
      "D3", "F#3", "A3", "D4", "B2", "D3", "G3", "B3",
      "G3", "D4", "B3", "G4", "B3", "D4", "G4", "B4",
      "D3", "A3", "D4", "F#4", "E3", "G3", "B3", "E4",
    ],
    accent: "#14c7c4",
  },
  {
    id: "ai-pink-storm",
    name: "AI 핑크 스톰",
    description: "분홍빛 번개처럼 튀는 강한 멜로디",
    price: 1800,
    bpm: 164,
    lead: [
      "C6", null, "A5", "C6", "E6", null, "D6", null,
      "A5", "C6", "B5", null, "G5", "A5", "C6", null,
      "E6", null, "D6", "C6", "A5", null, "G5", "A5",
      "C6", "E6", null, "D6", "C6", null, "A5", null,
    ],
    bass: [
      "A2", null, null, null, "C3", null, null, null,
      "F2", null, null, null, "G2", null, null, null,
      "A2", null, null, null, "E2", null, null, null,
      "F2", null, null, null, "G2", null, null, null,
    ],
    arp: [
      "A3", "C4", "E4", "A4", "C4", "E4", "A4", "C5",
      "F3", "A3", "C4", "F4", "G3", "B3", "D4", "G4",
      "A3", "E4", "C4", "A4", "E3", "G3", "B3", "E4",
      "F3", "C4", "A3", "F4", "G3", "D4", "B3", "G4",
    ],
    accent: "#ff3eb5",
  },
  {
    id: "ai-gold-zone",
    name: "AI 골드 존",
    description: "승리 화면처럼 반짝이는 묵직한 테마곡",
    price: 2500,
    bpm: 140,
    lead: [
      "E5", "G5", null, "B5", "D6", null, "B5", "G5",
      "F#5", null, "A5", "C6", "B5", null, "G5", null,
      "E5", "G5", "B5", null, "E6", "D6", "B5", null,
      "A5", "B5", "D6", null, "G5", null, "E5", null,
    ],
    bass: [
      "E2", null, null, null, "G2", null, null, null,
      "D2", null, null, null, "B1", null, null, null,
      "E2", null, null, null, "B2", null, null, null,
      "C3", null, null, null, "D2", null, null, null,
    ],
    arp: [
      "E3", "G3", "B3", "E4", "G3", "B3", "D4", "G4",
      "D3", "F#3", "A3", "D4", "B2", "D3", "F#3", "B3",
      "E3", "B3", "G3", "E4", "B3", "D4", "G4", "B4",
      "C3", "E3", "G3", "C4", "D3", "F#3", "A3", "D4",
    ],
    accent: "#f5dc3a",
  },
  {
    id: "ai-emerald-drive",
    name: "AI 에메랄드 드라이브",
    description: "초록 네온이 부드럽게 밀고 가는 집중형 곡",
    price: 1500,
    bpm: 132,
    lead: [
      "B4", "E5", "G5", null, "A5", "G5", "E5", null,
      "D5", "E5", "G5", "B5", "A5", null, "E5", null,
      "G5", "B5", "D6", null, "B5", "A5", "G5", null,
      "E5", "G5", "A5", "B5", "G5", null, "E5", null,
    ],
    bass: [
      "E2", null, null, null, "B2", null, null, null,
      "C3", null, null, null, "A2", null, null, null,
      "E2", null, null, null, "G2", null, null, null,
      "A2", null, null, null, "B2", null, null, null,
    ],
    arp: [
      "E3", "G3", "B3", "E4", "B2", "E3", "G3", "B3",
      "C3", "E3", "G3", "C4", "A2", "C3", "E3", "A3",
      "E3", "B3", "D4", "G4", "G2", "B2", "D3", "G3",
      "A2", "C3", "E3", "A3", "B2", "D3", "F#3", "B3",
    ],
    accent: "#35ff86",
  },
  {
    id: "ai-blue-comet",
    name: "AI 블루 코멧",
    description: "파란 혜성처럼 시원하게 떨어지는 빠른 곡",
    price: 1700,
    bpm: 168,
    lead: [
      "D5", "F#5", "A5", null, "D6", null, "A5", "F#5",
      "E5", "G5", "B5", null, "E6", null, "B5", "G5",
      "F#5", "A5", "D6", null, "C#6", "A5", "F#5", null,
      "E5", "F#5", "A5", "B5", "D6", null, "A5", null,
    ],
    bass: [
      "D2", null, null, null, "A2", null, null, null,
      "E2", null, null, null, "B2", null, null, null,
      "F#2", null, null, null, "D2", null, null, null,
      "E2", null, null, null, "A2", null, null, null,
    ],
    arp: [
      "D3", "F#3", "A3", "D4", "A2", "C#3", "E3", "A3",
      "E3", "G3", "B3", "E4", "B2", "D3", "F#3", "B3",
      "F#3", "A3", "C#4", "F#4", "D3", "F#3", "A3", "D4",
      "E3", "B3", "G3", "E4", "A2", "C#3", "E3", "A3",
    ],
    accent: "#3676ff",
  },
  {
    id: "ai-violet-night",
    name: "AI 바이올렛 나이트",
    description: "보라색 밤하늘 같은 몽환적인 신스 테마",
    price: 2100,
    bpm: 124,
    lead: [
      "A4", null, "C5", "E5", "G5", null, "E5", null,
      "B4", "D5", "F#5", null, "A5", null, "F#5", null,
      "C5", "E5", "G5", "B5", "A5", null, "E5", null,
      "D5", "F#5", "A5", null, "G5", "E5", "C5", null,
    ],
    bass: [
      "A2", null, null, null, "G2", null, null, null,
      "B2", null, null, null, "E2", null, null, null,
      "C3", null, null, null, "A2", null, null, null,
      "D2", null, null, null, "G2", null, null, null,
    ],
    arp: [
      "A3", "C4", "E4", "A4", "G3", "B3", "D4", "G4",
      "B2", "D3", "F#3", "B3", "E3", "G3", "B3", "E4",
      "C3", "E3", "G3", "C4", "A3", "C4", "E4", "A4",
      "D3", "F#3", "A3", "D4", "G3", "B3", "D4", "G4",
    ],
    accent: "#a446ff",
  },
  {
    id: "ai-red-alert",
    name: "AI 레드 얼럿",
    description: "위험 경보처럼 긴장감 있게 달리는 테마",
    price: 2300,
    bpm: 172,
    lead: [
      "E5", "F5", "G5", null, "E5", "F5", "A5", null,
      "G5", "A5", "C6", null, "B5", "A5", "G5", null,
      "E5", "G5", "B5", null, "D6", "C6", "B5", null,
      "A5", "G5", "F5", "E5", "G5", null, "E5", null,
    ],
    bass: [
      "E2", null, "E2", null, "F2", null, "F2", null,
      "G2", null, "G2", null, "A2", null, "A2", null,
      "E2", null, "E2", null, "B1", null, "B1", null,
      "C2", null, "C2", null, "D2", null, "D2", null,
    ],
    arp: [
      "E3", "G3", "B3", "E4", "F3", "A3", "C4", "F4",
      "G3", "B3", "D4", "G4", "A3", "C4", "E4", "A4",
      "E3", "B3", "G3", "E4", "B2", "D3", "F#3", "B3",
      "C3", "E3", "G3", "C4", "D3", "F#3", "A3", "D4",
    ],
    accent: "#e52222",
  },
  {
    id: "ai-sunset-pixel",
    name: "AI 선셋 픽셀",
    description: "노을빛 오락실 느낌의 따뜻한 칩튠",
    price: 1950,
    bpm: 144,
    lead: [
      "C5", "E5", "G5", null, "A5", null, "G5", "E5",
      "D5", "F5", "A5", null, "C6", null, "A5", "F5",
      "E5", "G5", "B5", null, "D6", "C6", "B5", null,
      "A5", "G5", "E5", "C5", "D5", null, "C5", null,
    ],
    bass: [
      "C2", null, null, null, "A2", null, null, null,
      "D2", null, null, null, "F2", null, null, null,
      "E2", null, null, null, "G2", null, null, null,
      "A2", null, null, null, "G2", null, null, null,
    ],
    arp: [
      "C3", "E3", "G3", "C4", "A2", "C3", "E3", "A3",
      "D3", "F3", "A3", "D4", "F3", "A3", "C4", "F4",
      "E3", "G3", "B3", "E4", "G3", "B3", "D4", "G4",
      "A2", "C3", "E3", "A3", "G2", "B2", "D3", "G3",
    ],
    accent: "#da7a10",
  },
];
const SHOP_THEMES = [
  {
    id: "classic",
    name: "클래식 네온",
    description: "처음부터 가지고 있는 기본 배경",
    price: 0,
    accent: "#8b5cf6",
    background: "rgba(0, 0, 0, 0.38)",
    grid: "rgba(42, 72, 255, 0.28)",
    glow: "rgba(20, 199, 196, 0.18)",
    effect: "none",
  },
  {
    id: "cyan-circuit",
    name: "시안 서킷",
    description: "차가운 전자 회로 느낌의 배경",
    price: 400,
    accent: "#14c7c4",
    background: "rgba(2, 18, 23, 0.72)",
    grid: "rgba(20, 199, 196, 0.34)",
    glow: "rgba(20, 199, 196, 0.35)",
    effect: "circuit",
  },
  {
    id: "pink-blast",
    name: "핑크 블래스트",
    description: "강한 대전장 느낌의 핑크 테마",
    price: 475,
    accent: "#ff3eb5",
    background: "rgba(26, 3, 22, 0.72)",
    grid: "rgba(255, 62, 181, 0.32)",
    glow: "rgba(255, 62, 181, 0.34)",
    effect: "burst",
  },
  {
    id: "gold-winner",
    name: "골드 위너",
    description: "승리자를 위한 금빛 배경",
    price: 700,
    accent: "#f5dc3a",
    background: "rgba(28, 20, 2, 0.74)",
    grid: "rgba(245, 220, 58, 0.28)",
    glow: "rgba(245, 220, 58, 0.32)",
    effect: "shimmer",
  },
  {
    id: "emerald-pulse",
    name: "에메랄드 펄스",
    description: "초록 네온이 박자처럼 뛰는 보드",
    price: 425,
    accent: "#35ff86",
    background: "rgba(2, 22, 11, 0.74)",
    grid: "rgba(53, 255, 134, 0.28)",
    glow: "rgba(53, 255, 134, 0.32)",
    effect: "pulse",
  },
  {
    id: "red-alert",
    name: "레드 얼럿",
    description: "위험 신호처럼 강렬한 붉은 보드",
    price: 520,
    accent: "#ff3b4f",
    background: "rgba(28, 3, 7, 0.74)",
    grid: "rgba(255, 59, 79, 0.3)",
    glow: "rgba(255, 59, 79, 0.34)",
    effect: "alarm",
  },
  {
    id: "ice-signal",
    name: "아이스 시그널",
    description: "차갑고 밝은 얼음빛 격자",
    price: 560,
    accent: "#9ee7ff",
    background: "rgba(2, 14, 28, 0.76)",
    grid: "rgba(158, 231, 255, 0.3)",
    glow: "rgba(158, 231, 255, 0.34)",
    effect: "snow",
  },
  {
    id: "violet-core",
    name: "바이올렛 코어",
    description: "보라색 중심광이 번지는 경기장",
    price: 600,
    accent: "#c084fc",
    background: "rgba(18, 7, 30, 0.76)",
    grid: "rgba(192, 132, 252, 0.3)",
    glow: "rgba(192, 132, 252, 0.36)",
    effect: "nebula",
  },
  {
    id: "white-grid",
    name: "화이트 그리드",
    description: "깔끔한 흰빛 선으로 정리된 보드",
    price: 650,
    accent: "#f8fafc",
    background: "rgba(8, 12, 20, 0.78)",
    grid: "rgba(248, 250, 252, 0.24)",
    glow: "rgba(248, 250, 252, 0.26)",
    effect: "spark",
  },
  {
    id: "arcade-lime",
    name: "아케이드 라임",
    description: "오락실 점수판 같은 라임빛 테마",
    price: 750,
    accent: "#d7ff3f",
    background: "rgba(18, 22, 2, 0.76)",
    grid: "rgba(215, 255, 63, 0.28)",
    glow: "rgba(215, 255, 63, 0.32)",
    effect: "arcade",
  },
];
const SHOP_BLOCK_SKINS = [
  {
    id: "neon-spectrum",
    name: "Neon Spectrum Blocks",
    description: "A vivid neon outline set with a distinct glow for every tetromino.",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/neon-spectrum.png",
    renderer: "neon-spectrum",
  },
  {
    id: "shadow-gap",
    name: "섀도 갭 블록",
    description: "검은 실루엣으로 구멍과 블록이 또렷한 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/shadow-gap.png",
  },
  {
    id: "star-gold",
    name: "스타 골드 블록",
    description: "별 장식이 박힌 황금 퍼즐 블록 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/star-gold.png",
  },
  {
    id: "pop-puzzle",
    name: "팝 퍼즐 블록",
    description: "밝은 파란 배경과 말랑한 컬러 블록 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/pop-puzzle.png",
  },
  {
    id: "glow-tower",
    name: "라이트 타워 블록",
    description: "빛나는 장난감 블록 느낌의 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/tetris-battle-desktop-bg.png",
  },
  {
    id: "effect-galaxy",
    name: "이펙트 갤럭시 블록",
    description: "우주빛 파티클이 들어간 화려한 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/effect-galaxy.png",
  },
  {
    id: "glossy-candy",
    name: "글로시 캔디 블록",
    description: "반짝이는 사탕 타일 같은 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/glossy-candy.png",
  },
  {
    id: "brick-play",
    name: "브릭 플레이 블록",
    description: "알록달록 조립 블록 느낌의 스킨",
    price: BLOCK_SKIN_PRICE,
    image: "assets/block-skins/brick-play.png",
  },
];
const AI_DIFFICULTY_CONFIGS = {
  easy: {
    label: "쉬움",
    rewardCoins: 25,
    dropIntervalMultiplier: 2.35,
    randomWeight: 6,
    mistakeChance: 0.12,
    mistakePoolSize: 4,
    safeMaxHeight: 15,
  },
  normal: {
    label: "중간",
    rewardCoins: 50,
    dropIntervalMultiplier: 1.15,
    randomWeight: 4,
    mistakeChance: 0.14,
    mistakePoolSize: 6,
    safeMaxHeight: 17,
  },
  hard: {
    label: "어려움",
    rewardCoins: 100,
    dropIntervalMultiplier: 0.78,
    randomWeight: 0.9,
    mistakeChance: 0.04,
    mistakePoolSize: 3,
    safeMaxHeight: 18,
  },
  hardcore: {
    label: "하드코어",
    rewardCoins: 300,
    dropIntervalMultiplier: 0.58,
    randomWeight: 0.2,
    mistakeChance: 0.01,
    mistakePoolSize: 2,
    safeMaxHeight: 19,
  },
};

const boardCanvas = document.querySelector("#board");
const boardContext = boardCanvas.getContext("2d");
const nextCanvas = document.querySelector("#next");
const nextContext = nextCanvas.getContext("2d");
const boardFrame = document.querySelector(".board-frame");
const comboPopup = document.querySelector("#comboPopup");
const comboPopupDetail = document.querySelector("#comboPopupDetail");
const homeScreen = document.querySelector("#homeScreen");
const battleSubtitle = document.querySelector("#battleSubtitle");
const lobbyScreen = document.querySelector("#lobbyScreen");
const gameScreen = document.querySelector("#gameScreen");
const touchControls = document.querySelector("#touchControls");
const nicknameInput = document.querySelector("#nicknameInput");
const selectedModeLabel = document.querySelector("#selectedModeLabel");
const modeButtons = document.querySelectorAll(".mode-button");
const roomActions = document.querySelector("#roomActions");
const createRoomButton = document.querySelector("#createRoomButton");
const showJoinButton = document.querySelector("#showJoinButton");
const joinPanel = document.querySelector("#joinPanel");
const roomCodeInput = document.querySelector("#roomCodeInput");
const joinRoomButton = document.querySelector("#joinRoomButton");
const spectateRoomButton = document.querySelector("#spectateRoomButton");
const connectionNote = document.querySelector("#connectionNote");
const lobbyError = document.querySelector("#lobbyError");
const lobbyModeTitle = document.querySelector("#lobbyModeTitle");
const roomCodeDisplay = document.querySelector("#roomCodeDisplay");
const copyInviteButton = document.querySelector("#copyInviteButton");
const copyLobbyLinkButton = document.querySelector("#copyLobbyLinkButton");
const shareLinkText = document.querySelector("#shareLinkText");
const lobbyQrCanvas = document.querySelector("#lobbyQrCanvas");
const lobbyQrHint = document.querySelector("#lobbyQrHint");
const backHomeButton = document.querySelector("#backHomeButton");
const lobbyHomeIconButton = document.querySelector("#lobbyHomeIconButton");
const myPlayerNumber = document.querySelector("#myPlayerNumber");
const myStatusText = document.querySelector("#myStatusText");
const myNickname = document.querySelector("#myNickname");
const myPreviewBoard = document.querySelector("#myPreviewBoard");
const playerCountText = document.querySelector("#playerCountText");
const playerSlots = document.querySelector("#playerSlots");
const readyButton = document.querySelector("#readyButton");
const startGameButton = document.querySelector("#startGameButton");
const startHint = document.querySelector("#startHint");
const opponentScreens = document.querySelector("#opponentScreens");
const returnMenuButton = document.querySelector("#returnMenuButton");
const gameRoomCodePanel = document.querySelector("#gameRoomCodePanel");
const gameRoomCodeText = document.querySelector("#gameRoomCodeText");
const copyGameInviteButton = document.querySelector("#copyGameInviteButton");
const settingsToggleButton = document.querySelector("#settingsToggleButton");
const gameSettingsPanel = document.querySelector("#gameSettingsPanel");
const musicToggleButton = document.querySelector("#musicToggleButton");
const musicVolumeInput = document.querySelector("#musicVolumeInput");
const musicVolumeValue = document.querySelector("#musicVolumeValue");
const aiDifficultyButtons = document.querySelectorAll("[data-ai-difficulty]");
const aiDifficultyHint = document.querySelector("#aiDifficultyHint");
const rewardCodeInput = document.querySelector("#rewardCodeInput");
const applyRewardCodeButton = document.querySelector("#applyRewardCodeButton");
const rewardCodeFeedback = document.querySelector("#rewardCodeFeedback");
const coinBalanceText = document.querySelector("#coinBalanceText");
const winCountText = document.querySelector("#winCountText");
const openShopButton = document.querySelector("#openShopButton");
const openInventoryButton = document.querySelector("#openInventoryButton");
const economyModal = document.querySelector("#economyModal");
const economyKicker = document.querySelector("#economyKicker");
const economyTitle = document.querySelector("#economyTitle");
const closeEconomyButton = document.querySelector("#closeEconomyButton");
const modalCoinBalanceText = document.querySelector("#modalCoinBalanceText");
const modalWinCountText = document.querySelector("#modalWinCountText");
const economyShopTab = document.querySelector("#economyShopTab");
const economyInventoryTab = document.querySelector("#economyInventoryTab");
const economyFeedback = document.querySelector("#economyFeedback");
const shopRotationText = document.querySelector("#shopRotationText");
const economyItems = document.querySelector("#economyItems");

const scoreElement = document.querySelector("#score");
const highScoreElement = document.querySelector("#highScore");
const levelElement = document.querySelector("#level");
const linesElement = document.querySelector("#lines");
const comboElement = document.querySelector("#combo");
const comboBlock = document.querySelector("#comboBlock");
const maxComboElement = document.querySelector("#maxCombo");
const message = document.querySelector("#gameMessage");
const messageTitle = document.querySelector("#messageTitle");
const startButton = document.querySelector("#startButton");
const resultRanking = document.querySelector("#resultRanking");
const resultRewardText = document.querySelector("#resultRewardText");
const rematchStatusText = document.querySelector("#rematchStatusText");
const resultActions = document.querySelector("#resultActions");
const rematchButton = document.querySelector("#rematchButton");
const resultMenuButton = document.querySelector("#resultMenuButton");
const pieceStats = document.querySelector("#pieceStats");

let board;
let current;
let next;
let bag;
let score;
let highScore;
let level;
let lines;
let comboCount;
let maxComboCount;
let comboPopupTimeout;
let comboResetTimeout;
let dropCounter;
let dropInterval;
let lastTime;
let running;
let paused;
let pieceCounts;
let lineClearEffects;
let clearPulseTimeout;
let opponentBoardSnapshots;
let lastSnapshotSentAt;
let aiGameStates;
let localPlayerEliminated;
let battleFinished;
let networkInviteBaseUrl;
let touchRepeatDelay;
let touchRepeatTimer;
let musicEnabled;
let musicVolumeDb;
let musicUnlocked;
let musicContext;
let musicMasterGain;
let musicTimer;
let musicNextStepTime;
let musicStepIndex;
let musicPlaying;
let coinBalance;
let winCount;
let ownedThemeIds;
let equippedThemeId;
let ownedBlockSkinIds;
let equippedBlockSkinId;
let blockSkinImages;
let ownedSongIds;
let equippedSongId;
let aiDifficulty;
let economyView;
let shopRotationSlot;
let shopRotationTimer;
let winRewardClaimed;
let lastWinRewardAmount;
let lastWinRewardMultiplier;
let lastWinRewardMaxCombo;
let socket = null;
const lobbyState = {
  roomId: null,
  roomCode: null,
  selectedMode: null,
  maxPlayers: 1,
  players: [],
  playerId: null,
  nickname: "",
  isHost: false,
  isReady: false,
  isConnected: Boolean(socket),
  gameStatus: "home",
  canStart: false,
  rematchVotes: [],
  isSpectator: false,
  spectatorCount: 0,
};

function getModeConfig(mode = lobbyState.selectedMode) {
  return MODE_CONFIG[mode] || MODE_CONFIG.solo;
}

function getNickname() {
  const nickname = nicknameInput.value.trim().slice(0, 16);
  return nickname || "Player 1";
}

function normalizeScoreValue(value) {
  const nextScore = Number(value);
  return Number.isFinite(nextScore) && nextScore > 0 ? Math.floor(nextScore) : 0;
}

function loadHighScore() {
  try {
    return normalizeScoreValue(window.localStorage.getItem(HIGH_SCORE_KEY));
  } catch {
    return 0;
  }
}

function saveHighScore(value) {
  highScore = Math.max(normalizeScoreValue(highScore), normalizeScoreValue(value));
  try {
    window.localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
  return highScore;
}

function loadCoinBalance() {
  try {
    return normalizeScoreValue(window.localStorage.getItem(COIN_BALANCE_KEY));
  } catch {
    return 0;
  }
}

function loadWinCount() {
  try {
    return normalizeScoreValue(window.localStorage.getItem(WIN_COUNT_KEY));
  } catch {
    return 0;
  }
}

function saveWinCount() {
  winCount = normalizeScoreValue(winCount);
  try {
    window.localStorage.setItem(WIN_COUNT_KEY, String(winCount));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function saveCoinBalance() {
  coinBalance = normalizeScoreValue(coinBalance);
  try {
    window.localStorage.setItem(COIN_BALANCE_KEY, String(coinBalance));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function getThemeIds() {
  return new Set(SHOP_THEMES.map((theme) => theme.id));
}

function loadOwnedThemeIds() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(OWNED_THEMES_KEY) || "[]");
    const validThemeIds = getThemeIds();
    return new Set(["classic", ...parsed.filter((id) => validThemeIds.has(id))]);
  } catch {
    return new Set(["classic"]);
  }
}

function saveOwnedThemeIds() {
  try {
    window.localStorage.setItem(OWNED_THEMES_KEY, JSON.stringify(Array.from(ownedThemeIds)));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function loadEquippedThemeId() {
  try {
    const savedThemeId = window.localStorage.getItem(EQUIPPED_THEME_KEY);
    return ownedThemeIds.has(savedThemeId) ? savedThemeId : "classic";
  } catch {
    return "classic";
  }
}

function saveEquippedThemeId() {
  try {
    window.localStorage.setItem(EQUIPPED_THEME_KEY, equippedThemeId);
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function getBlockSkinIds() {
  return new Set(SHOP_BLOCK_SKINS.map((skin) => skin.id));
}

function loadOwnedBlockSkinIds() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(OWNED_BLOCK_SKINS_KEY) || "[]");
    const validSkinIds = getBlockSkinIds();
    return new Set(parsed.filter((id) => validSkinIds.has(id)));
  } catch {
    return new Set();
  }
}

function saveOwnedBlockSkinIds() {
  try {
    window.localStorage.setItem(OWNED_BLOCK_SKINS_KEY, JSON.stringify(Array.from(ownedBlockSkinIds)));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function loadEquippedBlockSkinId() {
  try {
    const savedSkinId = window.localStorage.getItem(EQUIPPED_BLOCK_SKIN_KEY);
    return ownedBlockSkinIds.has(savedSkinId) ? savedSkinId : DEFAULT_BLOCK_SKIN_ID;
  } catch {
    return DEFAULT_BLOCK_SKIN_ID;
  }
}

function saveEquippedBlockSkinId() {
  try {
    window.localStorage.setItem(EQUIPPED_BLOCK_SKIN_KEY, equippedBlockSkinId);
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function getMusicTrackIds() {
  return new Set([DEFAULT_MUSIC_TRACK.id, ...SHOP_MUSIC_TRACKS.map((track) => track.id)]);
}

function loadOwnedSongIds() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(OWNED_SONGS_KEY) || "[]");
    const validSongIds = getMusicTrackIds();
    return new Set([DEFAULT_MUSIC_TRACK.id, ...parsed.filter((id) => validSongIds.has(id))]);
  } catch {
    return new Set([DEFAULT_MUSIC_TRACK.id]);
  }
}

function saveOwnedSongIds() {
  try {
    window.localStorage.setItem(OWNED_SONGS_KEY, JSON.stringify(Array.from(ownedSongIds)));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function loadEquippedSongId() {
  try {
    const savedSongId = window.localStorage.getItem(EQUIPPED_SONG_KEY);
    return ownedSongIds.has(savedSongId) ? savedSongId : DEFAULT_MUSIC_TRACK.id;
  } catch {
    return DEFAULT_MUSIC_TRACK.id;
  }
}

function saveEquippedSongId() {
  try {
    window.localStorage.setItem(EQUIPPED_SONG_KEY, equippedSongId);
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function getTheme(themeId = equippedThemeId) {
  return SHOP_THEMES.find((theme) => theme.id === themeId) || SHOP_THEMES[0];
}

function isThemeOwned(themeId) {
  return ownedThemeIds.has(themeId);
}

function getBlockSkin(skinId = equippedBlockSkinId) {
  return SHOP_BLOCK_SKINS.find((skin) => skin.id === skinId) || null;
}

function isBlockSkinOwned(skinId) {
  return ownedBlockSkinIds.has(skinId);
}

function getMusicTrack(trackId = equippedSongId) {
  return [DEFAULT_MUSIC_TRACK, ...SHOP_MUSIC_TRACKS].find((track) => track.id === trackId)
    || DEFAULT_MUSIC_TRACK;
}

function isSongOwned(songId) {
  return ownedSongIds.has(songId);
}

function getMusicStepSeconds() {
  return 60 / getMusicTrack().bpm / 4;
}

function getEquippedBlockSkinImage() {
  if (equippedBlockSkinId === DEFAULT_BLOCK_SKIN_ID) {
    return null;
  }

  const image = blockSkinImages.get(equippedBlockSkinId);
  return image?.complete && image.naturalWidth > 0 ? image : null;
}

function loadBlockSkinImages() {
  blockSkinImages = new Map();
  SHOP_BLOCK_SKINS.forEach((skin) => {
    const image = new Image();
    image.src = skin.image;
    image.onload = () => draw();
    blockSkinImages.set(skin.id, image);
  });
}

function isAiDifficultyUnlocked(difficulty) {
  return difficulty !== "hardcore" || winCount >= HARDCORE_UNLOCK_WINS;
}

function loadAiDifficulty() {
  try {
    const savedDifficulty = window.localStorage.getItem(AI_DIFFICULTY_KEY) || "normal";
    return AI_DIFFICULTY_CONFIGS[savedDifficulty] && isAiDifficultyUnlocked(savedDifficulty)
      ? savedDifficulty
      : "normal";
  } catch {
    return "normal";
  }
}

function saveAiDifficulty() {
  try {
    window.localStorage.setItem(AI_DIFFICULTY_KEY, aiDifficulty);
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function getAiDifficultyConfig() {
  return AI_DIFFICULTY_CONFIGS[aiDifficulty] || AI_DIFFICULTY_CONFIGS.normal;
}

function getWinRewardCoins() {
  return getAiDifficultyConfig().rewardCoins || AI_DIFFICULTY_CONFIGS.normal.rewardCoins;
}

function getWinRewardMessage() {
  const config = getAiDifficultyConfig();
  return `${config.label} 난이도 승리 보상: ${getWinRewardCoins()}코인`;
}

function getAiDropInterval(index = 0) {
  const config = getAiDifficultyConfig();
  const baseInterval = AI_BASE_DROP_INTERVAL + index * 70 + Math.random() * 120;
  return Math.max(55, baseInterval * config.dropIntervalMultiplier);
}

function renderCoinBalances() {
  if (coinBalanceText) {
    coinBalanceText.textContent = String(coinBalance);
  }
  if (winCountText) {
    winCountText.textContent = `우승 ${winCount}`;
  }
  if (modalCoinBalanceText) {
    modalCoinBalanceText.textContent = String(coinBalance);
  }
  if (modalWinCountText) {
    modalWinCountText.textContent = String(winCount);
  }
}

function renderAiDifficultySettings() {
  aiDifficultyButtons.forEach((button) => {
    const difficulty = button.dataset.aiDifficulty;
    const unlocked = isAiDifficultyUnlocked(difficulty);
    button.classList.toggle("is-selected", difficulty === aiDifficulty);
    button.disabled = !unlocked;
    button.textContent = difficulty === "hardcore" && !unlocked
      ? "하드코어 잠김"
      : AI_DIFFICULTY_CONFIGS[difficulty].label;
  });

  if (aiDifficultyHint) {
    aiDifficultyHint.textContent = winCount >= HARDCORE_UNLOCK_WINS
      ? `현재 AI 난이도: ${getAiDifficultyConfig().label} · 승리 보상 ${getWinRewardCoins()}코인`
      : `하드코어는 우승 ${HARDCORE_UNLOCK_WINS}회에 열립니다. 현재 ${winCount}회 · ${getWinRewardMessage()}`;
  }
}

function applyEquippedTheme() {
  const theme = getTheme();
  document.documentElement.style.setProperty("--line", theme.accent);
  document.documentElement.style.setProperty("--board-accent", theme.accent);
  document.documentElement.style.setProperty("--board-glow", theme.glow);
}

function addCoins(amount) {
  coinBalance += Math.max(0, Number(amount) || 0);
  saveCoinBalance();
  renderCoinBalances();
}

function setRewardCodeFeedback(messageText, type = "info") {
  if (!rewardCodeFeedback) {
    return;
  }

  rewardCodeFeedback.textContent = messageText;
  rewardCodeFeedback.classList.toggle("is-success", type === "success");
  rewardCodeFeedback.classList.toggle("is-error", type === "error");
}

function applyRewardCode() {
  if (!rewardCodeInput) {
    return;
  }

  const code = rewardCodeInput.value.trim();
  if (!code) {
    setRewardCodeFeedback("코드를 입력하세요.", "error");
    return;
  }

  if (!MONEY_REWARD_CODES.has(code)) {
    setRewardCodeFeedback("사용할 수 없는 코드입니다.", "error");
    return;
  }

  coinBalance += MONEY_REWARD_COINS;
  saveCoinBalance();
  renderCoinBalances();
  renderEconomy();
  rewardCodeInput.value = "";
  setRewardCodeFeedback(`${MONEY_REWARD_COINS}코인이 추가되었습니다.`, "success");
}

function addWinCount(amount = 1) {
  winCount += Math.max(0, Number(amount) || 0);
  saveWinCount();
  renderCoinBalances();
  renderAiDifficultySettings();
}

function setAiDifficulty(difficulty) {
  if (!AI_DIFFICULTY_CONFIGS[difficulty] || !isAiDifficultyUnlocked(difficulty)) {
    return;
  }

  aiDifficulty = difficulty;
  saveAiDifficulty();
  renderAiDifficultySettings();
  if (economyView === "shop" && !economyModal.classList.contains("is-hidden")) {
    setEconomyFeedback(getWinRewardMessage());
  }
  syncAiGamesWithPlayers();
}

function setEconomyFeedback(message) {
  if (economyFeedback) {
    economyFeedback.textContent = message;
  }
}

function getShopRotationSlot() {
  return Math.floor(Date.now() / SHOP_ROTATION_MS);
}

function getShopRotationRemainingText() {
  const remainingMs = SHOP_ROTATION_MS - (Date.now() % SHOP_ROTATION_MS);
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function createSeededRandom(seed) {
  let value = seed % 2147483647;
  if (value <= 0) {
    value += 2147483646;
  }

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function getCurrentShopThemes() {
  const random = createSeededRandom(getShopRotationSlot() + 97);
  const paidThemes = SHOP_THEMES.filter((theme) => theme.price >= 400);
  return paidThemes
    .map((theme) => ({ theme, order: random() }))
    .sort((a, b) => a.order - b.order)
    .slice(0, Math.min(SHOP_OFFER_COUNT, paidThemes.length))
    .map((entry) => entry.theme);
}

function getCurrentShopSongs() {
  const random = createSeededRandom(getShopRotationSlot() + 311);
  return SHOP_MUSIC_TRACKS
    .map((track) => ({ track, order: random() }))
    .sort((a, b) => a.order - b.order)
    .slice(0, Math.min(SHOP_OFFER_COUNT, SHOP_MUSIC_TRACKS.length))
    .map((entry) => entry.track);
}

function updateShopRotationText() {
  if (!shopRotationText) {
    return;
  }

  const shouldShow = economyView === "shop" && !economyModal.classList.contains("is-hidden");
  shopRotationText.classList.toggle("is-hidden", !shouldShow);
  if (shouldShow) {
    shopRotationText.textContent = `노래 ${SHOP_OFFER_COUNT}개 · 배경 ${SHOP_OFFER_COUNT}개 다음 변경 ${getShopRotationRemainingText()}`;
  }
}

function stopShopRotationTimer() {
  window.clearInterval(shopRotationTimer);
  shopRotationTimer = null;
  updateShopRotationText();
}

function startShopRotationTimer() {
  stopShopRotationTimer();
  shopRotationSlot = getShopRotationSlot();
  updateShopRotationText();

  shopRotationTimer = window.setInterval(() => {
    const nextSlot = getShopRotationSlot();
    if (nextSlot !== shopRotationSlot) {
      shopRotationSlot = nextSlot;
      if (economyView === "shop" && !economyModal.classList.contains("is-hidden")) {
        setEconomyFeedback("상점 상품이 새로 바뀌었습니다.");
        renderEconomy();
      }
      return;
    }

    updateShopRotationText();
  }, 1000);
}

function renderEconomyTabs() {
  economyShopTab.classList.toggle("is-active", economyView === "shop");
  economyInventoryTab.classList.toggle("is-active", economyView === "inventory");
  economyKicker.textContent = economyView === "shop" ? "STORE" : "INVENTORY";
  economyTitle.textContent = economyView === "shop" ? "상점" : "인벤토리";
}

function createThemeCard(theme, view) {
  const owned = isThemeOwned(theme.id);
  const equipped = equippedThemeId === theme.id;
  const card = document.createElement("article");
  card.className = "economy-item-card";
  card.classList.add("is-background-theme");
  card.classList.toggle("is-owned", owned);
  card.classList.toggle("is-equipped", equipped);

  const swatch = document.createElement("div");
  swatch.className = "theme-swatch";
  swatch.style.setProperty("--swatch-accent", theme.accent);
  swatch.style.setProperty("--swatch-grid", theme.grid);
  swatch.style.setProperty("--swatch-bg", theme.background);

  const info = document.createElement("div");
  info.className = "economy-item-info";

  const kind = document.createElement("span");
  kind.className = "item-kind";
  kind.textContent = "배경 테마";

  const title = document.createElement("h3");
  title.textContent = theme.name;

  const description = document.createElement("p");
  description.textContent = theme.description;

  const price = document.createElement("span");
  price.className = "item-price";
  price.textContent = theme.price === 0 ? "기본 보유" : `${theme.price} COIN`;

  info.append(kind, title, description, price);

  const action = document.createElement("button");
  action.type = "button";
  action.className = "economy-item-action";

  if (view === "shop") {
    if (owned) {
      action.textContent = equipped ? "장착중" : "보유중";
      action.disabled = true;
    } else {
      action.textContent = coinBalance >= theme.price ? "구매" : "코인 부족";
      action.disabled = coinBalance < theme.price;
      action.addEventListener("click", () => buyTheme(theme.id));
    }
  } else if (equipped) {
    action.textContent = "장착중";
    action.disabled = true;
  } else {
    action.textContent = "배경 장착";
    action.addEventListener("click", () => equipTheme(theme.id));
  }

  card.append(swatch, info, action);
  return card;
}

function createBlockSkinCard(skin, view) {
  const owned = isBlockSkinOwned(skin.id);
  const equipped = equippedBlockSkinId === skin.id;
  const card = document.createElement("article");
  card.className = "economy-item-card";
  card.classList.add("is-block-skin");
  card.classList.toggle("is-owned", owned);
  card.classList.toggle("is-equipped", equipped);

  const swatch = document.createElement("div");
  swatch.className = "block-skin-swatch";
  swatch.style.backgroundImage = `url("${skin.image}")`;

  const info = document.createElement("div");
  info.className = "economy-item-info";

  const kind = document.createElement("span");
  kind.className = "item-kind";
  kind.textContent = "블록 스킨";

  const title = document.createElement("h3");
  title.textContent = skin.name;

  const description = document.createElement("p");
  description.textContent = skin.description;

  const price = document.createElement("span");
  price.className = "item-price";
  price.textContent = `${skin.price} COIN`;

  info.append(kind, title, description, price);

  const action = document.createElement("button");
  action.type = "button";
  action.className = "economy-item-action";

  if (view === "shop") {
    if (owned) {
      action.textContent = equipped ? "장착중" : "보유중";
      action.disabled = true;
    } else {
      action.textContent = coinBalance >= skin.price ? "구매" : "코인 부족";
      action.disabled = coinBalance < skin.price;
      action.addEventListener("click", () => buyBlockSkin(skin.id));
    }
  } else if (equipped) {
    action.textContent = "장착중";
    action.disabled = true;
  } else {
    action.textContent = "블록 장착";
    action.addEventListener("click", () => equipBlockSkin(skin.id));
  }

  card.append(swatch, info, action);
  return card;
}

function createSongCard(track, view) {
  const owned = isSongOwned(track.id);
  const equipped = equippedSongId === track.id;
  const card = document.createElement("article");
  card.className = "economy-item-card";
  card.classList.add("is-song-item");
  card.classList.toggle("is-owned", owned);
  card.classList.toggle("is-equipped", equipped);

  const swatch = document.createElement("div");
  swatch.className = "song-swatch";
  swatch.style.setProperty("--song-accent", track.accent);
  swatch.textContent = "AI";

  const info = document.createElement("div");
  info.className = "economy-item-info";

  const kind = document.createElement("span");
  kind.className = "item-kind";
  kind.textContent = "AI 작곡 노래";

  const title = document.createElement("h3");
  title.textContent = track.name;

  const description = document.createElement("p");
  description.textContent = `${track.description} · ${track.bpm} BPM`;

  const price = document.createElement("span");
  price.className = "item-price";
  price.textContent = track.price === 0 ? "기본 보유" : `${track.price} COIN`;

  info.append(kind, title, description, price);

  const action = document.createElement("button");
  action.type = "button";
  action.className = "economy-item-action";

  if (view === "shop") {
    if (owned) {
      action.textContent = equipped ? "재생중" : "보유중";
      action.disabled = true;
    } else {
      action.textContent = coinBalance >= track.price ? "구매" : "코인 부족";
      action.disabled = coinBalance < track.price;
      action.addEventListener("click", () => buySong(track.id));
    }
  } else if (equipped) {
    action.textContent = "재생중";
    action.disabled = true;
  } else {
    action.textContent = "노래 장착";
    action.addEventListener("click", () => equipSong(track.id));
  }

  card.append(swatch, info, action);
  return card;
}

function appendEconomySection(title, description, items, createCard, emptyText) {
  const section = document.createElement("section");
  section.className = "economy-section";

  const header = document.createElement("div");
  header.className = "economy-section-header";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const detail = document.createElement("p");
  detail.textContent = description;

  header.append(heading, detail);
  section.appendChild(header);

  const itemGrid = document.createElement("div");
  itemGrid.className = "economy-section-items";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "economy-empty-text";
    empty.textContent = emptyText;
    itemGrid.appendChild(empty);
  } else {
    items.forEach((item) => {
      itemGrid.appendChild(createCard(item, economyView));
    });
  }

  section.appendChild(itemGrid);
  economyItems.appendChild(section);
}

function renderEconomy() {
  if (!economyItems) {
    return;
  }

  renderCoinBalances();
  renderEconomyTabs();
  economyItems.innerHTML = "";

  const blockSkinItems = economyView === "inventory"
    ? SHOP_BLOCK_SKINS.filter((skin) => isBlockSkinOwned(skin.id))
    : SHOP_BLOCK_SKINS;
  const songItems = economyView === "inventory"
    ? [DEFAULT_MUSIC_TRACK, ...SHOP_MUSIC_TRACKS].filter((track) => isSongOwned(track.id))
    : getCurrentShopSongs();
  const backgroundItems = economyView === "inventory"
    ? SHOP_THEMES.filter((theme) => isThemeOwned(theme.id))
    : getCurrentShopThemes();

  appendEconomySection(
    "블록 스킨",
    economyView === "shop" ? "블록 모양을 바꾸는 고급 스킨" : "구매한 블록 스킨",
    blockSkinItems,
    createBlockSkinCard,
    "구매한 블록 스킨이 없습니다.",
  );
  appendEconomySection(
    "AI 노래",
    economyView === "shop" ? `5분마다 랜덤 ${SHOP_OFFER_COUNT}곡` : "구매한 노래와 기본 노래",
    songItems,
    createSongCard,
    "보유한 노래가 없습니다.",
  );
  appendEconomySection(
    "배경 테마",
    economyView === "shop" ? `5분마다 랜덤 ${SHOP_OFFER_COUNT}개` : "구매한 배경 테마",
    backgroundItems,
    createThemeCard,
    "보유한 배경 테마가 없습니다.",
  );

  updateShopRotationText();
}

function openEconomy(view = "shop") {
  economyView = view;
  economyModal.classList.remove("is-hidden");
  setSettingsOpen(false);
  setEconomyFeedback(view === "shop" ? getWinRewardMessage() : "보유한 블록 스킨, 노래, 배경을 장착하세요.");
  renderEconomy();
  if (view === "shop") {
    startShopRotationTimer();
  } else {
    stopShopRotationTimer();
  }
}

function closeEconomy() {
  economyModal.classList.add("is-hidden");
  stopShopRotationTimer();
}

function buyTheme(themeId) {
  const theme = getTheme(themeId);
  if (isThemeOwned(theme.id)) {
    setEconomyFeedback("이미 가지고 있는 테마입니다.");
    return;
  }
  if (coinBalance < theme.price) {
    setEconomyFeedback("코인이 부족합니다.");
    return;
  }

  coinBalance -= theme.price;
  ownedThemeIds.add(theme.id);
  saveCoinBalance();
  saveOwnedThemeIds();
  setEconomyFeedback(`${theme.name} 구매 완료. 인벤토리에서 장착할 수 있습니다.`);
  renderEconomy();
}

function buyBlockSkin(skinId) {
  const skin = getBlockSkin(skinId);
  if (!skin) {
    return;
  }
  if (isBlockSkinOwned(skin.id)) {
    setEconomyFeedback("이미 가지고 있는 블록 스킨입니다.");
    return;
  }
  if (coinBalance < skin.price) {
    setEconomyFeedback("코인이 부족합니다.");
    return;
  }

  coinBalance -= skin.price;
  ownedBlockSkinIds.add(skin.id);
  equippedBlockSkinId = skin.id;
  saveCoinBalance();
  saveOwnedBlockSkinIds();
  saveEquippedBlockSkinId();
  setEconomyFeedback(`${skin.name} 구매 완료. 블록 모양이 바뀝니다.`);
  renderEconomy();
  draw();
}

function buySong(songId) {
  unlockMusicAudio();
  const track = getMusicTrack(songId);
  if (isSongOwned(track.id)) {
    setEconomyFeedback("이미 가지고 있는 노래입니다.");
    return;
  }
  if (coinBalance < track.price) {
    setEconomyFeedback("코인이 부족합니다.");
    return;
  }

  coinBalance -= track.price;
  ownedSongIds.add(track.id);
  equippedSongId = track.id;
  saveCoinBalance();
  saveOwnedSongIds();
  saveEquippedSongId();
  setEconomyFeedback(`${track.name} 구매 완료. AI 노래가 장착됐습니다.`);
  renderEconomy();
  stopMusic();
  syncMusicToGame({ restart: true });
}

function equipTheme(themeId) {
  if (!isThemeOwned(themeId)) {
    setEconomyFeedback("먼저 상점에서 구매해야 합니다.");
    return;
  }

  equippedThemeId = themeId;
  saveEquippedThemeId();
  applyEquippedTheme();
  setEconomyFeedback(`${getTheme(themeId).name} 장착 완료.`);
  renderEconomy();
  draw();
}

function equipBlockSkin(skinId) {
  if (!isBlockSkinOwned(skinId)) {
    setEconomyFeedback("먼저 상점에서 구매해야 합니다.");
    return;
  }

  equippedBlockSkinId = skinId;
  saveEquippedBlockSkinId();
  setEconomyFeedback(`${getBlockSkin(skinId).name} 장착 완료.`);
  renderEconomy();
  draw();
}

function equipSong(songId) {
  unlockMusicAudio();
  if (!isSongOwned(songId)) {
    setEconomyFeedback("먼저 상점에서 구매해야 합니다.");
    return;
  }

  equippedSongId = songId;
  saveEquippedSongId();
  setEconomyFeedback(`${getMusicTrack(songId).name} 장착 완료.`);
  renderEconomy();
  stopMusic();
  syncMusicToGame({ restart: true });
}

function loadMusicPreference() {
  try {
    return window.localStorage.getItem(MUSIC_PREF_KEY) !== "0";
  } catch {
    return true;
  }
}

function clampMusicVolumeDb(value) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return DEFAULT_MUSIC_VOLUME_DB;
  }
  return Math.min(MAX_MUSIC_VOLUME_DB, Math.max(0, Math.round(parsed)));
}

function loadMusicVolumeDb() {
  try {
    const savedVolume = window.localStorage.getItem(MUSIC_VOLUME_KEY);
    return savedVolume === null ? DEFAULT_MUSIC_VOLUME_DB : clampMusicVolumeDb(savedVolume);
  } catch {
    return DEFAULT_MUSIC_VOLUME_DB;
  }
}

function saveMusicVolumeDb() {
  try {
    window.localStorage.setItem(MUSIC_VOLUME_KEY, String(musicVolumeDb));
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function getConfiguredMusicGain() {
  return MUSIC_MASTER_VOLUME * (musicVolumeDb / MAX_MUSIC_VOLUME_DB);
}

function saveMusicPreference() {
  try {
    window.localStorage.setItem(MUSIC_PREF_KEY, musicEnabled ? "1" : "0");
  } catch {
    // localStorage can be unavailable in some browser privacy modes.
  }
}

function updateMusicToggle() {
  if (musicToggleButton) {
    musicToggleButton.textContent = musicEnabled ? "ON" : "OFF";
    musicToggleButton.setAttribute("aria-pressed", musicEnabled ? "true" : "false");
    musicToggleButton.classList.toggle("is-on", musicEnabled);
  }

  if (musicVolumeInput) {
    musicVolumeInput.value = String(musicVolumeDb);
    musicVolumeInput.setAttribute("aria-valuetext", `${musicVolumeDb} dB`);
  }
  if (musicVolumeValue) {
    musicVolumeValue.textContent = `${musicVolumeDb} dB`;
  }
}

function setMusicVolume(value) {
  musicVolumeDb = clampMusicVolumeDb(value);
  saveMusicVolumeDb();
  setMusicMasterVolume(musicEnabled ? getConfiguredMusicGain() : 0);
  updateMusicToggle();
}

function getMusicContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!musicContext) {
    musicContext = new AudioContextClass();
    musicMasterGain = musicContext.createGain();
    musicMasterGain.gain.value = musicEnabled ? getConfiguredMusicGain() : 0;
    musicMasterGain.connect(musicContext.destination);
  }

  return musicContext;
}

function setMusicMasterVolume(volume) {
  if (!musicContext || !musicMasterGain) {
    return;
  }

  const now = musicContext.currentTime;
  musicMasterGain.gain.cancelScheduledValues(now);
  musicMasterGain.gain.setValueAtTime(volume, now);
}

function unlockMusicAudio() {
  if (!musicEnabled) {
    return;
  }

  musicUnlocked = true;
  const context = getMusicContext();
  const resumeResult = context?.resume?.();
  if (resumeResult?.then) {
    resumeResult.then(() => syncMusicToGame()).catch(() => {});
    return;
  }
  syncMusicToGame();
}

function getNoteFrequency(note) {
  const match = /^([A-G]#?)(-?\d)$/.exec(note);
  if (!match) {
    return null;
  }

  const noteOffsets = {
    C: 0,
    "C#": 1,
    D: 2,
    "D#": 3,
    E: 4,
    F: 5,
    "F#": 6,
    G: 7,
    "G#": 8,
    A: 9,
    "A#": 10,
    B: 11,
  };
  const [, pitch, octaveText] = match;
  const midiNumber = (Number(octaveText) + 1) * 12 + noteOffsets[pitch];
  return 440 * (2 ** ((midiNumber - 69) / 12));
}

function scheduleMusicTone(note, time, duration, type, gainValue, detune = 0) {
  const frequency = getNoteFrequency(note);
  if (!frequency || !musicContext || !musicMasterGain) {
    return;
  }

  const oscillator = musicContext.createOscillator();
  const gainNode = musicContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, time);
  oscillator.detune.setValueAtTime(detune, time);
  gainNode.gain.setValueAtTime(0.0001, time);
  gainNode.gain.exponentialRampToValueAtTime(gainValue, time + 0.012);
  gainNode.gain.setValueAtTime(gainValue, time + duration * 0.68);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  oscillator.connect(gainNode);
  gainNode.connect(musicMasterGain);
  oscillator.start(time);
  oscillator.stop(time + duration + 0.04);
}

function playLockSound({ cleared = 0, combo = 0 } = {}) {
  if (!musicEnabled || !musicUnlocked) {
    return;
  }

  const context = getMusicContext();
  if (!context || !musicMasterGain) {
    return;
  }

  context.resume?.().catch(() => {});
  setMusicMasterVolume(getConfiguredMusicGain());
  const now = context.currentTime;

  const thump = context.createOscillator();
  const thumpGain = context.createGain();
  thump.type = "triangle";
  thump.frequency.setValueAtTime(118 + cleared * 12, now);
  thump.frequency.exponentialRampToValueAtTime(54, now + 0.09);
  thumpGain.gain.setValueAtTime(0.0001, now);
  thumpGain.gain.exponentialRampToValueAtTime(0.09, now + 0.008);
  thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
  thump.connect(thumpGain);
  thumpGain.connect(musicMasterGain);
  thump.start(now);
  thump.stop(now + 0.14);

  const click = context.createOscillator();
  const clickGain = context.createGain();
  click.type = "square";
  click.frequency.setValueAtTime(520 + combo * 24, now);
  clickGain.gain.setValueAtTime(0.0001, now);
  clickGain.gain.exponentialRampToValueAtTime(0.026, now + 0.004);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
  click.connect(clickGain);
  clickGain.connect(musicMasterGain);
  click.start(now);
  click.stop(now + 0.05);
}

function playLineClearSound(cleared = 0, combo = 0) {
  if (!cleared || !musicEnabled || !musicUnlocked) {
    return;
  }

  const context = getMusicContext();
  if (!context || !musicMasterGain) {
    return;
  }

  context.resume?.().catch(() => {});
  setMusicMasterVolume(getConfiguredMusicGain());
  const now = context.currentTime;
  const notes = cleared >= 4
    ? ["C5", "E5", "G5", "C6"]
    : cleared === 3
      ? ["A4", "C5", "E5"]
      : cleared === 2
        ? ["G4", "B4"]
        : ["E5"];

  notes.forEach((note, index) => {
    const frequency = getNoteFrequency(note);
    if (!frequency) {
      return;
    }

    const start = now + index * 0.045;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.type = cleared >= 4 ? "square" : "triangle";
    oscillator.frequency.setValueAtTime(frequency + combo * 4, start);
    gainNode.gain.setValueAtTime(0.0001, start);
    gainNode.gain.exponentialRampToValueAtTime(0.06, start + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
    oscillator.connect(gainNode);
    gainNode.connect(musicMasterGain);
    oscillator.start(start);
    oscillator.stop(start + 0.22);
  });
}

function scheduleMusicStep(stepIndex, time) {
  const track = getMusicTrack();
  const stepSeconds = getMusicStepSeconds();
  const lead = track.lead[stepIndex % track.lead.length];
  const bass = track.bass[stepIndex % track.bass.length];
  const arp = track.arp[stepIndex % track.arp.length];

  if (bass) {
    scheduleMusicTone(bass, time, stepSeconds * 2.8, "square", 0.052, -8);
  }
  if (arp) {
    scheduleMusicTone(arp, time, stepSeconds * 0.66, "triangle", 0.022);
  }
  if (lead) {
    scheduleMusicTone(lead, time, stepSeconds * 1.08, "square", 0.045, 4);
    scheduleMusicTone(lead, time, stepSeconds * 0.9, "triangle", 0.018, -12);
  }
  if (stepIndex % 4 === 0) {
    scheduleMusicTone("A6", time, stepSeconds * 0.18, "square", 0.01);
  }
}

function scheduleMusicLoop() {
  if (!musicPlaying || !musicContext) {
    return;
  }

  while (musicNextStepTime < musicContext.currentTime + 0.2) {
    const track = getMusicTrack();
    scheduleMusicStep(musicStepIndex, musicNextStepTime);
    musicNextStepTime += getMusicStepSeconds();
    musicStepIndex = (musicStepIndex + 1) % track.lead.length;
  }
}

function startMusic({ restart = false } = {}) {
  if (!musicEnabled) {
    stopMusic();
    return;
  }

  const context = getMusicContext();
  if (!context) {
    return;
  }

  context.resume?.().catch(() => {});
  setMusicMasterVolume(getConfiguredMusicGain());
  if (musicPlaying && !restart) {
    updateMusicToggle();
    return;
  }

  if (musicTimer) {
    window.clearInterval(musicTimer);
  }

  musicPlaying = true;
  musicStepIndex = restart ? 0 : (musicStepIndex || 0);
  musicNextStepTime = context.currentTime + 0.05;
  scheduleMusicLoop();
  musicTimer = window.setInterval(scheduleMusicLoop, 45);
  updateMusicToggle();
}

function stopMusic() {
  if (musicTimer) {
    window.clearInterval(musicTimer);
    musicTimer = null;
  }
  setMusicMasterVolume(0);
  musicPlaying = false;
  updateMusicToggle();
}

function shouldPlayMusic() {
  if (!musicEnabled || !musicUnlocked || paused) {
    return false;
  }

  if (["home", "lobby", "modeSelect", "countdown"].includes(lobbyState.gameStatus)) {
    return true;
  }

  return (
    lobbyState.gameStatus === "playing" &&
    (running || lobbyState.isSpectator || localPlayerEliminated)
  );
}

function syncMusicToGame({ restart = false } = {}) {
  if (shouldPlayMusic()) {
    startMusic({ restart });
  } else {
    stopMusic();
  }
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  saveMusicPreference();
  if (musicEnabled) {
    unlockMusicAudio();
    syncMusicToGame({ restart: !musicPlaying });
  } else {
    stopMusic();
  }
  updateMusicToggle();
}

function syncHighScoreFromPlayers() {
  const me = getLocalPlayer();
  if (me) {
    saveHighScore(me.highScore);
    me.highScore = highScore;
  }
}

function setLobbyError(message = "") {
  lobbyError.textContent = message;
}

function isLocalHostName(hostname = window.location.hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

function getInviteBaseUrl() {
  if (networkInviteBaseUrl && isLocalHostName()) {
    return networkInviteBaseUrl;
  }

  if (window.location.protocol === "file:") {
    return networkInviteBaseUrl || "http://localhost:5173";
  }

  const pathname = window.location.pathname.endsWith(".html")
    ? window.location.pathname.replace(/[^/]+$/, "")
    : window.location.pathname;
  return `${window.location.origin}${pathname}`;
}

function getInviteUrl() {
  if (!lobbyState.roomCode) {
    return "";
  }

  const baseUrl = getInviteBaseUrl().replace(/\/$/, "");
  return `${baseUrl}/?room=${encodeURIComponent(lobbyState.roomCode)}`;
}

function appendQrBits(bits, value, length) {
  for (let index = length - 1; index >= 0; index -= 1) {
    bits.push(Boolean((value >>> index) & 1));
  }
}

function qrGfMultiply(a, b) {
  let result = 0;
  let multiplicand = a;
  let multiplier = b;

  while (multiplier > 0) {
    if (multiplier & 1) {
      result ^= multiplicand;
    }
    multiplicand <<= 1;
    if (multiplicand & 0x100) {
      multiplicand ^= 0x11d;
    }
    multiplier >>>= 1;
  }

  return result;
}

function qrGfPow(base, exponent) {
  let result = 1;
  for (let index = 0; index < exponent; index += 1) {
    result = qrGfMultiply(result, base);
  }
  return result;
}

function createQrGeneratorPolynomial(degree) {
  let polynomial = [1];

  for (let index = 0; index < degree; index += 1) {
    const next = Array(polynomial.length + 1).fill(0);
    const factor = qrGfPow(2, index);
    polynomial.forEach((coefficient, coefficientIndex) => {
      next[coefficientIndex] ^= coefficient;
      next[coefficientIndex + 1] ^= qrGfMultiply(coefficient, factor);
    });
    polynomial = next;
  }

  return polynomial;
}

function createQrErrorCorrection(dataCodewords, degree) {
  const generator = createQrGeneratorPolynomial(degree);
  const remainder = Array(degree).fill(0);

  dataCodewords.forEach((codeword) => {
    const factor = codeword ^ remainder.shift();
    remainder.push(0);
    generator.slice(1).forEach((coefficient, index) => {
      remainder[index] ^= qrGfMultiply(coefficient, factor);
    });
  });

  return remainder;
}

function createQrCodewords(text) {
  const bytes = Array.from(new TextEncoder().encode(text));
  if (bytes.length > QR_BYTE_CAPACITY) {
    throw new Error("QR invite URL is too long.");
  }

  const bits = [];
  appendQrBits(bits, 0b0100, 4);
  appendQrBits(bits, bytes.length, 8);
  bytes.forEach((byte) => appendQrBits(bits, byte, 8));

  const maxBits = QR_DATA_CODEWORDS * 8;
  appendQrBits(bits, 0, Math.min(4, maxBits - bits.length));
  while (bits.length % 8 !== 0) {
    bits.push(false);
  }

  const dataCodewords = [];
  for (let index = 0; index < bits.length; index += 8) {
    let codeword = 0;
    for (let bitIndex = 0; bitIndex < 8; bitIndex += 1) {
      codeword = (codeword << 1) | (bits[index + bitIndex] ? 1 : 0);
    }
    dataCodewords.push(codeword);
  }

  for (let padIndex = 0; dataCodewords.length < QR_DATA_CODEWORDS; padIndex += 1) {
    dataCodewords.push(padIndex % 2 === 0 ? 0xec : 0x11);
  }

  return [
    ...dataCodewords,
    ...createQrErrorCorrection(dataCodewords, QR_EC_CODEWORDS),
  ];
}

function shouldMaskQrModule(mask, x, y) {
  switch (mask) {
    case 1:
      return y % 2 === 0;
    case 2:
      return x % 3 === 0;
    case 3:
      return (x + y) % 3 === 0;
    case 4:
      return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
    case 5:
      return ((x * y) % 2) + ((x * y) % 3) === 0;
    case 6:
      return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
    case 7:
      return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
    default:
      return (x + y) % 2 === 0;
  }
}

function createQrMatrix(text, mask = 0) {
  const matrix = Array.from({ length: QR_SIZE }, () => Array(QR_SIZE).fill(false));
  const reserved = Array.from({ length: QR_SIZE }, () => Array(QR_SIZE).fill(false));

  const setModule = (x, y, dark, reserve = true) => {
    if (x < 0 || x >= QR_SIZE || y < 0 || y >= QR_SIZE) {
      return;
    }
    matrix[y][x] = Boolean(dark);
    if (reserve) {
      reserved[y][x] = true;
    }
  };
  const reserveModule = (x, y) => {
    if (x >= 0 && x < QR_SIZE && y >= 0 && y < QR_SIZE) {
      reserved[y][x] = true;
    }
  };

  const drawFinder = (x, y) => {
    for (let dy = -1; dy <= 7; dy += 1) {
      for (let dx = -1; dx <= 7; dx += 1) {
        const xx = x + dx;
        const yy = y + dy;
        const inFinder = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6;
        const dark = inFinder && (
          dx === 0 || dx === 6 || dy === 0 || dy === 6 ||
          (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)
        );
        setModule(xx, yy, dark);
      }
    }
  };

  drawFinder(0, 0);
  drawFinder(QR_SIZE - 7, 0);
  drawFinder(0, QR_SIZE - 7);

  for (let index = 8; index < QR_SIZE - 8; index += 1) {
    const dark = index % 2 === 0;
    setModule(index, 6, dark);
    setModule(6, index, dark);
  }

  for (let dy = -2; dy <= 2; dy += 1) {
    for (let dx = -2; dx <= 2; dx += 1) {
      const distance = Math.max(Math.abs(dx), Math.abs(dy));
      setModule(30 + dx, 30 + dy, distance !== 1);
    }
  }

  for (let index = 0; index <= 8; index += 1) {
    reserveModule(8, index);
    reserveModule(index, 8);
  }
  for (let index = 0; index < 8; index += 1) {
    reserveModule(QR_SIZE - 1 - index, 8);
    reserveModule(8, QR_SIZE - 1 - index);
  }
  setModule(8, QR_SIZE - 8, true);

  const codewordBits = [];
  createQrCodewords(text).forEach((codeword) => appendQrBits(codewordBits, codeword, 8));

  let bitIndex = 0;
  let upward = true;
  for (let right = QR_SIZE - 1; right >= 1; right -= 2) {
    if (right === 6) {
      right -= 1;
    }
    for (let vertical = 0; vertical < QR_SIZE; vertical += 1) {
      const y = upward ? QR_SIZE - 1 - vertical : vertical;
      for (let columnOffset = 0; columnOffset < 2; columnOffset += 1) {
        const x = right - columnOffset;
        if (reserved[y][x]) {
          continue;
        }
        const bit = bitIndex < codewordBits.length ? codewordBits[bitIndex] : false;
        bitIndex += 1;
        matrix[y][x] = bit !== shouldMaskQrModule(mask, x, y);
      }
    }
    upward = !upward;
  }

  const formatBits = QR_FORMAT_BITS_L[mask] || QR_FORMAT_BITS_L[0];
  const formatBit = (index) => Boolean((formatBits >>> index) & 1);
  for (let index = 0; index <= 5; index += 1) {
    setModule(8, index, formatBit(index));
  }
  setModule(8, 7, formatBit(6));
  setModule(8, 8, formatBit(7));
  setModule(7, 8, formatBit(8));
  for (let index = 9; index < 15; index += 1) {
    setModule(14 - index, 8, formatBit(index));
  }
  for (let index = 0; index < 8; index += 1) {
    setModule(QR_SIZE - 1 - index, 8, formatBit(index));
  }
  for (let index = 8; index < 15; index += 1) {
    setModule(8, QR_SIZE - 15 + index, formatBit(index));
  }
  setModule(8, QR_SIZE - 8, true);

  return matrix;
}

function drawQrPlaceholder(messageText = "QR") {
  if (!lobbyQrCanvas) {
    return;
  }

  const context = lobbyQrCanvas.getContext("2d");
  if (!context) {
    return;
  }

  context.clearRect(0, 0, lobbyQrCanvas.width, lobbyQrCanvas.height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, lobbyQrCanvas.width, lobbyQrCanvas.height);
  context.fillStyle = "#121826";
  context.font = "700 18px Arial, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(messageText, lobbyQrCanvas.width / 2, lobbyQrCanvas.height / 2);
}

function drawQrCode(text) {
  if (!lobbyQrCanvas) {
    return;
  }

  const context = lobbyQrCanvas.getContext("2d");
  if (!context) {
    return;
  }

  const modules = createQrMatrix(text);
  const quietZone = 4;
  const moduleCount = QR_SIZE + quietZone * 2;
  const scale = Math.floor(Math.min(lobbyQrCanvas.width, lobbyQrCanvas.height) / moduleCount);
  const qrPixels = moduleCount * scale;
  const offsetX = Math.floor((lobbyQrCanvas.width - qrPixels) / 2);
  const offsetY = Math.floor((lobbyQrCanvas.height - qrPixels) / 2);

  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, lobbyQrCanvas.width, lobbyQrCanvas.height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, lobbyQrCanvas.width, lobbyQrCanvas.height);
  context.fillStyle = "#050816";

  modules.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (dark) {
        context.fillRect(
          offsetX + (x + quietZone) * scale,
          offsetY + (y + quietZone) * scale,
          scale,
          scale,
        );
      }
    });
  });
}

function renderLobbyQrCode(inviteUrl = getInviteUrl()) {
  if (!lobbyQrCanvas) {
    return;
  }

  lobbyQrCanvas.classList.toggle("is-empty", !inviteUrl);
  lobbyQrCanvas.title = inviteUrl || "방을 만들면 QR 코드가 표시됩니다.";

  if (!inviteUrl) {
    drawQrPlaceholder("ROOM QR");
    if (lobbyQrHint) {
      lobbyQrHint.textContent = "방을 만들면 휴대폰 접속 QR이 표시됩니다.";
    }
    return;
  }

  try {
    drawQrCode(inviteUrl);
    if (lobbyQrHint) {
      lobbyQrHint.textContent = "같은 와이파이에서 휴대폰 카메라로 스캔하세요.";
    }
  } catch {
    drawQrPlaceholder("LINK");
    if (lobbyQrHint) {
      lobbyQrHint.textContent = "링크가 길어서 복사 버튼을 사용하세요.";
    }
  }
}

function renderShareLink() {
  if (!shareLinkText) {
    return;
  }

  const inviteUrl = getInviteUrl();
  shareLinkText.textContent = inviteUrl || "방을 만들면 공유 링크가 표시됩니다.";
  renderLobbyQrCode(inviteUrl);
}

function renderGameRoomCode() {
  if (!gameRoomCodePanel || !gameRoomCodeText) {
    return;
  }

  const shouldShow = (
    ["playing", "gameOver"].includes(lobbyState.gameStatus) &&
    Boolean(lobbyState.roomCode) &&
    lobbyState.roomCode !== "LOCAL"
  );

  gameRoomCodePanel.classList.toggle("is-hidden", !shouldShow);
  if (shouldShow) {
    gameRoomCodeText.textContent = lobbyState.roomCode;
  }
}

function setSettingsOpen(isOpen) {
  if (!settingsToggleButton || !gameSettingsPanel) {
    return;
  }

  settingsToggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  settingsToggleButton.classList.toggle("is-open", isOpen);
  gameSettingsPanel.classList.toggle("is-hidden", !isOpen);
}

async function loadNetworkInfo() {
  if (window.location.protocol === "file:") {
    renderShareLink();
    renderGameRoomCode();
    return;
  }

  try {
    const response = await fetch("/network-info");
    const data = await response.json();
    networkInviteBaseUrl = data.networkUrls?.[0] || data.localUrl || "";
    renderShareLink();
    renderGameRoomCode();
  } catch {
    networkInviteBaseUrl = "";
    renderShareLink();
    renderGameRoomCode();
  }
}

async function copyInviteLink() {
  const inviteUrl = getInviteUrl();
  if (!inviteUrl) {
    startHint.textContent = "먼저 방을 만들어 주세요.";
    return;
  }

  try {
    await navigator.clipboard.writeText(inviteUrl);
    startHint.textContent = "공유 링크를 복사했습니다.";
  } catch {
    startHint.textContent = `복사 실패: ${inviteUrl}`;
  }
}

function showScreen(screen) {
  homeScreen.classList.toggle("is-hidden", screen !== "home");
  lobbyScreen.classList.toggle("is-hidden", screen !== "lobby" && screen !== "countdown");
  gameScreen.classList.toggle("is-hidden", screen !== "playing" && screen !== "gameOver");
  touchControls.classList.toggle("is-hidden", screen !== "playing" && screen !== "gameOver");
  document.body.classList.toggle("is-playing", screen === "playing" || screen === "gameOver");
  renderGameRoomCode();
  syncMusicToGame();
}

function selectMode(mode) {
  const config = MODE_CONFIG[mode];
  if (!config) {
    return;
  }

  lobbyState.selectedMode = mode;
  lobbyState.maxPlayers = config.maxPlayers;
  lobbyState.gameStatus = "modeSelect";
  setLobbyError();
  renderHome();
}

function renderHome() {
  const localAiBattleMode = !shouldLoadSocketClient();

  modeButtons.forEach((button) => {
    button.classList.remove("is-hidden");
    button.disabled = false;
    button.classList.toggle("is-selected", button.dataset.mode === lobbyState.selectedMode);
  });

  if (battleSubtitle) {
    battleSubtitle.textContent = localAiBattleMode
      ? "1인 플레이부터 최대 5인 AI 배틀까지 바로 즐길 수 있습니다."
      : "1인 연습부터 최대 5인 경쟁전까지, 방을 만들고 준비한 뒤 바로 시작하세요.";
  }

  selectedModeLabel.textContent = lobbyState.selectedMode
    ? getModeConfig().label
    : "모드를 선택하세요";
  roomActions.classList.toggle("is-hidden", !lobbyState.selectedMode);
  createRoomButton.textContent = localAiBattleMode ? "AI 배틀 만들기" : "방 만들기";
  showJoinButton.classList.toggle("is-hidden", localAiBattleMode);
  if (localAiBattleMode) {
    joinPanel.classList.add("is-hidden");
  }
}

function createLocalRoom() {
  const config = getModeConfig();
  const player = {
    id: "player-local",
    nickname: getNickname(),
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
    highScore,
  };

  applyRoomState({
    roomId: "room-local",
    roomCode: "LOCAL",
    selectedMode: lobbyState.selectedMode,
    maxPlayers: config.maxPlayers,
    players: [player],
    playerId: player.id,
    nickname: player.nickname,
    isHost: true,
    isReady: false,
    isConnected: false,
    gameStatus: "lobby",
    canStart: config.maxPlayers === 1,
  });

  if (config.maxPlayers > 1) {
    setLobbyError("빈 슬롯의 + 버튼으로 AI를 추가해 최대 인원을 채우세요.");
  }
}

function applyRoomState(roomState) {
  Object.assign(lobbyState, {
    roomId: roomState.roomId,
    roomCode: roomState.roomCode,
    selectedMode: roomState.selectedMode,
    maxPlayers: roomState.maxPlayers,
    players: roomState.players || [],
    playerId: roomState.playerId || lobbyState.playerId,
    nickname: roomState.nickname || lobbyState.nickname,
    isHost: Boolean(roomState.isHost),
    isReady: Boolean(roomState.isReady),
    isConnected: Boolean(roomState.isConnected),
    gameStatus: roomState.gameStatus || "lobby",
    canStart: Boolean(roomState.canStart),
    rematchVotes: roomState.rematchVotes || [],
    isSpectator: Boolean(roomState.isSpectator),
    spectatorCount: roomState.spectatorCount || 0,
  });

  lobbyState.maxPlayers = lobbyState.maxPlayers || getModeConfig().maxPlayers;
  syncHighScoreFromPlayers();
  const gameScreens = ["playing", "gameOver"];
  showScreen(gameScreens.includes(lobbyState.gameStatus) ? lobbyState.gameStatus : "lobby");
  renderLobby();
  if (gameScreens.includes(lobbyState.gameStatus)) {
    syncAiGamesWithPlayers();
    renderOpponentScreens();
    if (lobbyState.isSpectator && lobbyState.gameStatus === "playing") {
      showSpectatorGameMessage();
    }
  }
  syncLocalEliminationFromRoom();
  if (lobbyState.gameStatus === "gameOver") {
    finishBattleMatch(getBattleWinner());
  } else {
    evaluateFinalStanding();
  }
}

function startLateJoinedGame() {
  if (
    lobbyState.gameStatus !== "playing" ||
    lobbyState.isSpectator ||
    running ||
    localPlayerEliminated ||
    battleFinished
  ) {
    return;
  }

  resetGame({ resetPlayers: false });
  renderOpponentScreens();
  sendBoardSnapshot(true);
}

function getConnectedPlayers() {
  return lobbyState.players.filter((player) => player.isConnected);
}

function getCanStartGame() {
  if (lobbyState.isSpectator || !lobbyState.isHost) {
    return false;
  }

  if (lobbyState.maxPlayers === 1) {
    return getConnectedPlayers().length === 1;
  }

  return (
    getConnectedPlayers().length === lobbyState.maxPlayers &&
    lobbyState.players
      .filter((player) => player.isConnected)
      .every((player) => player.isReady)
  );
}

function isFinalStandingMode() {
  return lobbyState.maxPlayers >= FINAL_STANDING_MIN_PLAYERS;
}

function isMultiplayerMode() {
  return lobbyState.maxPlayers >= 2;
}

function isSoloMode() {
  return lobbyState.maxPlayers === 1;
}

function showComboPopup(coinReward = 0) {
  if (!comboPopup || !comboPopupDetail || comboCount <= 1) {
    return;
  }

  window.clearTimeout(comboPopupTimeout);
  comboPopupDetail.textContent = coinReward > 0
    ? `x${comboCount} · COIN x2`
    : `x${comboCount}`;
  comboPopup.classList.remove("is-visible");
  void comboPopup.offsetWidth;
  comboPopup.classList.add("is-visible");
  comboPopupTimeout = window.setTimeout(() => {
    comboPopup.classList.remove("is-visible");
  }, 820);
}

function hideComboPopup() {
  window.clearTimeout(comboPopupTimeout);
  comboPopupTimeout = null;
  comboPopup?.classList.remove("is-visible");
}

function resetCombo({ resetMax = false } = {}) {
  window.clearTimeout(comboResetTimeout);
  comboResetTimeout = null;
  comboCount = 0;
  if (resetMax) {
    maxComboCount = 0;
  }
  hideComboPopup();
}

function scheduleComboReset() {
  window.clearTimeout(comboResetTimeout);
  comboResetTimeout = window.setTimeout(() => {
    comboResetTimeout = null;
    comboCount = 0;
    hideComboPopup();
    updateHud();
  }, COMBO_TIMEOUT_MS);
}

function getMultiplayerComboRewardMultiplier() {
  return isMultiplayerMode() ? 1 + maxComboCount * 0.1 : 1;
}

function getLocalPlayer() {
  return lobbyState.players.find((player) => player.id === lobbyState.playerId);
}

function getAlivePlayers() {
  return lobbyState.players.filter((player) => player.isConnected && !player.isEliminated);
}

function getConnectedHumanPlayers() {
  return lobbyState.players.filter((player) => player.isConnected && !player.isAI);
}

function getBattleWinner() {
  return getAlivePlayers()[0] || lobbyState.players.find((player) => player.rank === 1) || null;
}

function getRematchVoteCount() {
  const voteIds = new Set(lobbyState.rematchVotes || []);
  return getConnectedHumanPlayers().filter((player) => voteIds.has(player.id)).length;
}

function getRematchRequiredCount() {
  return Math.max(1, getConnectedHumanPlayers().length);
}

function hasVotedForRematch() {
  return Boolean(lobbyState.playerId && (lobbyState.rematchVotes || []).includes(lobbyState.playerId));
}

function getRankValue(player) {
  const rank = Number(player?.rank);
  return Number.isFinite(rank) && rank > 0 ? rank : null;
}

function getPlayerResultStats(player) {
  const snapshot = lobbyState.gameStatus === "gameOver" && player?.isAI
    ? null
    : getOpponentSnapshot(player);
  return {
    score: snapshot?.score ?? player?.score ?? 0,
    level: snapshot?.level ?? player?.level ?? 0,
    lines: snapshot?.lines ?? player?.lines ?? 0,
  };
}

function assignFinalRanks(winner = null) {
  const players = lobbyState.players.filter((player) => player.isConnected || player.rank || player.isAI);

  if (winner) {
    winner.rank = 1;
    winner.isEliminated = false;
    winner.isGameOver = false;
  }

  const usedRanks = new Set(
    players
      .map((player) => getRankValue(player))
      .filter((rank) => rank !== null),
  );
  const unrankedPlayers = players
    .filter((player) => getRankValue(player) === null)
    .sort((a, b) => {
      const statsA = getPlayerResultStats(a);
      const statsB = getPlayerResultStats(b);
      return (
        statsB.score - statsA.score ||
        statsB.lines - statsA.lines ||
        String(a.nickname).localeCompare(String(b.nickname))
      );
    });

  let nextRank = 1;
  unrankedPlayers.forEach((player) => {
    while (usedRanks.has(nextRank)) {
      nextRank += 1;
    }
    player.rank = nextRank;
    usedRanks.add(nextRank);
  });
}

function getRankedResultPlayers() {
  return lobbyState.players
    .filter((player) => player.isConnected || player.rank || player.isAI)
    .map((player) => ({
      player,
      rank: getRankValue(player) || 99,
      stats: getPlayerResultStats(player),
    }))
    .sort((a, b) => (
      a.rank - b.rank ||
      b.stats.score - a.stats.score ||
      b.stats.lines - a.stats.lines
    ));
}

function renderResultRanking() {
  if (!resultRanking) {
    return;
  }

  const rankedPlayers = getRankedResultPlayers();
  resultRanking.innerHTML = "";
  resultRanking.classList.toggle("is-hidden", !isMultiplayerMode() || rankedPlayers.length === 0);
  if (!isMultiplayerMode() || rankedPlayers.length === 0) {
    return;
  }

  const title = document.createElement("div");
  title.className = "result-ranking-title";
  title.textContent = "RANKING";
  resultRanking.appendChild(title);

  rankedPlayers.forEach(({ player, rank, stats }) => {
    const row = document.createElement("div");
    row.className = "result-rank-row";
    row.classList.toggle("is-winner", rank === 1);
    row.classList.toggle("is-me", player.id === lobbyState.playerId);

    const place = document.createElement("span");
    place.className = "result-rank-place";
    place.textContent = rank === 1 ? "WIN" : `#${rank}`;

    const name = document.createElement("strong");
    name.textContent = player.nickname;

    const detail = document.createElement("span");
    detail.className = "result-rank-detail";
    detail.textContent = `${stats.score}점 · ${stats.lines}줄`;

    row.append(place, name, detail);
    resultRanking.appendChild(row);
  });
}

function renderRematchStatus() {
  if (!rematchStatusText || !rematchButton) {
    return;
  }

  if (lobbyState.isSpectator) {
    const voted = getRematchVoteCount();
    const required = getRematchRequiredCount();
    rematchStatusText.textContent = `관전자는 다시 플레이 동의에 포함되지 않습니다 ${voted} / ${required}`;
    rematchButton.textContent = "관전 중";
    rematchButton.disabled = true;
    return;
  }

  const voted = getRematchVoteCount();
  const required = getRematchRequiredCount();
  rematchStatusText.textContent = hasVotedForRematch()
    ? `다시 플레이 동의 완료 ${voted} / ${required}`
    : `다시 플레이 동의 필요 ${voted} / ${required}`;
  rematchButton.textContent = hasVotedForRematch() ? "동의 완료" : "다시 플레이";
  rematchButton.disabled = hasVotedForRematch();
}

function resetBattlePlayerStates() {
  lobbyState.players.forEach((player) => {
    player.isEliminated = false;
    player.isGameOver = false;
    player.rank = null;
    player.score = 0;
    player.level = 0;
    player.lines = 0;
  });
}

function setWatchingMessage() {
  showMessage("ELIMINATED - WATCHING", "WATCHING", true);
}

function finishBattleMatch(winner) {
  if (!isMultiplayerMode()) {
    return;
  }

  const alreadyFinished = battleFinished;
  battleFinished = true;
  running = false;
  paused = false;
  lobbyState.gameStatus = "gameOver";

  assignFinalRanks(winner);
  lastWinRewardAmount = 0;
  lastWinRewardMultiplier = 1;
  lastWinRewardMaxCombo = 0;
  if (
    !alreadyFinished &&
    !winRewardClaimed &&
    winner?.id === lobbyState.playerId &&
    !lobbyState.isSpectator
  ) {
    const comboMultiplier = getMultiplayerComboRewardMultiplier();
    const rewardCoins = Math.round(getWinRewardCoins() * comboMultiplier);
    addCoins(rewardCoins);
    addWinCount(1);
    winRewardClaimed = true;
    lastWinRewardAmount = rewardCoins;
    lastWinRewardMultiplier = comboMultiplier;
    lastWinRewardMaxCombo = maxComboCount;
  }

  showScreen("gameOver");
  showResultMessage(winner);
  resetAiGamesAfterBattle();
  renderOpponentScreens();
}

function evaluateFinalStanding() {
  if (!isFinalStandingMode() || battleFinished || lobbyState.gameStatus !== "playing") {
    return;
  }

  const alivePlayers = getAlivePlayers();
  if (alivePlayers.length <= 1 && lobbyState.players.length >= lobbyState.maxPlayers) {
    finishBattleMatch(alivePlayers[0] || null);
  }
}

function markPlayerEliminatedLocally(playerId, rank = null) {
  const player = lobbyState.players.find((entry) => entry.id === playerId);
  if (!player || player.isEliminated) {
    return;
  }

  const fallbackRank = Math.max(1, getAlivePlayers().length);
  player.isEliminated = true;
  player.rank = rank || fallbackRank;

  if (player.isAI) {
    const aiState = aiGameStates.get(player.id);
    if (aiState) {
      aiState.isEliminated = true;
      aiState.current = null;
    }
  }

  if (player.id === lobbyState.playerId) {
    localPlayerEliminated = true;
    current = null;
    setWatchingMessage();
  }

  renderLobby();
  renderOpponentScreens();
  evaluateFinalStanding();
}

function reportPlayerEliminated(playerId) {
  if (!isFinalStandingMode() || battleFinished) {
    return;
  }

  const target = lobbyState.players.find((player) => player.id === playerId);
  if (target?.isAI && !lobbyState.isHost) {
    return;
  }

  markPlayerEliminatedLocally(playerId);

  if (socket?.connected && lobbyState.roomCode && lobbyState.roomCode !== "LOCAL") {
    socket.emit("playerEliminated", {
      roomCode: lobbyState.roomCode,
      playerId,
    });
  }
}

function syncLocalEliminationFromRoom() {
  const me = getLocalPlayer();
  if (
    isFinalStandingMode() &&
    lobbyState.gameStatus === "playing" &&
    me?.isEliminated &&
    !localPlayerEliminated
  ) {
    localPlayerEliminated = true;
    current = null;
    setWatchingMessage();
  }
}

function getPlayerStatus(player) {
  if (!player) {
    return {
      text: "WAITING",
      className: "waiting",
      meta: "대기 중",
    };
  }

  if (!player.isConnected) {
    return {
      text: "DISCONNECTED",
      className: "disconnected",
      meta: "접속 끊김",
    };
  }

  if (player.isEliminated) {
    return {
      text: "ELIMINATED",
      className: "eliminated",
      meta: "탈락",
    };
  }

  if (player.isGameOver) {
    return {
      text: "GAME OVER",
      className: "eliminated",
      meta: "게임 오버",
    };
  }

  if (player.isAI) {
    return {
      text: "AI READY",
      className: "ready ai",
      meta: "AI 준비 완료",
    };
  }

  if (player.isReady) {
    return {
      text: "READY",
      className: "ready",
      meta: "준비 완료",
    };
  }

  return {
    text: "WAITING",
    className: "waiting",
    meta: "대기 중",
  };
}

function createLocalAiPlayer() {
  const playerNumber = lobbyState.players.length + 1;
  return {
    id: `ai-local-${playerNumber}-${Date.now()}`,
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

function canManageAiPlayers() {
  return lobbyState.isHost && !lobbyState.isSpectator && lobbyState.gameStatus === "lobby";
}

function addAiPlayer() {
  if (
    !canManageAiPlayers() ||
    !lobbyState.roomCode ||
    lobbyState.players.length >= lobbyState.maxPlayers
  ) {
    return;
  }

  setLobbyError();
  if (socket?.connected && lobbyState.roomCode !== "LOCAL") {
    socket.emit("addAiPlayer", { roomCode: lobbyState.roomCode });
    return;
  }

  lobbyState.players.push(createLocalAiPlayer());
  lobbyState.canStart = getCanStartGame();
  renderLobby();
}

function renderPreviewBoard(container, playerIndex = 0, isLarge = false) {
  container.innerHTML = "";
  const pattern = new Set(
    PREVIEW_PATTERNS[playerIndex % PREVIEW_PATTERNS.length].map(([x, y]) => `${x}-${y}`),
  );
  const color = [COLORS.I, COLORS.T, COLORS.L, COLORS.S][playerIndex % 4];

  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 6; x += 1) {
      const cell = document.createElement("span");
      cell.className = "preview-cell";
      if (pattern.has(`${x}-${y}`)) {
        cell.classList.add("is-filled");
        cell.style.setProperty("--cell-color", color);
      }
      if (isLarge && (x === 0 || x === 5) && y > 6) {
        cell.classList.add("is-filled");
        cell.style.setProperty("--cell-color", "rgba(54, 118, 255, 0.72)");
      }
      container.appendChild(cell);
    }
  }
}

function createStatusPill(status) {
  const pill = document.createElement("span");
  pill.className = `status-pill ${status.className}`;
  pill.textContent = status.text;
  return pill;
}

function createSlotCard(slotNumber, player) {
  const status = getPlayerStatus(player);
  const card = document.createElement("article");
  card.className = "player-slot-card";
  card.classList.toggle("is-me", player?.id === lobbyState.playerId);
  card.classList.toggle("is-empty", !player);
  card.classList.toggle("is-ai", Boolean(player?.isAI));
  card.classList.toggle("is-eliminated", Boolean(player?.isEliminated));

  if (!player && lobbyState.maxPlayers > 1 && canManageAiPlayers()) {
    const addAiButton = document.createElement("button");
    addAiButton.className = "add-ai-button";
    addAiButton.type = "button";
    addAiButton.textContent = "+";
    addAiButton.setAttribute("aria-label", `P${slotNumber} 슬롯에 AI 추가`);
    addAiButton.addEventListener("click", addAiPlayer);
    card.appendChild(addAiButton);
  }

  const info = document.createElement("div");
  const head = document.createElement("div");
  head.className = "slot-head";

  const number = document.createElement("span");
  number.className = "player-number";
  number.textContent = `P${slotNumber}`;
  head.append(number, createStatusPill(status));

  const name = document.createElement("p");
  name.className = "slot-name";
  name.textContent = player?.nickname || "대기 중";

  const meta = document.createElement("p");
  meta.className = "slot-meta";
  meta.textContent = player
    ? `${player.isHost ? "HOST · " : ""}${status.meta} · BEST ${player.highScore || 0}`
    : "빈 슬롯";

  info.append(head, name, meta);

  const miniBoard = document.createElement("div");
  miniBoard.className = "mini-preview-board";
  miniBoard.setAttribute("aria-label", `P${slotNumber} 보드 미리보기`);
  renderPreviewBoard(miniBoard, slotNumber - 1);

  card.append(info, miniBoard);
  return card;
}

function renderLobby() {
  const config = getModeConfig();
  const connectedCount = getConnectedPlayers().length;
  const rawMyIndex = lobbyState.players.findIndex((player) => player.id === lobbyState.playerId);
  const myIndex = Math.max(0, rawMyIndex);
  const me = lobbyState.isSpectator
    ? {
        id: lobbyState.playerId,
        nickname: lobbyState.nickname || getNickname(),
        isConnected: true,
        isSpectator: true,
      }
    : (lobbyState.players[myIndex] || lobbyState.players[0]);
  const myStatus = lobbyState.isSpectator
    ? { text: "WATCHING", className: "waiting", meta: "관전 중" }
    : getPlayerStatus(me);
  const canStart = lobbyState.canStart || getCanStartGame();

  lobbyModeTitle.textContent = config.label;
  roomCodeDisplay.textContent = lobbyState.roomCode || "------";
  playerCountText.textContent = `${connectedCount} / ${lobbyState.maxPlayers}`;
  if (lobbyState.spectatorCount > 0) {
    playerCountText.textContent += ` · 관전 ${lobbyState.spectatorCount}`;
  }
  renderShareLink();

  myPlayerNumber.textContent = lobbyState.isSpectator ? "OBS" : `P${myIndex + 1}`;
  myStatusText.className = `status-pill ${myStatus.className}`;
  myStatusText.textContent = myStatus.text;
  myNickname.textContent = me?.nickname || getNickname();
  renderPreviewBoard(myPreviewBoard, myIndex, true);

  playerSlots.innerHTML = "";
  for (let index = 0; index < lobbyState.maxPlayers; index += 1) {
    playerSlots.appendChild(createSlotCard(index + 1, lobbyState.players[index]));
  }

  readyButton.classList.toggle("is-ready", lobbyState.isReady);
  readyButton.disabled = lobbyState.isSpectator;
  readyButton.textContent = lobbyState.isSpectator
    ? "관전 중"
    : (lobbyState.isReady ? "READY 완료" : "READY");
  startGameButton.disabled = lobbyState.isSpectator || !canStart;
  startGameButton.textContent = lobbyState.isSpectator
    ? "WATCH ONLY"
    : (lobbyState.isHost ? "START GAME" : "HOST ONLY");

  if (lobbyState.isSpectator) {
    startHint.textContent = "관전자는 준비와 시작 없이 플레이어 보드와 상태를 볼 수 있습니다.";
  } else if (lobbyState.maxPlayers === 1) {
    startHint.textContent = "1인 플레이는 방장이 바로 시작할 수 있습니다.";
  } else if (!lobbyState.isHost) {
    startHint.textContent = "모두 준비하면 방장이 게임을 시작합니다.";
  } else if (connectedCount < lobbyState.maxPlayers) {
    startHint.textContent = `${lobbyState.maxPlayers}명 전원이 들어와야 시작할 수 있습니다.`;
  } else if (!canStart) {
    startHint.textContent = "모든 플레이어가 READY를 눌러야 시작할 수 있습니다.";
  } else {
    startHint.textContent = "모든 조건 완료. START GAME을 누르세요.";
  }
}

function cloneBoard(sourceBoard) {
  return sourceBoard.map((row) => [...row]);
}

function getMatrixKey(matrix) {
  return matrix.map((row) => row.join("")).join("/");
}

function getRotationsForType(type) {
  const rotations = [];
  const seen = new Set();
  let matrix = SHAPES[type].map((row) => [...row]);

  for (let i = 0; i < 4; i += 1) {
    const key = getMatrixKey(matrix);
    if (!seen.has(key)) {
      seen.add(key);
      rotations.push(matrix.map((row) => [...row]));
    }
    matrix = rotate(matrix);
  }

  return rotations;
}

function hasBoardCollision(boardCells, piece, offsetX = 0, offsetY = 0, matrix = piece.matrix) {
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (!matrix[y][x]) {
        continue;
      }

      const nextX = piece.x + x + offsetX;
      const nextY = piece.y + y + offsetY;

      if (nextX < 0 || nextX >= COLS || nextY >= ROWS) {
        return true;
      }

      if (nextY >= 0 && boardCells[nextY][nextX]) {
        return true;
      }
    }
  }
  return false;
}

function mergeBoardPiece(boardCells, piece) {
  piece.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      const boardX = piece.x + x;
      const boardY = piece.y + y;
      if (value && boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
        boardCells[boardY][boardX] = piece.type;
      }
    });
  });
}

function sweepBoardLines(boardCells) {
  let cleared = 0;
  for (let y = ROWS - 1; y >= 0; y -= 1) {
    if (boardCells[y].every(Boolean)) {
      boardCells.splice(y, 1);
      boardCells.unshift(Array(COLS).fill(null));
      cleared += 1;
      y += 1;
    }
  }
  return cleared;
}

function getBoardMetrics(boardCells) {
  const heights = [];
  let holes = 0;

  for (let x = 0; x < COLS; x += 1) {
    let blockSeen = false;
    let height = 0;
    for (let y = 0; y < ROWS; y += 1) {
      if (boardCells[y][x]) {
        if (!blockSeen) {
          height = ROWS - y;
        }
        blockSeen = true;
      } else if (blockSeen) {
        holes += 1;
      }
    }
    heights.push(height);
  }

  const totalHeight = heights.reduce((sum, height) => sum + height, 0);
  const bumpiness = heights.slice(1).reduce(
    (sum, height, index) => sum + Math.abs(height - heights[index]),
    0,
  );
  const maxHeight = Math.max(0, ...heights);

  return {
    heights,
    holes,
    totalHeight,
    bumpiness,
    maxHeight,
  };
}

function getBoardScore(boardCells, clearedLines) {
  const { totalHeight, holes, bumpiness, maxHeight } = getBoardMetrics(boardCells);
  const dangerPenalty = Math.max(0, maxHeight - 14) * 14;
  return clearedLines * 120 - totalHeight * 1.6 - holes * 8 - bumpiness * 0.9 - dangerPenalty;
}

function findAiMove(aiState, type) {
  const config = getAiDifficultyConfig();
  const candidates = [];
  const rotations = getRotationsForType(type);

  rotations.forEach((matrix) => {
    for (let x = -2; x <= COLS; x += 1) {
      const piece = {
        type,
        matrix,
        x,
        y: -matrix.length,
      };

      if (hasBoardCollision(aiState.board, piece)) {
        continue;
      }

      while (!hasBoardCollision(aiState.board, piece, 0, 1)) {
        piece.y += 1;
      }

      if (piece.y < 0) {
        continue;
      }

      const simulated = cloneBoard(aiState.board);
      mergeBoardPiece(simulated, piece);
      const cleared = sweepBoardLines(simulated);
      const metrics = getBoardMetrics(simulated);
      const score = getBoardScore(simulated, cleared) + Math.random() * config.randomWeight;

      candidates.push({
        score,
        metrics,
        move: {
          type,
          matrix: matrix.map((row) => [...row]),
          x,
          y: piece.y,
        },
      });
    }
  });

  if (candidates.length === 0) {
    return null;
  }

  candidates.sort((a, b) => b.score - a.score);
  const safeCandidates = candidates.filter((candidate) => (
    candidate.metrics.maxHeight <= (config.safeMaxHeight || ROWS)
  ));
  const rankedCandidates = safeCandidates.length > 0 ? safeCandidates : candidates;

  if (Math.random() < config.mistakeChance && rankedCandidates.length > 1) {
    const poolSize = Math.min(rankedCandidates.length, config.mistakePoolSize);
    const index = Math.max(1, Math.floor(Math.random() * poolSize));
    return rankedCandidates[index].move;
  }

  return rankedCandidates[0].move;
}

function refillAiBag(aiState) {
  aiState.bag = [...PIECES];
  for (let i = aiState.bag.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [aiState.bag[i], aiState.bag[j]] = [aiState.bag[j], aiState.bag[i]];
  }
}

function takeAiPieceType(aiState) {
  if (!aiState.bag || aiState.bag.length === 0) {
    refillAiBag(aiState);
  }
  return aiState.bag.pop();
}

function spawnAiPiece(aiState) {
  if (aiState.isEliminated) {
    return;
  }

  const type = takeAiPieceType(aiState);
  const move = findAiMove(aiState, type);

  if (!move) {
    if (isFinalStandingMode()) {
      reportPlayerEliminated(aiState.id);
      aiState.isEliminated = true;
      aiState.current = null;
      return;
    }

    aiState.board = createBoard();
    aiState.current = null;
    aiState.lines = 0;
    aiState.score = 0;
    return;
  }

  aiState.current = {
    type: move.type,
    matrix: move.matrix,
    x: move.x,
    y: -move.matrix.length,
    targetY: move.y,
  };
}

function createAiGameState(player, index) {
  const aiState = {
    id: player.id,
    board: createBoard(),
    bag: [],
    current: null,
    dropCounter: 0,
    dropInterval: getAiDropInterval(index),
    lines: 0,
    score: 0,
    highScore: player.highScore || 0,
    isEliminated: Boolean(player.isEliminated),
  };

  if (!aiState.isEliminated) {
    spawnAiPiece(aiState);
  }
  return aiState;
}

function createResetAiGameState(player, index) {
  return {
    id: player.id,
    board: createBoard(),
    bag: [],
    current: null,
    dropCounter: 0,
    dropInterval: getAiDropInterval(index),
    lines: 0,
    score: 0,
    highScore: player.highScore || 0,
    isEliminated: false,
  };
}

function resetAiGamesAfterBattle() {
  const aiPlayers = lobbyState.players.filter((player) => player.isAI && player.isConnected);
  aiGameStates = new Map();
  aiPlayers.forEach((player, index) => {
    aiGameStates.set(player.id, createResetAiGameState(player, index));
  });
}

function syncAiGamesWithPlayers() {
  const aiPlayers = lobbyState.players.filter((player) => player.isAI && player.isConnected);
  const aiIds = new Set(aiPlayers.map((player) => player.id));

  for (const id of aiGameStates.keys()) {
    if (!aiIds.has(id)) {
      aiGameStates.delete(id);
    }
  }

  aiPlayers.forEach((player, index) => {
    if (!aiGameStates.has(player.id)) {
      aiGameStates.set(player.id, createAiGameState(player, index));
    } else {
      const aiState = aiGameStates.get(player.id);
      aiState.dropInterval = getAiDropInterval(index);
      aiState.isEliminated = Boolean(player.isEliminated);
      if (aiState.isEliminated) {
        aiState.current = null;
      }
    }
  });
}

function stepAiGame(aiState) {
  if (aiState.isEliminated) {
    return;
  }

  if (!aiState.current) {
    spawnAiPiece(aiState);
    return;
  }

  if (aiState.current.y < aiState.current.targetY) {
    aiState.current.y += 1;
    aiState.score += SOFT_DROP_POINTS;
    aiState.highScore = Math.max(aiState.highScore || 0, aiState.score);
    return;
  }

  mergeBoardPiece(aiState.board, aiState.current);
  const cleared = sweepBoardLines(aiState.board);
  aiState.lines += cleared;
  aiState.score += LOCK_POINTS + (LINE_POINTS[cleared] || 0);
  aiState.highScore = Math.max(aiState.highScore || 0, aiState.score);
  const player = lobbyState.players.find((entry) => entry.id === aiState.id);
  if (player) {
    player.score = aiState.score;
    player.level = Math.floor(aiState.lines / 10);
    player.lines = aiState.lines;
    player.highScore = aiState.highScore;
  }
  spawnAiPiece(aiState);
}

function updateAiGames(delta) {
  if (lobbyState.gameStatus !== "playing" || aiGameStates.size === 0) {
    return;
  }

  aiGameStates.forEach((aiState) => {
    const player = lobbyState.players.find((entry) => entry.id === aiState.id);
    if (!player || player.isEliminated || aiState.isEliminated) {
      return;
    }

    aiState.dropCounter += delta;
    while (aiState.dropCounter >= aiState.dropInterval) {
      aiState.dropCounter -= aiState.dropInterval;
      stepAiGame(aiState);
      if (aiState.isEliminated || battleFinished) {
        break;
      }
    }
  });
}

function createAiSnapshot(aiState) {
  const cells = cloneBoard(aiState.board);

  if (aiState.current) {
    aiState.current.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        const boardX = aiState.current.x + x;
        const boardY = aiState.current.y + y;
        if (value && boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
          cells[boardY][boardX] = aiState.current.type;
        }
      });
    });
  }

  return {
    cells,
    score: aiState.score,
    level: Math.floor(aiState.lines / 10),
    lines: aiState.lines,
    highScore: aiState.highScore || aiState.score,
    isGameOver: Boolean(aiState.isEliminated),
  };
}

function enterPlayingState() {
  lobbyState.gameStatus = "playing";
  lobbyState.rematchVotes = [];
  localPlayerEliminated = false;
  battleFinished = false;
  winRewardClaimed = false;
  lastWinRewardAmount = 0;
  lastWinRewardMultiplier = 1;
  lastWinRewardMaxCombo = 0;
  opponentBoardSnapshots = new Map();
  aiGameStates = new Map();
  showScreen("playing");
  if (lobbyState.isSpectator) {
    syncAiGamesWithPlayers();
    showSpectatorGameMessage();
    return;
  }

  resetBattlePlayerStates();
  resetGame();
  renderOpponentScreens();
  sendBoardSnapshot(true);
}

function getOpponentPlayers() {
  if (lobbyState.isSpectator) {
    return lobbyState.players.filter((player) => player.isConnected);
  }

  return lobbyState.players.filter((player) => (
    player.id !== lobbyState.playerId &&
    player.isConnected
  ));
}

function createBoardSnapshot() {
  const cells = board.map((row) => [...row]);

  if (current) {
    current.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        const boardX = current.x + x;
        const boardY = current.y + y;
        if (value && boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
          cells[boardY][boardX] = current.type;
        }
      });
    });
  }

  return {
    cells,
    score,
    highScore,
    level,
    lines,
    isGameOver: lobbyState.gameStatus === "gameOver" || localPlayerEliminated || (
      lobbyState.gameStatus === "playing" &&
      !running
    ),
    sentAt: Date.now(),
  };
}

function sendBoardSnapshot(force = false) {
  if (
    !socket?.connected ||
    !lobbyState.roomCode ||
    lobbyState.roomCode === "LOCAL" ||
    lobbyState.gameStatus !== "playing"
  ) {
    return;
  }

  const now = performance.now();
  if (!force && now - lastSnapshotSentAt < 220) {
    return;
  }

  lastSnapshotSentAt = now;
  socket.emit("boardSnapshot", {
    roomCode: lobbyState.roomCode,
    snapshot: createBoardSnapshot(),
  });
}

function drawMiniBoardGrid(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 0.72)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "rgba(44, 76, 255, 0.22)";
  context.lineWidth = 1;

  for (let x = 1; x < COLS; x += 1) {
    const lineX = (canvas.width / COLS) * x;
    context.beginPath();
    context.moveTo(lineX, 0);
    context.lineTo(lineX, canvas.height);
    context.stroke();
  }

  for (let y = 1; y < ROWS; y += 1) {
    const lineY = (canvas.height / ROWS) * y;
    context.beginPath();
    context.moveTo(0, lineY);
    context.lineTo(canvas.width, lineY);
    context.stroke();
  }
}

function getBlockSkinCrop(image, targetWidth, targetHeight) {
  const sourceWidth = image.naturalWidth;
  const sourceHeight = image.naturalHeight;
  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = targetWidth / targetHeight;
  const width = sourceRatio > targetRatio ? sourceHeight * targetRatio : sourceWidth;
  const height = sourceRatio > targetRatio ? sourceHeight : sourceWidth / targetRatio;
  return {
    x: (sourceWidth - width) / 2,
    y: (sourceHeight - height) / 2,
    width,
    height,
  };
}

function drawBlockSkinCell(context, pixelX, pixelY, width, height, type) {
  const skin = getBlockSkin();
  if (skin?.renderer === "neon-spectrum") {
    return drawNeonSpectrumCell(context, pixelX, pixelY, width, height, type);
  }

  const image = getEquippedBlockSkinImage();
  if (!image || !type) {
    return false;
  }

  const crop = getBlockSkinCrop(image, width, height);
  context.save();
  context.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    pixelX + 1,
    pixelY + 1,
    Math.max(1, width - 2),
    Math.max(1, height - 2),
  );
  context.strokeStyle = "rgba(255, 255, 255, 0.32)";
  context.lineWidth = 1;
  context.strokeRect(pixelX + 1.5, pixelY + 1.5, Math.max(1, width - 3), Math.max(1, height - 3));
  context.fillStyle = "rgba(255, 255, 255, 0.16)";
  context.fillRect(pixelX + 3, pixelY + 3, Math.max(1, width - 6), Math.max(1, height * 0.16));
  context.restore();
  return true;
}

function drawNeonSpectrumCell(context, pixelX, pixelY, width, height, type) {
  if (!type) {
    return false;
  }

  const color = COLORS[type] || "#ffffff";
  const inset = Math.max(2, Math.min(width, height) * 0.1);
  const x = pixelX + inset;
  const y = pixelY + inset;
  const cellWidth = Math.max(1, width - inset * 2);
  const cellHeight = Math.max(1, height - inset * 2);
  const radius = Math.max(3, Math.min(cellWidth, cellHeight) * 0.18);
  const centerX = x + cellWidth / 2;
  const centerY = y + cellHeight / 2;

  context.save();
  context.beginPath();
  context.roundRect(x, y, cellWidth, cellHeight, radius);
  const fill = context.createRadialGradient(centerX, centerY, 1, centerX, centerY, Math.max(cellWidth, cellHeight) * 0.72);
  fill.addColorStop(0, color);
  fill.addColorStop(0.32, "rgba(8, 12, 24, 0.86)");
  fill.addColorStop(1, "rgba(2, 4, 12, 0.96)");
  context.fillStyle = fill;
  context.fill();

  context.shadowColor = color;
  context.shadowBlur = Math.max(6, Math.min(width, height) * 0.42);
  context.strokeStyle = color;
  context.lineWidth = Math.max(2, Math.min(width, height) * 0.11);
  context.stroke();

  context.shadowBlur = 0;
  context.strokeStyle = "rgba(255, 255, 255, 0.92)";
  context.lineWidth = Math.max(1, Math.min(width, height) * 0.045);
  context.stroke();

  const coreSize = Math.max(3, Math.min(cellWidth, cellHeight) * 0.18);
  context.shadowColor = "rgba(255, 255, 255, 0.9)";
  context.shadowBlur = Math.max(3, coreSize);
  context.fillStyle = "rgba(255, 255, 255, 0.92)";
  context.fillRect(centerX - coreSize / 2, centerY - coreSize / 2, coreSize, coreSize);
  context.restore();
  return true;
}

function drawMiniBoardCells(context, canvas, cells) {
  const cellWidth = canvas.width / COLS;
  const cellHeight = canvas.height / ROWS;

  cells.forEach((row, y) => {
    row.forEach((type, x) => {
      if (!type) {
        return;
      }

      if (drawBlockSkinCell(context, x * cellWidth, y * cellHeight, cellWidth, cellHeight, type)) {
        return;
      }

      context.fillStyle = COLORS[type] || "#ffffff";
      context.fillRect(
        x * cellWidth + 1,
        y * cellHeight + 1,
        Math.max(1, cellWidth - 2),
        Math.max(1, cellHeight - 2),
      );
    });
  });
}

function createPreviewCells(playerIndex) {
  const cells = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  const pattern = PREVIEW_PATTERNS[playerIndex % PREVIEW_PATTERNS.length];
  const type = PIECES[playerIndex % PIECES.length];

  pattern.forEach(([x, y]) => {
    const boardX = x + 2;
    const boardY = y + 8;
    if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
      cells[boardY][boardX] = type;
    }
  });

  return cells;
}

function createEmptyPreviewCells() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function drawOpponentCanvas(canvas, player, playerIndex) {
  const context = canvas.getContext("2d");
  const aiState = player.isAI ? aiGameStates.get(player.id) : null;
  const snapshot = aiState ? createAiSnapshot(aiState) : opponentBoardSnapshots.get(player.id);
  const shouldShowEmptyAiBoard = player.isAI && ["playing", "gameOver"].includes(lobbyState.gameStatus);
  const cells = snapshot?.cells || (shouldShowEmptyAiBoard ? createEmptyPreviewCells() : createPreviewCells(playerIndex));

  drawMiniBoardGrid(context, canvas);
  drawMiniBoardCells(context, canvas, cells);
}

function getOpponentSnapshot(player) {
  if (player.isAI) {
    const aiState = aiGameStates.get(player.id);
    return aiState ? createAiSnapshot(aiState) : null;
  }
  return opponentBoardSnapshots.get(player.id) || null;
}

function getOpponentStatusText(player, snapshot = null) {
  if (player.rank === 1) {
    return "WIN";
  }
  if (player.isEliminated) {
    return player.rank ? `#${player.rank}` : "OUT";
  }
  if (player.isGameOver || snapshot?.isGameOver) {
    return "OVER";
  }
  return player.isAI ? "AI" : "LIVE";
}

function refreshOpponentCanvases() {
  document.querySelectorAll(".opponent-screen-canvas").forEach((canvas) => {
    const player = lobbyState.players.find((entry) => entry.id === canvas.dataset.playerId);
    const playerIndex = Number(canvas.dataset.playerIndex || 1);
    if (player) {
      drawOpponentCanvas(canvas, player, playerIndex);
    }
  });
}

function renderOpponentScreens() {
  const opponents = getOpponentPlayers();
  opponentScreens.innerHTML = "";
  const shouldShowOpponents = ["playing", "gameOver"].includes(lobbyState.gameStatus) && opponents.length > 0;
  opponentScreens.classList.toggle("is-hidden", !shouldShowOpponents);
  opponentScreens.classList.toggle("is-crowded", opponents.length >= 3);

  opponents.forEach((player, index) => {
    const card = document.createElement("article");
    card.className = "opponent-screen-card";
    card.classList.toggle("is-ai", Boolean(player.isAI));
    card.classList.toggle("is-eliminated", Boolean(player.isEliminated));
    card.classList.toggle("is-winner", player.rank === 1);
    const snapshot = getOpponentSnapshot(player);

    const label = document.createElement("div");
    label.className = "opponent-screen-label";

    const name = document.createElement("strong");
    name.textContent = player.nickname;

    const status = document.createElement("span");
    status.textContent = getOpponentStatusText(player, snapshot);

    label.append(name, status);

    const stats = document.createElement("div");
    stats.className = "opponent-screen-stats";
    const scoreText = document.createElement("span");
    const bestText = document.createElement("span");
    const levelText = document.createElement("span");
    const linesText = document.createElement("span");
    scoreText.textContent = `S ${snapshot?.score ?? player.score ?? 0}`;
    bestText.textContent = `B ${snapshot?.highScore ?? player.highScore ?? 0}`;
    levelText.textContent = `LV ${snapshot?.level ?? player.level ?? 0}`;
    linesText.textContent = `L ${snapshot?.lines ?? player.lines ?? 0}`;
    stats.append(scoreText, bestText, levelText, linesText);

    const canvas = document.createElement("canvas");
    canvas.className = "opponent-screen-canvas";
    canvas.width = 56;
    canvas.height = 112;
    canvas.dataset.playerId = player.id;
    canvas.dataset.playerIndex = String(index + 1);

    card.append(label, stats, canvas);
    opponentScreens.appendChild(card);
    drawOpponentCanvas(canvas, player, index + 1);
  });
}

function createBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function refillBag() {
  bag = [...PIECES];
  for (let i = bag.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
}

function takePieceType() {
  if (!bag || bag.length === 0) {
    refillBag();
  }
  return bag.pop();
}

function createPiece(type) {
  const matrix = SHAPES[type].map((row) => [...row]);
  return {
    type,
    matrix,
    x: Math.floor((COLS - matrix[0].length) / 2),
    y: type === "I" ? -1 : 0,
  };
}

function resetGame({ resetPlayers = true } = {}) {
  localPlayerEliminated = false;
  battleFinished = false;
  winRewardClaimed = false;
  lastWinRewardAmount = 0;
  lastWinRewardMultiplier = 1;
  lastWinRewardMaxCombo = 0;
  if (isFinalStandingMode()) {
    if (resetPlayers) {
      resetBattlePlayerStates();
    }
    lobbyState.gameStatus = "playing";
    aiGameStates = new Map();
    syncAiGamesWithPlayers();
  }

  board = createBoard();
  bag = [];
  score = 0;
  level = 0;
  lines = 0;
  resetCombo({ resetMax: true });
  dropCounter = 0;
  dropInterval = 900;
  lastTime = 0;
  running = true;
  paused = false;
  lineClearEffects = [];
  boardFrame.classList.remove("is-clearing");
  pieceCounts = Object.fromEntries(PIECES.map((piece) => [piece, 0]));
  current = createPiece(takePieceType());
  next = createPiece(takePieceType());
  pieceCounts[current.type] += 1;
  hideMessage();
  updateHud();
  syncMusicToGame({ restart: true });
  requestAnimationFrame(update);
}

function hideMessage() {
  message.classList.remove("is-visible");
  message.classList.remove("is-result");
  startButton.disabled = false;
  startButton.classList.remove("is-disabled");
  startButton.classList.remove("is-hidden");
  resultActions.classList.add("is-hidden");
  resultRanking.classList.add("is-hidden");
  resultRewardText.classList.add("is-hidden");
  rematchStatusText.classList.add("is-hidden");
}

function showMessage(title, buttonText = "START", disabled = false) {
  hideComboPopup();
  message.classList.remove("is-result");
  messageTitle.textContent = title;
  startButton.textContent = buttonText;
  startButton.disabled = disabled;
  startButton.classList.toggle("is-disabled", disabled);
  startButton.classList.remove("is-hidden");
  resultActions.classList.add("is-hidden");
  resultRanking.classList.add("is-hidden");
  resultRewardText.classList.add("is-hidden");
  rematchStatusText.classList.add("is-hidden");
  message.classList.add("is-visible");
}

function showResultMessage(winner) {
  const title = winner ? `WIN - ${winner.nickname}` : "경기 종료";
  messageTitle.textContent = title;
  startButton.classList.add("is-hidden");
  resultActions.classList.remove("is-hidden");
  rematchStatusText.classList.remove("is-hidden");
  message.classList.add("is-result");
  message.classList.add("is-visible");
  resultMenuButton.textContent = "로비로 가기";
  resultRewardText.classList.toggle("is-hidden", lastWinRewardAmount <= 0);
  if (lastWinRewardAmount > 0) {
    const comboBonus = lastWinRewardMaxCombo > 0
      ? ` · MAX COMBO ${lastWinRewardMaxCombo} · x${lastWinRewardMultiplier.toFixed(1)}`
      : "";
    resultRewardText.textContent = `${getAiDifficultyConfig().label} 승리 보상 +${lastWinRewardAmount} COIN`;
    resultRewardText.textContent += comboBonus;
  }
  renderResultRanking();
  renderRematchStatus();
}

function showSpectatorGameMessage() {
  running = false;
  paused = false;
  current = null;
  board = createBoard();
  score = 0;
  level = 0;
  lines = 0;
  resetCombo({ resetMax: true });
  updateHud();
  renderOpponentScreens();
  showMessage("관전 중", "WATCHING", true);
  syncMusicToGame({ restart: true });
  draw();
}

function rotate(matrix) {
  const size = matrix.length;
  const rotated = Array.from({ length: size }, () => Array(size).fill(0));
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      rotated[x][size - 1 - y] = matrix[y][x];
    }
  }
  return rotated;
}

function hasCollision(piece, offsetX = 0, offsetY = 0, matrix = piece.matrix) {
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (!matrix[y][x]) {
        continue;
      }

      const nextX = piece.x + x + offsetX;
      const nextY = piece.y + y + offsetY;

      if (nextX < 0 || nextX >= COLS || nextY >= ROWS) {
        return true;
      }

      if (nextY >= 0 && board[nextY][nextX]) {
        return true;
      }
    }
  }
  return false;
}

function movePiece(direction) {
  if (!running || paused || localPlayerEliminated || !current) {
    return;
  }
  if (!hasCollision(current, direction, 0)) {
    current.x += direction;
    draw();
  }
}

function rotatePiece() {
  if (!running || paused || localPlayerEliminated || !current) {
    return;
  }
  const rotated = rotate(current.matrix);
  const kicks = [0, -1, 1, -2, 2];
  for (const kick of kicks) {
    if (!hasCollision(current, kick, 0, rotated)) {
      current.matrix = rotated;
      current.x += kick;
      draw();
      return;
    }
  }
}

function mergePiece() {
  current.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value && current.y + y >= 0) {
        board[current.y + y][current.x + x] = current.type;
      }
    });
  });
}

function sweepLines() {
  const clearedRows = [];
  const remainingRows = board.filter((row, y) => {
    if (row.every(Boolean)) {
      clearedRows.push({ y, cells: [...row] });
      return false;
    }
    return true;
  });

  while (remainingRows.length < ROWS) {
    remainingRows.unshift(Array(COLS).fill(null));
  }

  board = remainingRows;

  const cleared = clearedRows.length;
  if (cleared > 0) {
    comboCount += 1;
    maxComboCount = Math.max(maxComboCount, comboCount);
    scheduleComboReset();
    createLineClearEffect(clearedRows);
    lines += cleared;
    score += LINE_POINTS[cleared] * (level + 1);
    if (comboCount > 1) {
      score += (comboCount - 1) * COMBO_BONUS_POINTS * (level + 1);
    }
    const soloCoinMultiplier = comboCount > 1 ? 2 : 1;
    const soloCoinReward = cleared * SOLO_LINE_REWARD_COINS * soloCoinMultiplier;
    if (isSoloMode() && !lobbyState.isSpectator) {
      addCoins(soloCoinReward);
    }
    showComboPopup(isSoloMode() && !lobbyState.isSpectator ? soloCoinReward : 0);
    level = Math.floor(lines / 10);
    dropInterval = Math.max(120, 900 - level * 75);
  }

  return cleared;
}

function createLineClearEffect(clearedRows) {
  const particles = [];

  clearedRows.forEach(({ y, cells }) => {
    cells.forEach((type, x) => {
      const color = COLORS[type] || "#ffffff";
      const centerX = x * BLOCK + BLOCK / 2;
      const centerY = y * BLOCK + BLOCK / 2;
      const sidePush = x - (COLS - 1) / 2;

      for (let i = 0; i < LINE_CLEAR_PARTICLES_PER_CELL; i += 1) {
        particles.push({
          x: centerX + (Math.random() - 0.5) * BLOCK * 0.5,
          y: centerY + (Math.random() - 0.5) * BLOCK * 0.5,
          vx: sidePush * (0.42 + Math.random() * 0.22) + (Math.random() - 0.5) * 4,
          vy: -4.4 + Math.random() * 8.8,
          size: 3 + Math.random() * 6,
          color,
          spin: Math.random() * Math.PI,
        });
      }
    });
  });

  lineClearEffects.push({
    age: 0,
    rows: clearedRows.map(({ y }) => y),
    particles,
  });

  boardFrame.classList.remove("is-clearing");
  window.requestAnimationFrame(() => boardFrame.classList.add("is-clearing"));
  window.clearTimeout(clearPulseTimeout);
  clearPulseTimeout = window.setTimeout(() => {
    boardFrame.classList.remove("is-clearing");
  }, 260);
}

function spawnNextPiece() {
  current = next;
  current.x = Math.floor((COLS - current.matrix[0].length) / 2);
  current.y = current.type === "I" ? -1 : 0;
  next = createPiece(takePieceType());
  pieceCounts[current.type] += 1;

  if (hasCollision(current)) {
    if (isFinalStandingMode()) {
      reportPlayerEliminated(lobbyState.playerId);
      return;
    }

    if (isMultiplayerMode()) {
      localPlayerEliminated = true;
      current = null;
      showMessage("GAME OVER - WATCHING", "WAITING", true);
      sendBoardSnapshot(true);
      return;
    }

    running = false;
    showMessage("GAME OVER", "RESTART");
    syncMusicToGame();
    sendBoardSnapshot(true);
  }
}

function dropPiece({ awardSoftDrop = false } = {}) {
  if (!running || paused || localPlayerEliminated || !current) {
    return;
  }
  if (!hasCollision(current, 0, 1)) {
    current.y += 1;
    if (awardSoftDrop) {
      score += SOFT_DROP_POINTS;
    }
  } else {
    mergePiece();
    score += LOCK_POINTS;
    const cleared = sweepLines();
    playLineClearSound(cleared, comboCount);
    playLockSound({ cleared, combo: comboCount });
    spawnNextPiece();
  }
  dropCounter = 0;
  updateHud();
  draw();
}

function hardDrop() {
  if (!running || paused || localPlayerEliminated || !current) {
    return;
  }
  let distance = 0;
  while (!hasCollision(current, 0, 1)) {
    current.y += 1;
    distance += 1;
  }
  score += distance * HARD_DROP_POINTS;
  dropPiece();
}

function togglePause() {
  if (!running) {
    return;
  }
  paused = !paused;
  if (paused) {
    showMessage("PAUSED", "RESUME");
  } else {
    hideMessage();
    lastTime = performance.now();
    requestAnimationFrame(update);
  }
  syncMusicToGame();
}

function update(time = 0) {
  if (!running || paused) {
    draw();
    return;
  }

  const delta = time - lastTime;
  lastTime = time;
  dropCounter += delta;
  updateLineClearEffects(delta);
  updateAiGames(delta);

  if (!localPlayerEliminated && current && dropCounter > dropInterval) {
    dropPiece();
  }

  draw();
  refreshOpponentCanvases();
  requestAnimationFrame(update);
}

function updateLineClearEffects(delta) {
  lineClearEffects.forEach((effect) => {
    effect.age += delta;
  });
  lineClearEffects = lineClearEffects.filter(
    (effect) => effect.age < LINE_CLEAR_EFFECT_DURATION,
  );
}

function drawCell(context, x, y, size, color, type = null) {
  if (drawBlockSkinCell(context, x * size, y * size, size, size, type)) {
    return;
  }

  context.fillStyle = color;
  context.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
  context.fillStyle = "rgba(255, 255, 255, 0.2)";
  context.fillRect(x * size + 3, y * size + 3, size - 6, 3);
  context.fillStyle = "rgba(0, 0, 0, 0.28)";
  context.fillRect(x * size + 3, (y + 1) * size - 6, size - 6, 3);
}

function drawBackgroundThemeEffects(theme) {
  if (!theme || theme.price <= 0 || !isThemeOwned(theme.id)) {
    return;
  }

  const time = performance.now() / 1000;
  const width = boardCanvas.width;
  const height = boardCanvas.height;
  const accent = theme.accent;

  boardContext.save();
  boardContext.globalCompositeOperation = "lighter";

  const scanSpeed = theme.effect === "alarm" ? 86 : 44;
  for (let i = 0; i < 3; i += 1) {
    const y = (time * scanSpeed + i * height * 0.36) % height;
    boardContext.globalAlpha = 0.08 + i * 0.025;
    boardContext.fillStyle = accent;
    boardContext.fillRect(0, y, width, theme.effect === "spark" ? 1.5 : 3);
  }

  const particleCount = theme.effect === "snow" ? 28 : 18;
  for (let i = 0; i < particleCount; i += 1) {
    const seed = i + 1;
    const x = (Math.sin(seed * 13.37) * 0.5 + 0.5) * width;
    const drift = Math.sin(time * 1.4 + seed) * (theme.effect === "nebula" ? 18 : 7);
    const y = ((time * (18 + seed % 5) + seed * 47) % (height + 32)) - 16;
    const size = theme.effect === "shimmer"
      ? 2 + (seed % 3)
      : 1.5 + Math.abs(Math.sin(time + seed)) * 3;

    boardContext.globalAlpha = theme.effect === "snow" ? 0.16 : 0.1 + (seed % 4) * 0.025;
    boardContext.fillStyle = accent;
    if (theme.effect === "circuit" || theme.effect === "arcade") {
      boardContext.fillRect(x + drift, y, size + 5, 1.5);
      boardContext.fillRect(x + drift, y, 1.5, size + 5);
    } else {
      boardContext.beginPath();
      boardContext.arc(x + drift, y, size, 0, Math.PI * 2);
      boardContext.fill();
    }
  }

  if (theme.effect === "burst" || theme.effect === "alarm") {
    boardContext.globalAlpha = 0.08;
    boardContext.strokeStyle = accent;
    boardContext.lineWidth = 2;
    for (let i = -1; i < 4; i += 1) {
      boardContext.beginPath();
      boardContext.moveTo(i * 96 + (time * 42) % 96, 0);
      boardContext.lineTo(i * 96 + 130 + (time * 42) % 96, height);
      boardContext.stroke();
    }
  }

  if (theme.effect === "pulse" || theme.effect === "shimmer") {
    const radius = 70 + Math.sin(time * 2) * 18;
    const gradient = boardContext.createRadialGradient(width / 2, height / 2, 4, width / 2, height / 2, radius);
    gradient.addColorStop(0, accent);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    boardContext.globalAlpha = 0.08;
    boardContext.fillStyle = gradient;
    boardContext.fillRect(0, 0, width, height);
  }

  boardContext.restore();
}

function drawBoardGrid() {
  const theme = getTheme();
  boardContext.clearRect(0, 0, boardCanvas.width, boardCanvas.height);
  boardContext.fillStyle = theme.background;
  boardContext.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
  drawBackgroundThemeEffects(theme);

  boardContext.strokeStyle = theme.grid;
  boardContext.lineWidth = 1;
  for (let x = 1; x < COLS; x += 1) {
    boardContext.beginPath();
    boardContext.moveTo(x * BLOCK, 0);
    boardContext.lineTo(x * BLOCK, ROWS * BLOCK);
    boardContext.stroke();
  }
  for (let y = 1; y < ROWS; y += 1) {
    boardContext.beginPath();
    boardContext.moveTo(0, y * BLOCK);
    boardContext.lineTo(COLS * BLOCK, y * BLOCK);
    boardContext.stroke();
  }
}

function drawMatrix(context, matrix, offsetX, offsetY, size, color, type = null) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value && offsetY + y >= 0) {
        drawCell(context, offsetX + x, offsetY + y, size, color, type);
      }
    });
  });
}

function getGhostPieceY(piece) {
  let ghostY = piece.y;
  const ghostPiece = { ...piece, y: ghostY };

  while (!hasCollision(ghostPiece, 0, 1)) {
    ghostY += 1;
    ghostPiece.y = ghostY;
  }

  return ghostY;
}

function drawGhostMatrix(context, matrix, offsetX, offsetY, size, color) {
  context.save();
  context.globalAlpha = GHOST_PIECE_ALPHA;
  context.fillStyle = color;
  context.strokeStyle = color;
  context.lineWidth = 2;
  context.shadowColor = color;
  context.shadowBlur = 12;

  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (!value || offsetY + y < 0) {
        return;
      }

      const cellX = (offsetX + x) * size;
      const cellY = (offsetY + y) * size;
      const innerSize = size - GHOST_PIECE_INSET * 2;

      context.fillRect(
        cellX + GHOST_PIECE_INSET,
        cellY + GHOST_PIECE_INSET,
        innerSize,
        innerSize,
      );
      context.strokeRect(
        cellX + GHOST_PIECE_INSET + 0.5,
        cellY + GHOST_PIECE_INSET + 0.5,
        innerSize - 1,
        innerSize - 1,
      );
    });
  });

  context.restore();
}

function drawLineClearEffects() {
  if (lineClearEffects.length === 0) {
    return;
  }

  boardContext.save();
  boardContext.globalCompositeOperation = "lighter";

  lineClearEffects.forEach((effect) => {
    const progress = Math.min(effect.age / LINE_CLEAR_EFFECT_DURATION, 1);
    const fade = 1 - progress;
    const flash = Math.sin(progress * Math.PI);
    const frame = effect.age / 16.67;

    effect.rows.forEach((row) => {
      boardContext.globalAlpha = fade * 0.75;
      boardContext.fillStyle = "#ffffff";
      boardContext.fillRect(0, row * BLOCK + 2, COLS * BLOCK, BLOCK - 4);

      boardContext.globalAlpha = flash * 0.55;
      boardContext.fillStyle = "#14c7c4";
      boardContext.fillRect(0, row * BLOCK + BLOCK * 0.42, COLS * BLOCK, BLOCK * 0.16);
    });

    effect.particles.forEach((particle) => {
      const x = particle.x + particle.vx * frame;
      const y = particle.y + particle.vy * frame + frame * frame * 0.13;
      const size = Math.max(1, particle.size * fade);

      boardContext.save();
      boardContext.globalAlpha = fade;
      boardContext.translate(x, y);
      boardContext.rotate(particle.spin + progress * Math.PI * 1.6);
      boardContext.fillStyle = particle.color;
      boardContext.fillRect(-size / 2, -size / 2, size, size);
      boardContext.restore();
    });
  });

  boardContext.restore();
}

function draw() {
  drawBoardGrid();
  board.forEach((row, y) => {
    row.forEach((type, x) => {
      if (type) {
        drawCell(boardContext, x, y, BLOCK, COLORS[type], type);
      }
    });
  });

  if (current) {
    const ghostY = getGhostPieceY(current);
    drawGhostMatrix(boardContext, current.matrix, current.x, ghostY, BLOCK, COLORS[current.type]);
    drawMatrix(boardContext, current.matrix, current.x, current.y, BLOCK, COLORS[current.type], current.type);
  }

  drawLineClearEffects();
  drawPreview();
  sendBoardSnapshot();
}

function drawPreview() {
  nextContext.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
  nextContext.fillStyle = "rgba(0, 0, 0, 0.48)";
  nextContext.fillRect(0, 0, nextCanvas.width, nextCanvas.height);

  if (!next) {
    return;
  }

  const matrix = next.matrix;
  const offsetX = Math.floor((nextCanvas.width / PREVIEW_BLOCK - matrix[0].length) / 2);
  const offsetY = Math.floor((nextCanvas.height / PREVIEW_BLOCK - matrix.length) / 2);
  drawMatrix(nextContext, matrix, offsetX, offsetY, PREVIEW_BLOCK, COLORS[next.type], next.type);
}

function updateHud() {
  saveHighScore(score);
  const me = getLocalPlayer();
  if (me) {
    me.score = score;
    me.level = level;
    me.lines = lines;
    me.highScore = highScore;
  }

  scoreElement.textContent = score.toString();
  highScoreElement.textContent = highScore.toString();
  levelElement.textContent = level.toString();
  linesElement.textContent = lines.toString();
  if (comboElement) {
    comboElement.textContent = comboCount.toString();
  }
  if (maxComboElement) {
    maxComboElement.textContent = maxComboCount.toString();
  }
  if (comboBlock) {
    comboBlock.classList.toggle("is-active", comboCount > 1);
  }
  renderPieceStats();
}

function renderPieceStats() {
  pieceStats.innerHTML = "";
  const maxCount = Math.max(1, ...Object.values(pieceCounts));

  PIECES.forEach((piece) => {
    const row = document.createElement("div");
    row.className = "piece-stat";
    row.style.color = COLORS[piece];

    const icon = document.createElement("div");
    icon.className = "piece-icon";
    const flattened = SHAPES[piece].flat().slice(0, 8);
    for (let i = 0; i < 8; i += 1) {
      const cell = document.createElement("span");
      cell.className = "mini-cell";
      if (flattened[i]) {
        cell.style.background = COLORS[piece];
      }
      icon.appendChild(cell);
    }

    const bar = document.createElement("span");
    bar.className = "piece-bar";
    bar.style.transform = `scaleX(${pieceCounts[piece] / maxCount})`;
    bar.style.transformOrigin = "left";

    const count = document.createElement("span");
    count.className = "piece-count";
    count.textContent = pieceCounts[piece].toString();

    row.append(icon, bar, count);
    pieceStats.appendChild(row);
  });
}

function handleAction(action) {
  if (!running && action !== "start") {
    return;
  }
  if (localPlayerEliminated && action !== "start") {
    return;
  }

  if (action === "left") movePiece(-1);
  if (action === "right") movePiece(1);
  if (action === "rotate") rotatePiece();
  if (action === "down") dropPiece({ awardSoftDrop: true });
  if (action === "drop") hardDrop();
  if (action === "pause") togglePause();
}

function stopTouchRepeat() {
  window.clearTimeout(touchRepeatDelay);
  window.clearInterval(touchRepeatTimer);
  touchRepeatDelay = null;
  touchRepeatTimer = null;
}

function startTouchAction(action) {
  stopTouchRepeat();
  handleAction(action);

  if (!["left", "right", "down"].includes(action)) {
    return;
  }

  touchRepeatDelay = window.setTimeout(() => {
    touchRepeatTimer = window.setInterval(() => handleAction(action), action === "down" ? 70 : 110);
  }, 220);
}

function isTypingTarget(target) {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

function shouldLoadSocketClient() {
  if (window.location.protocol === "file:") {
    return false;
  }

  return !window.location.hostname.endsWith("github.io");
}

function createSocketConnection() {
  return new Promise((resolve) => {
    if (!shouldLoadSocketClient()) {
      resolve(null);
      return;
    }

    if (typeof io === "function") {
      resolve(io());
      return;
    }

    const socketScript = document.createElement("script");
    socketScript.src = "/socket.io/socket.io.js";
    socketScript.async = true;
    socketScript.onload = () => {
      resolve(typeof io === "function" ? io() : null);
    };
    socketScript.onerror = () => {
      resolve(null);
    };
    document.head.appendChild(socketScript);
  });
}

function initializeSocket() {
  if (!socket) {
    connectionNote.textContent = "멀티플레이는 npm start로 실행해야 동작합니다.";
    return;
  }

  socket.on("connect", () => {
    lobbyState.isConnected = true;
    connectionNote.textContent = "서버 연결 완료. 같은 와이파이 친구와 방 코드를 공유할 수 있습니다.";
  });

  socket.on("disconnect", () => {
    lobbyState.isConnected = false;
    connectionNote.textContent = "서버 연결이 끊겼습니다. 재연결을 기다리는 중입니다.";
  });

  socket.on("connect_error", () => {
    lobbyState.isConnected = false;
    connectionNote.textContent = "서버에 연결하지 못했습니다. npm start 실행을 확인하세요.";
  });

  socket.on("roomJoined", (roomState) => {
    setLobbyError();
    applyRoomState(roomState);
    startLateJoinedGame();
  });

  socket.on("roomUpdated", (roomState) => {
    applyRoomState(roomState);
  });

  socket.on("lobbyError", (message) => {
    setLobbyError(message);
  });

  socket.on("gameStarted", () => {
    enterPlayingState();
  });

  socket.on("gameOver", ({ winnerId }) => {
    lobbyState.gameStatus = "gameOver";
    finishBattleMatch(lobbyState.players.find((player) => player.id === winnerId) || getBattleWinner());
  });

  socket.on("opponentBoardSnapshot", ({ playerId, snapshot }) => {
    opponentBoardSnapshots.set(playerId, snapshot);
    if (["playing", "gameOver"].includes(lobbyState.gameStatus)) {
      renderOpponentScreens();
    }
  });
}

async function initializeApp() {
  socket = await createSocketConnection();
  initializeSocket();
  initializeLobby();
}

function initializeLobby() {
  const query = new URLSearchParams(window.location.search);
  const roomCode = query.get("room");

  if (roomCode) {
    joinPanel.classList.remove("is-hidden");
    roomCodeInput.value = roomCode.toUpperCase();
  }

  renderHome();
  renderPreviewBoard(myPreviewBoard, 0, true);
  loadNetworkInfo();
  showScreen("home");
}

function resetLobbyToHome() {
  opponentBoardSnapshots.clear();
  aiGameStates.clear();
  localPlayerEliminated = false;
  battleFinished = false;
  Object.assign(lobbyState, {
    roomId: null,
    roomCode: null,
    selectedMode: null,
    maxPlayers: 1,
    players: [],
    playerId: null,
    nickname: getNickname(),
    isHost: false,
    isReady: false,
    gameStatus: "home",
    canStart: false,
    rematchVotes: [],
    isSpectator: false,
    spectatorCount: 0,
  });

  setLobbyError();
  joinPanel.classList.add("is-hidden");
  window.history.replaceState({}, "", window.location.pathname);
  renderHome();
  showScreen("home");
}

function returnToMenu() {
  running = false;
  paused = false;
  board = createBoard();
  score = 0;
  level = 0;
  lines = 0;
  resetCombo({ resetMax: true });
  dropCounter = 0;
  current = null;
  next = createPiece("I");
  lineClearEffects = [];
  opponentScreens.innerHTML = "";
  opponentScreens.classList.add("is-hidden");

  if (socket?.connected && lobbyState.roomCode && lobbyState.roomCode !== "LOCAL") {
    socket.emit("leaveRoom", { roomCode: lobbyState.roomCode });
  }

  showMessage("Play TETRIS?", "START");
  resetLobbyToHome();
  updateHud();
  draw();
}

document.addEventListener("pointerdown", unlockMusicAudio, { once: true });

modeButtons.forEach((button) => {
  button.addEventListener("click", () => selectMode(button.dataset.mode));
});

nicknameInput.addEventListener("input", () => {
  lobbyState.nickname = getNickname();
});

createRoomButton.addEventListener("click", () => {
  unlockMusicAudio();
  if (!lobbyState.selectedMode) {
    setLobbyError("먼저 1인 / 2인 / 3인 / 4인 / 5인 모드를 선택하세요.");
    return;
  }

  setLobbyError();
  const config = getModeConfig();
  if (socket?.connected) {
    socket.emit("createRoom", {
      nickname: getNickname(),
      selectedMode: lobbyState.selectedMode,
      maxPlayers: config.maxPlayers,
      highScore,
    });
    return;
  }

  createLocalRoom();
});

showJoinButton.addEventListener("click", () => {
  joinPanel.classList.toggle("is-hidden");
  if (!joinPanel.classList.contains("is-hidden")) {
    roomCodeInput.focus();
  }
});

joinRoomButton.addEventListener("click", () => {
  unlockMusicAudio();
  const roomCode = roomCodeInput.value.trim().toUpperCase();
  if (!roomCode) {
    setLobbyError("참가할 방 코드를 입력하세요.");
    return;
  }

  if (!socket?.connected) {
    setLobbyError("방 참가를 하려면 방장 컴퓨터에서 npm start로 서버를 켜야 합니다.");
    return;
  }

  setLobbyError();
  socket.emit("joinRoom", {
    roomCode,
    nickname: getNickname(),
    highScore,
  });
});

spectateRoomButton.addEventListener("click", () => {
  unlockMusicAudio();
  const roomCode = roomCodeInput.value.trim().toUpperCase();
  if (!roomCode) {
    setLobbyError("관전할 방 코드를 입력하세요.");
    return;
  }

  if (!socket?.connected) {
    setLobbyError("관전하려면 방장 컴퓨터에서 npm start로 서버를 켜야 합니다.");
    return;
  }

  setLobbyError();
  socket.emit("joinSpectator", {
    roomCode,
    nickname: `${getNickname()} 관전`,
  });
});

readyButton.addEventListener("click", () => {
  unlockMusicAudio();
  if (lobbyState.isSpectator) {
    return;
  }

  if (socket?.connected && lobbyState.roomCode && lobbyState.roomCode !== "LOCAL") {
    socket.emit("toggleReady", { roomCode: lobbyState.roomCode });
    return;
  }

  const me = lobbyState.players.find((player) => player.id === lobbyState.playerId);
  if (me) {
    me.isReady = !me.isReady;
    lobbyState.isReady = me.isReady;
    lobbyState.canStart = getCanStartGame();
    renderLobby();
  }
});

startGameButton.addEventListener("click", () => {
  unlockMusicAudio();
  if (lobbyState.isSpectator) {
    return;
  }

  const canStart = lobbyState.canStart || getCanStartGame();
  if (!canStart) {
    return;
  }

  if (socket?.connected && lobbyState.roomCode && lobbyState.roomCode !== "LOCAL") {
    socket.emit("startGame", { roomCode: lobbyState.roomCode });
    return;
  }

  enterPlayingState();
});

copyInviteButton.addEventListener("click", copyInviteLink);
copyLobbyLinkButton.addEventListener("click", copyInviteLink);
copyGameInviteButton.addEventListener("click", async () => {
  await copyInviteLink();
  copyGameInviteButton.textContent = "복사됨";
  window.setTimeout(() => {
    copyGameInviteButton.textContent = "복사";
  }, 1200);
});
settingsToggleButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setSettingsOpen(gameSettingsPanel.classList.contains("is-hidden"));
});
gameSettingsPanel.addEventListener("click", (event) => {
  event.stopPropagation();
});
musicToggleButton.addEventListener("click", toggleMusic);
musicVolumeInput.addEventListener("input", () => setMusicVolume(musicVolumeInput.value));
aiDifficultyButtons.forEach((button) => {
  button.addEventListener("click", () => setAiDifficulty(button.dataset.aiDifficulty));
});
applyRewardCodeButton.addEventListener("click", applyRewardCode);
rewardCodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    applyRewardCode();
  }
});
openShopButton.addEventListener("click", () => openEconomy("shop"));
openInventoryButton.addEventListener("click", () => openEconomy("inventory"));
closeEconomyButton.addEventListener("click", closeEconomy);
economyModal.addEventListener("click", (event) => {
  if (event.target === economyModal) {
    closeEconomy();
  }
});
economyShopTab.addEventListener("click", () => openEconomy("shop"));
economyInventoryTab.addEventListener("click", () => openEconomy("inventory"));
document.addEventListener("click", () => setSettingsOpen(false));

rematchButton.addEventListener("click", () => {
  unlockMusicAudio();
  if (lobbyState.isSpectator || hasVotedForRematch()) {
    return;
  }

  if (socket?.connected && lobbyState.roomCode && lobbyState.roomCode !== "LOCAL") {
    socket.emit("requestRematch", { roomCode: lobbyState.roomCode });
    return;
  }

  enterPlayingState();
});

resultMenuButton.addEventListener("click", returnToMenu);

function leaveLobbyToHome() {
  if (socket?.connected && lobbyState.roomCode && lobbyState.roomCode !== "LOCAL") {
    socket.emit("leaveRoom", { roomCode: lobbyState.roomCode });
  }
  resetLobbyToHome();
}

backHomeButton.addEventListener("click", leaveLobbyToHome);
lobbyHomeIconButton.addEventListener("click", leaveLobbyToHome);

returnMenuButton.addEventListener("click", returnToMenu);

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    setSettingsOpen(false);
    closeEconomy();
  }

  if (isTypingTarget(event.target)) {
    return;
  }

  if (lobbyState.gameStatus !== "playing" && lobbyState.gameStatus !== "gameOver") {
    return;
  }

  const keyboardActions = {
    ArrowLeft: "left",
    KeyA: "left",
    ArrowRight: "right",
    KeyD: "right",
    ArrowUp: "rotate",
    KeyW: "rotate",
    ArrowDown: "down",
    KeyS: "down",
    Space: "drop",
  };

  const action = keyboardActions[event.code];
  if (action) {
    event.preventDefault();
    unlockMusicAudio();
    handleAction(action);
  }
  if (event.code === "KeyP") {
    event.preventDefault();
    unlockMusicAudio();
    togglePause();
  }
  if (event.code === "Enter" && message.classList.contains("is-visible") && !startButton.disabled) {
    event.preventDefault();
    unlockMusicAudio();
    if (lobbyState.gameStatus === "gameOver" && isMultiplayerMode()) {
      returnToMenu();
      return;
    }
    resetGame();
  }
});

document.querySelectorAll(".touch-controls button").forEach((button) => {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    button.setPointerCapture?.(event.pointerId);
    startTouchAction(button.dataset.action);
  });
  button.addEventListener("pointerup", stopTouchRepeat);
  button.addEventListener("pointercancel", stopTouchRepeat);
  button.addEventListener("pointerleave", stopTouchRepeat);
  button.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.code === "Space") {
      event.preventDefault();
      handleAction(button.dataset.action);
    }
  });
});

startButton.addEventListener("click", () => {
  unlockMusicAudio();
  if (startButton.disabled) {
    return;
  }
  if (lobbyState.gameStatus === "gameOver" && isMultiplayerMode()) {
    returnToMenu();
    return;
  }
  if (running && paused) {
    togglePause();
    return;
  }
  resetGame();
});

board = createBoard();
pieceCounts = Object.fromEntries(PIECES.map((piece) => [piece, 0]));
lineClearEffects = [];
opponentBoardSnapshots = new Map();
aiGameStates = new Map();
lastSnapshotSentAt = 0;
localPlayerEliminated = false;
battleFinished = false;
current = null;
next = createPiece("I");
score = 0;
highScore = loadHighScore();
level = 0;
lines = 0;
comboCount = 0;
maxComboCount = 0;
comboResetTimeout = null;
running = false;
paused = false;
musicEnabled = loadMusicPreference();
musicVolumeDb = loadMusicVolumeDb();
musicUnlocked = false;
musicPlaying = false;
musicStepIndex = 0;
coinBalance = loadCoinBalance();
winCount = loadWinCount();
ownedThemeIds = loadOwnedThemeIds();
equippedThemeId = loadEquippedThemeId();
ownedBlockSkinIds = loadOwnedBlockSkinIds();
equippedBlockSkinId = loadEquippedBlockSkinId();
loadBlockSkinImages();
ownedSongIds = loadOwnedSongIds();
equippedSongId = loadEquippedSongId();
aiDifficulty = loadAiDifficulty();
economyView = "shop";
shopRotationSlot = getShopRotationSlot();
shopRotationTimer = null;
winRewardClaimed = false;
lastWinRewardAmount = 0;
lastWinRewardMultiplier = 1;
lastWinRewardMaxCombo = 0;
applyEquippedTheme();
renderCoinBalances();
renderAiDifficultySettings();
updateMusicToggle();
initializeApp();
updateHud();
draw();
