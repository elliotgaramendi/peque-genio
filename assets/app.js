const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = Array.from({ length: 11 }, (_, i) => i);

const LETTER_NAMES = {
  A: 'A',
  B: 'Be',
  C: 'Ce',
  D: 'De',
  E: 'E',
  F: 'Efe',
  G: 'Ge',
  H: 'Hache',
  I: 'I',
  J: 'Jota',
  K: 'Ka',
  L: 'Ele',
  M: 'Eme',
  N: 'Ene',
  O: 'O',
  P: 'Pe',
  Q: 'Cu',
  R: 'Erre',
  S: 'Ese',
  T: 'Te',
  U: 'U',
  V: 'Ve',
  W: 'Doble ve',
  X: 'Equis',
  Y: 'Ye',
  Z: 'Zeta',
};

const NUMBER_WORDS = {
  0: 'cero',
  1: 'uno',
  2: 'dos',
  3: 'tres',
  4: 'cuatro',
  5: 'cinco',
  6: 'seis',
  7: 'siete',
  8: 'ocho',
  9: 'nueve',
  10: 'diez',
};

const EMOJI_POOL_BY_LETTER = {
  A: [
    { emoji: '✈️', word: 'Avión' },
    { emoji: '🐝', word: 'Abeja' },
    { emoji: '🌳', word: 'Árbol' },
  ],
  B: [
    { emoji: '⛵', word: 'Barco' },
    { emoji: '🐳', word: 'Ballena' },
    { emoji: '🐋', word: 'Ballena azul' },
  ],
  C: [
    { emoji: '🚗', word: 'Carro' },
    { emoji: '🏠', word: 'Casa' },
    { emoji: '🐎', word: 'Caballo' },
  ],
  D: [
    { emoji: '🦖', word: 'Dinosaurio' },
    { emoji: '🦷', word: 'Diente' },
    { emoji: '🍩', word: 'Dona' },
  ],
  E: [
    { emoji: '🐘', word: 'Elefante' },
    { emoji: '🌟', word: 'Estrella' },
    { emoji: '🦔', word: 'Erizo' },
  ],
  F: [
    { emoji: '🌸', word: 'Flor' },
    { emoji: '🍓', word: 'Fresa' },
    { emoji: '🦭', word: 'Foca' },
  ],
  G: [
    { emoji: '🐱', word: 'Gato' },
    { emoji: '🍪', word: 'Galleta' },
    { emoji: '🐓', word: 'Gallo' },
  ],
  H: [
    { emoji: '🍦', word: 'Helado' },
    { emoji: '🧚', word: 'Hada' },
    { emoji: '🦛', word: 'Hipopótamo' },
  ],
  I: [
    { emoji: '🏝️', word: 'Isla' },
    { emoji: '⛪', word: 'Iglesia' },
    { emoji: '🧲', word: 'Imán' },
  ],
  J: [
    { emoji: '🦒', word: 'Jirafa' },
    { emoji: '🎮', word: 'Juego' },
    { emoji: '🧃', word: 'Jugo' },
  ],
  K: [
    { emoji: '🥋', word: 'Karate' },
    { emoji: '🥝', word: 'Kiwi' },
    { emoji: '👘', word: 'Kimono' },
  ],
  L: [
    { emoji: '🌙', word: 'Luna' },
    { emoji: '🦁', word: 'León' },
    { emoji: '🦎', word: 'Lagarto' },
  ],
  M: [
    { emoji: '🍎', word: 'Manzana' },
    { emoji: '🦋', word: 'Mariposa' },
    { emoji: '🐒', word: 'Mono' },
  ],
  N: [
    { emoji: '☁️', word: 'Nube' },
    { emoji: '👶', word: 'Niño' },
    { emoji: '🌙', word: 'Noche' },
  ],
  O: [
    { emoji: '🐻', word: 'Oso' },
    { emoji: '👂', word: 'Oreja' },
    { emoji: '👀', word: 'Ojos' },
  ],
  P: [
    { emoji: '🦆', word: 'Pato' },
    { emoji: '🥔', word: 'Papa' },
    { emoji: '🐧', word: 'Pingüino' },
  ],
  Q: [
    { emoji: '🧀', word: 'Queso' },
    { emoji: '🔥', word: 'Quemar' },
    { emoji: '❓', word: 'Qué' },
  ],
  R: [
    { emoji: '🤖', word: 'Robot' },
    { emoji: '🐭', word: 'Ratón' },
    { emoji: '🐸', word: 'Rana' },
  ],
  S: [
    { emoji: '☀️', word: 'Sol' },
    { emoji: '🐍', word: 'Serpiente' },
    { emoji: '👒', word: 'Sombrero' },
  ],
  T: [
    { emoji: '🐯', word: 'Tigre' },
    { emoji: '🐢', word: 'Tortuga' },
    { emoji: '🍅', word: 'Tomate' },
  ],
  U: [
    { emoji: '🧸', word: 'Ursito' },
    { emoji: '🍇', word: 'Uva' },
    { emoji: '🦄', word: 'Unicornio' },
  ],
  V: [
    { emoji: '🐄', word: 'Vaca' },
    { emoji: '🌋', word: 'Volcán' },
    { emoji: '🎻', word: 'Violín' },
  ],
  W: [
    { emoji: '🧇', word: 'Waffle' },
    { emoji: '🌊', word: 'Wave' },
    { emoji: '📶', word: 'WiFi' },
  ],
  X: [
    { emoji: '🎼', word: 'Xilófono' },
    { emoji: '❌', word: 'X' },
    { emoji: '🩻', word: 'Xray' },
  ],
  Y: [
    { emoji: '🥣', word: 'Yogur' },
    { emoji: '🛥️', word: 'Yate' },
    { emoji: '🐎', word: 'Yegua' },
  ],
  Z: [
    { emoji: '🦊', word: 'Zorro' },
    { emoji: '🥿', word: 'Zapato' },
    { emoji: '🥕', word: 'Zanahoria' },
  ],
};

const REWARDS = ['⭐', '🎁', '🧸', '🎈', '🚀', '🦄', '🍭', '🦁', '🌟', '🎨'];
const SUCCESS_LINES = ['¡Muy bien! 🎉', '¡Excelente! 🌟', '¡Genial! 🥳', '¡Bravo! 👏'];

const state = {
  mode: null,
  score: 0,
  target: '',
  targetMeta: null,
  canInput: false,
  roundLocked: false,
  rewardCount: 0,
  stickers: [],
  feedbackTimeoutId: null,
  nextRoundTimeoutId: null,
  lastEmojiIndexByLetter: {},
  speechSessionId: 0,
};

const ui = {};
let audioCtx;

function init() {
  captureUi();
  initAudio();
  buildPads();
  bindEvents();
  renderStickerStrip();
  setView('home');
}

function captureUi() {
  ui.topBar = document.getElementById('top-bar');
  ui.homeView = document.getElementById('home-view');
  ui.gameView = document.getElementById('game-view');
  ui.rewardView = document.getElementById('reward-view');

  ui.scoreDisplay = document.getElementById('score-display');
  ui.stickerStrip = document.getElementById('sticker-strip');

  ui.modePill = document.getElementById('mode-pill');
  ui.instruction = document.getElementById('instruction');
  ui.mainItem = document.getElementById('main-item');
  ui.subText = document.getElementById('sub-text');
  ui.feedback = document.getElementById('feedback');
  ui.rewardEmoji = document.getElementById('reward-emoji');

  ui.startLettersBasic = document.getElementById('start-letters-basic');
  ui.startEmojiLetter = document.getElementById('start-emoji-letter');
  ui.startNumbers = document.getElementById('start-numbers');

  ui.homeButton = document.getElementById('home-button');
  ui.fullscreenButton = document.getElementById('fullscreen-button');
  ui.rewardContinue = document.getElementById('reward-continue');

  ui.letterPad = document.getElementById('letter-pad');
  ui.numberPad = document.getElementById('number-pad');
  ui.letterGrid = document.getElementById('letter-grid');
  ui.numberGrid = document.getElementById('number-grid');
}

function initAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioCtx = new AudioContextClass();
}

function bindEvents() {
  ui.startLettersBasic.addEventListener('click', () => startGame('letters_basic'));
  ui.startEmojiLetter.addEventListener('click', () => startGame('emoji_letter'));
  ui.startNumbers.addEventListener('click', () => startGame('numbers'));

  ui.homeButton.addEventListener('click', goHome);
  ui.fullscreenButton.addEventListener('click', toggleFullScreen);
  ui.rewardContinue.addEventListener('click', closeReward);
  document.addEventListener('keydown', handleKeyboardInput);

  document.body.addEventListener('click', tryResumeAudio, { once: true });
}

function handleKeyboardInput(event) {
  if (!state.mode || !state.canInput || state.roundLocked) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;

  const targetTag = event.target?.tagName;
  if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

  const key = event.key.toUpperCase();

  if (state.mode === 'numbers') {
    if (!/^[0-9]$/.test(key)) return;
    event.preventDefault();
    // Teclado físico solo responde dígitos simples.
    // El "10" se responde únicamente con el botón "10" del teclado en pantalla.
    handleInput(key);
    return;
  }

  if (!/^[A-Z]$/.test(key)) return;
  event.preventDefault();
  handleInput(key);
}

function tryResumeAudio() {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function buildPads() {
  LETTERS.forEach((letter) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = letter;
    button.className =
      'rounded-xl border border-violet-100/35 bg-violet-300/25 px-2 py-3 font-display text-2xl leading-none text-violet-50 transition hover:bg-violet-300/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200';
    button.addEventListener('click', () => handleInput(letter));
    ui.letterGrid.appendChild(button);
  });

  NUMBERS.forEach((value) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = String(value);
    button.className =
      'rounded-xl border border-cyan-100/35 bg-cyan-300/25 px-2 py-3 font-display text-3xl leading-none text-cyan-50 transition hover:bg-cyan-300/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200';
    button.addEventListener('click', () => handleInput(String(value)));
    ui.numberGrid.appendChild(button);
  });
}

function setView(viewName) {
  const isHome = viewName === 'home';
  const isGame = viewName === 'game';
  const isReward = viewName === 'reward';

  ui.homeView.classList.toggle('hidden', !isHome);
  ui.gameView.classList.toggle('hidden', !isGame);
  ui.gameView.classList.toggle('flex', isGame);

  ui.topBar.classList.toggle('hidden', isHome);
  ui.topBar.classList.toggle('flex', !isHome);

  ui.rewardView.classList.toggle('hidden', !isReward);
  ui.rewardView.classList.toggle('flex', isReward);
  ui.rewardView.classList.toggle('pointer-events-none', !isReward);
}

function startGame(mode) {
  cancelRoundAudio();
  clearRoundTimers();

  state.mode = mode;
  state.score = 0;
  state.target = '';
  state.targetMeta = null;
  state.canInput = false;
  state.roundLocked = false;
  state.rewardCount = 0;
  state.stickers = [];
  state.lastEmojiIndexByLetter = {};

  updateScore(0);
  renderStickerStrip();
  hideFeedback();
  setModeUi(mode);
  setView('game');
  nextRound();
}

function setModeUi(mode) {
  if (mode === 'letters_basic') {
    ui.modePill.textContent = 'Modo letras básico 🔤';
    ui.instruction.textContent = 'Mira la letra y tócala igual 👇';
    ui.letterPad.classList.remove('hidden');
    ui.numberPad.classList.add('hidden');
    return;
  }

  if (mode === 'emoji_letter') {
    ui.modePill.textContent = 'Modo emoji + letra 🦁';
    ui.instruction.textContent = 'Mira el emoji y toca su letra inicial ✨';
    ui.letterPad.classList.remove('hidden');
    ui.numberPad.classList.add('hidden');
    return;
  }

  ui.modePill.textContent = 'Modo números 🔢';
  ui.instruction.textContent = 'Mira el número y tócalo 👆';
  ui.letterPad.classList.add('hidden');
  ui.numberPad.classList.remove('hidden');
}

function goHome() {
  state.mode = null;
  state.target = '';
  state.targetMeta = null;
  state.canInput = false;
  state.roundLocked = false;

  cancelRoundAudio();
  clearRoundTimers();
  hideFeedback();

  ui.mainItem.textContent = '❔';
  ui.mainItem.className = 'font-display text-[clamp(3rem,16vw,6.5rem)] leading-none text-white';
  ui.subText.textContent = '';

  updateScore(0);
  setView('home');
}

function updateScore(score) {
  state.score = score;
  ui.scoreDisplay.textContent = String(score);
}

function clearRoundTimers() {
  clearTimeout(state.feedbackTimeoutId);
  clearTimeout(state.nextRoundTimeoutId);
  state.feedbackTimeoutId = null;
  state.nextRoundTimeoutId = null;
}

function nextRound() {
  clearRoundTimers();
  cancelRoundAudio();

  state.roundLocked = false;
  state.canInput = true;

  if (state.mode === 'letters_basic') {
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    state.target = letter;
    state.targetMeta = null;

    ui.mainItem.textContent = letter;
    ui.mainItem.className = 'font-display text-[clamp(3rem,16vw,6.5rem)] leading-none text-violet-100';
    ui.subText.textContent = `${LETTER_NAMES[letter]} de ${sampleWordForLetter(letter)} ✨`;

    runRoundPrompt();
    return;
  }

  if (state.mode === 'emoji_letter') {
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    const picked = pickRandomEmojiSample(letter);

    state.target = letter;
    state.targetMeta = picked;

    ui.mainItem.textContent = picked.emoji;
    ui.mainItem.className = 'font-display text-[clamp(3.2rem,16vw,7.4rem)] leading-none';
    ui.subText.textContent = `${picked.word} · empieza con ${letter}`;

    runRoundPrompt();
    return;
  }

  const number = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
  state.target = String(number);
  state.targetMeta = null;

  ui.mainItem.textContent = String(number);
  ui.mainItem.className = 'font-display text-[clamp(3rem,16vw,6.5rem)] leading-none text-cyan-100';
  ui.subText.textContent = `${NUMBER_WORDS[number]} 🔢`;

  runRoundPrompt();
}

function runRoundPrompt() {
  if (state.mode === 'letters_basic') {
    speakSequence([
      `Busca la letra ${state.target}`,
    ]);
    return;
  }

  if (state.mode === 'emoji_letter') {
    speakSequence([
      `${state.targetMeta.word}. Toca la letra ${state.target}`,
    ]);
    return;
  }

  speakSequence([
    `Busca el número ${state.target}`,
  ]);
}

function pickRandomEmojiSample(letter) {
  const samples = EMOJI_POOL_BY_LETTER[letter] || [];
  if (samples.length === 0) return { emoji: '⭐', word: 'Estrella' };
  if (samples.length === 1) return samples[0];

  const previousIndex = state.lastEmojiIndexByLetter[letter];
  let nextIndex = Math.floor(Math.random() * samples.length);

  if (nextIndex === previousIndex) {
    const offset = 1 + Math.floor(Math.random() * (samples.length - 1));
    nextIndex = (previousIndex + offset) % samples.length;
  }

  state.lastEmojiIndexByLetter[letter] = nextIndex;
  return samples[nextIndex];
}

function handleInput(rawInput) {
  if (!state.mode || !state.canInput || state.roundLocked) return;

  const value = String(rawInput).trim().toUpperCase();

  if (state.mode === 'numbers') {
    if (!/^(10|[0-9])$/.test(value)) return;
    evaluateAnswer(value === state.target, value);
    return;
  }

  if (!/^[A-Z]$/.test(value)) return;
  evaluateAnswer(value === state.target, value);
}

async function evaluateAnswer(isCorrect, answerText) {
  if (state.roundLocked) return;

  if (isCorrect) {
    state.roundLocked = true;
    state.canInput = false;

    updateScore(state.score + 1);
    playSound('success');
    showFeedback(true, SUCCESS_LINES[Math.floor(Math.random() * SUCCESS_LINES.length)]);
    burstConfetti(false);

    const reinforce =
      state.mode === 'numbers'
        ? `Sí, ${state.target}`
        : `Sí, ${state.target}. Muy bien`;

    await speakSequence([reinforce], { replace: true });

    const gotReward = await showRewardIfNeeded();
    if (gotReward) return;

    scheduleNextRound(520);
    return;
  }

  playSound('softError');
  showFeedback(false, 'Ups 🙈 intenta otra vez');

  const correction =
    state.mode === 'numbers'
      ? `Ese fue ${answerText}. Busca ${state.target}`
      : `Esa fue ${answerText}. Busca ${state.target}`;

  speakSequence([correction], { replace: true });
}

function scheduleNextRound(delayMs) {
  clearTimeout(state.nextRoundTimeoutId);
  state.nextRoundTimeoutId = window.setTimeout(() => {
    if (state.mode) nextRound();
  }, delayMs);
}

async function showRewardIfNeeded() {
  if (state.score === 0 || state.score % 5 !== 0) return false;

  state.rewardCount += 1;
  const emoji = REWARDS[(state.rewardCount - 1) % REWARDS.length];
  state.stickers.push(emoji);
  renderStickerStrip();

  ui.rewardEmoji.textContent = emoji;
  setView('reward');

  playSound('success');
  burstConfetti(true);
  await speakSequence(['¡Premio desbloqueado!', 'Eres increíble'], { replace: true });
  return true;
}

function closeReward() {
  if (!state.mode) return;

  setView('game');
  state.roundLocked = false;
  state.canInput = false;
  scheduleNextRound(300);
}

function renderStickerStrip() {
  ui.stickerStrip.innerHTML = '';

  if (state.stickers.length === 0) {
    const helper = document.createElement('span');
    helper.className = 'text-[11px] text-emerald-100/80';
    helper.textContent = 'Gana 5 puntos para premio ⭐';
    ui.stickerStrip.appendChild(helper);
    return;
  }

  state.stickers.forEach((emoji, index) => {
    const item = document.createElement('span');
    item.className =
      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/20 bg-slate-900/60 text-sm';
    item.textContent = emoji;
    item.setAttribute('title', `Premio ${index + 1}`);
    ui.stickerStrip.appendChild(item);
  });

  ui.stickerStrip.scrollLeft = ui.stickerStrip.scrollWidth;
}

function showFeedback(isSuccess, message) {
  clearTimeout(state.feedbackTimeoutId);

  ui.feedback.textContent = message;
  ui.feedback.classList.remove('opacity-0', 'text-emerald-200', 'text-rose-200');
  ui.feedback.classList.add('opacity-100');
  ui.feedback.classList.add(isSuccess ? 'text-emerald-200' : 'text-rose-200');

  state.feedbackTimeoutId = window.setTimeout(() => {
    hideFeedback();
  }, 950);
}

function hideFeedback() {
  ui.feedback.textContent = '';
  ui.feedback.classList.add('opacity-0');
  ui.feedback.classList.remove('opacity-100', 'text-emerald-200', 'text-rose-200');
}

function sampleWordForLetter(letter) {
  const sample = EMOJI_POOL_BY_LETTER[letter]?.[0]?.word;
  return sample || 'amigo';
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

function cancelRoundAudio() {
  state.speechSessionId += 1;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

async function speakSequence(lines, options = {}) {
  const { replace = true } = options;

  if (!('speechSynthesis' in window)) return;

  if (replace) {
    cancelRoundAudio();
  }

  const sessionId = state.speechSessionId;

  for (const rawLine of lines) {
    if (sessionId !== state.speechSessionId) return;
    const line = String(rawLine || '').trim();
    if (!line) continue;
    await speakOne(line, sessionId);
  }
}

function speakOne(text, sessionId) {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window) || sessionId !== state.speechSessionId) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.94;
    utterance.pitch = 1.08;

    let settled = false;
    const fallbackMs = Math.max(500, Math.min(2600, text.length * 55));

    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    const fallbackTimer = window.setTimeout(done, fallbackMs);

    utterance.onend = () => {
      clearTimeout(fallbackTimer);
      done();
    };

    utterance.onerror = () => {
      clearTimeout(fallbackTimer);
      done();
    };

    window.speechSynthesis.speak(utterance);
  });
}

function playSound(type) {
  if (!audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'success') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.linearRampToValueAtTime(820, now + 0.16);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.14, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    osc.start(now);
    osc.stop(now + 0.45);
    return;
  }

  osc.type = 'sine';
  osc.frequency.setValueAtTime(240, now);
  osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.09, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  osc.start(now);
  osc.stop(now + 0.22);
}

function burstConfetti(large = false) {
  if (typeof confetti !== 'function') return;

  confetti({
    particleCount: large ? 130 : 32,
    spread: large ? 100 : 58,
    origin: { y: 0.72 },
    disableForReducedMotion: true,
  });
}

document.addEventListener('DOMContentLoaded', init);
