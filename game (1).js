// ============================================================
//  TRUTH OR DARE — game.js
//  Sections:
//    1. Question Bank
//    2. Constants
//    3. State
//    4. Audio
//    5. Confetti
//    6. Screen Navigation
//    7. QR Code (canvas, no library)
//    8. Local Name Inputs
//    9. Local Game
//   10. Shared Game UI Helpers
//   11. Online — Storage Helpers
//   12. Online — Room Code Generator
//   13. Online — Host Flow
//   14. Online — Waiting Room
//   15. Online — Join Flow
//   16. Online — Polling
//   17. Online — Apply State
//   18. Online — Start / Next / End
//   19. Universal Handlers
//   20. Status Banner
//   21. Copy Room Code
//   22. Event Listeners
//   23. Init
// ============================================================


// ── 1. QUESTION BANK ─────────────────────────────────────────

const Q = {
  classic: {
    truths: [
      "What is the most embarrassing thing that has ever happened to you in public?",
      "Have you ever lied to someone you love? What was it about?",
      "What is something about yourself you have never told anyone in this room?",
      "What is the most childish thing you still secretly enjoy?",
      "Have you ever taken credit for someone else's work?",
      "What is the worst gift you have ever received, and who gave it?",
      "What is a white lie you tell on a regular basis?",
      "Have you ever pretended not to see a message to avoid replying?",
      "What is a habit of yours you hope no one has noticed?",
      "What is the most money you have wasted on something foolish?",
      "Have you ever eavesdropped on a private conversation?",
      "What is the most ridiculous thing you have ever cried about?",
      "What is your greatest regret so far in life?",
      "Have you ever blamed someone else for something that was your fault?",
      "What food do you pretend to like but secretly cannot stand?",
    ],
    dares: [
      "Impersonate someone in this room until they guess who.",
      "Speak exclusively in questions for the next two rounds.",
      "Let another player post one thing on your social media.",
      "Do your best impression of a famous person for one minute.",
      "Eat a spoonful of the most pungent condiment available.",
      "Send a voice note to your most recent contact: \u2018I need to tell you something.\u2019",
      "Narrate everything you do in the third person for the next round.",
      "Show the group the last photograph on your phone.",
      "Perform a dramatic monologue about a mundane household object.",
      "Let another player style your hair however they choose.",
      "Do ten push-ups counting each in a different accent.",
      "Describe your favourite film as though it is the greatest tragedy ever told.",
      "Sit in silence for one full minute while everyone stares at you.",
      "Text your most-contacted person simply: \u2018We need to talk.\u2019",
      "Pretend to be a butler attending to everyone for one full round.",
    ],
  },

  friends: {
    truths: [
      "What is the most meaningful conversation you have ever had with a friend?",
      "Which person here do you think knows you best, and why?",
      "What quality do you admire in someone here that you wish you had?",
      "What is the funniest shared memory you have with this group?",
      "Have you ever been jealous of a friend\u2019s success? Be honest.",
      "What is the kindest thing anyone in this room has done for you?",
      "What have you always wanted to say to someone here?",
      "Who was your first best friend and what happened to that friendship?",
      "What advice from a friend genuinely changed you?",
      "What do you wish your friends understood about you better?",
      "Have you ever told a friend\u2019s secret to someone else?",
      "Which friendship have you neglected recently, and why?",
      "What is the most embarrassing thing you have done in front of a friend?",
      "What did a friend do that you never told them meant so much to you?",
      "What is the most unusual place you have had a deep conversation?",
    ],
    dares: [
      "Call someone you have not spoken to in over a year and ask how they are.",
      "Write and deliver a short sincere speech about one person in this room.",
      "Describe each person here using exactly three words.",
      "Tell the funniest true story you know about yourself.",
      "Give someone in the room the most specific compliment you can.",
      "Confess an unpopular opinion and defend it for ninety seconds.",
      "Recreate your most embarrassing childhood photo using people here.",
      "Sing the first verse of a song chosen by the group.",
      "Give someone advice you have been quietly holding back.",
      "Read out the last five items in your browser search history.",
      "Swap a clothing item with another player for two rounds.",
      "Re-enact a famous scene using only other players as props.",
      "Let the group ask you any yes-or-no question. You must answer truthfully.",
      "Tell the group one thing they probably do not know about you.",
      "Make every person in the room genuinely laugh within two minutes.",
    ],
  },

  spicy: {
    truths: [
      "What is the boldest thing you have done purely on impulse?",
      "Have you ever done something wrong because it felt exciting?",
      "What have you done that you would never admit outside this room?",
      "What is the most daring lie you told and got away with?",
      "Have you ever faked illness to escape an obligation?",
      "What is the most reckless decision you have ever made?",
      "Have you ever done something illegal, however minor?",
      "What is the most embarrassing thing someone caught you doing?",
      "What opinion do you hold that most people here would strongly disagree with?",
      "What is the most outrageous thing you have said to get out of trouble?",
      "Have you ever been asked to leave somewhere? What happened?",
      "What have you done that your family would be horrified by?",
      "What is the most dramatic overreaction you have had?",
      "Have you taken something not yours and never returned it?",
      "What is the wildest rumour that has ever circulated about you?",
    ],
    dares: [
      "Perform a dramatic exit then re-enter as a completely different character.",
      "For two rounds communicate only through mime.",
      "Eat something chosen by another player while blindfolded.",
      "Perform a sixty-second stand-up comedy routine with no silence.",
      "Allow the group to change your profile photo for one hour.",
      "Speak only in rhyme for the next two rounds.",
      "Perform a villain monologue of no less than forty-five seconds.",
      "Allow the group to reply to any one message on your phone.",
      "Convince the group of an outrageous lie in two minutes.",
      "Attempt a handstand. Retry each round until you succeed.",
      "Exchange one shoe with another player for the rest of the game.",
      "Narrate sports commentary of the next player drawing their card.",
      "Imitate every person in the room in succession without breaking character.",
      "Perform a theatrical death scene of no less than forty seconds.",
      "Order something unusual from a delivery app of another\u2019s choosing.",
    ],
  },

  deep: {
    truths: [
      "What did you believe about yourself that took years to accept?",
      "What dream have you quietly abandoned, and do you still think about it?",
      "What moment would you return to, if only to feel it once more?",
      "What is the most important lesson you learned from a failure?",
      "Is there someone you hurt that you never properly apologised to?",
      "What does success genuinely mean to you, not what you tell people?",
      "What are you still trying to forgive yourself for?",
      "What has changed most about you in the last five years?",
      "What fear have you never spoken aloud until now?",
      "If you could send one message to your younger self, what would it say?",
      "What belief did you once hold firmly that you no longer hold?",
      "Who shaped you the most, and have you told them?",
      "What does the version of yourself you are most proud of look like?",
      "What is the kindest thing a stranger has ever done for you?",
      "What beautiful thing have you noticed lately that you rarely mention?",
    ],
    dares: [
      "Write one thing you are genuinely grateful for and read it aloud without irony.",
      "Tell the most meaningful story you know about yourself in three minutes.",
      "Give everyone here a sincere, carefully considered compliment.",
      "Describe a turning point in your life as though narrating a documentary.",
      "Share a piece of wisdom you learned the hard way.",
      "Write a two-line poem about the person to your left and read it aloud.",
      "Describe your ideal day in vivid, unhurried detail.",
      "Tell the group about a person who changed the course of your life.",
      "Spend thirty seconds making sincere eye contact with each person here.",
      "Describe the most beautiful place you have ever been.",
      "Share one thing on your mind lately that you have not said aloud.",
      "Name three things you love: one physical, one personal, one about the world.",
      "Spend sixty seconds in complete, deliberate silence.",
      "Read aloud the last meaningful message someone sent you.",
      "Tell a story about a moment of genuine kindness you witnessed.",
    ],
  },
};


// ── 2. CONSTANTS ─────────────────────────────────────────────

const SYMS = [
  '&#9670;', '&#9675;', '&#9651;', '&#9654;',
  '&#9660;', '&#9664;', '&#9670;', '&#9675;',
];

const MODE_NAMES = {
  classic: 'Classic',
  friends: 'Friends',
  spicy:   'Spicy',
  deep:    'Deep Talk',
};


// ── 3. STATE ─────────────────────────────────────────────────

let mode    = 'classic';
let sndOn   = true;
let darkMode = false;

// Local game
let localPlayers = [];
let localIdx     = 0;
let localRound   = 1;

// Online
let myName    = '';
let myRole    = '';       // 'local' | 'online'
let roomCode  = '';
let isHost    = false;
let pollTimer = null;

// Online game mirror (kept in sync with shared storage)
let onlinePlayers  = [];
let onlineIdx      = 0;
let onlineRound    = 1;
let onlineQuestion = null;
let onlineType     = null;


// ── 4. AUDIO ─────────────────────────────────────────────────

function beep(type) {
  if (!sndOn) return;
  try {
    const ac   = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    const t = ac.currentTime;

    switch (type) {
      case 'truth':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(392, t);
        osc.frequency.linearRampToValueAtTime(523, t + 0.22);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
        osc.start(t); osc.stop(t + 0.38);
        break;

      case 'dare':
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(330, t);
        osc.frequency.linearRampToValueAtTime(220, t + 0.22);
        gain.gain.setValueAtTime(0.1, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
        osc.start(t); osc.stop(t + 0.38);
        break;

      case 'next':
        [330, 415, 523].forEach((freq, i) => {
          const o2 = ac.createOscillator(), g2 = ac.createGain();
          o2.connect(g2); g2.connect(ac.destination);
          o2.type = 'sine'; o2.frequency.value = freq;
          g2.gain.setValueAtTime(0.08, t + i * 0.09);
          g2.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.16);
          o2.start(t + i * 0.09); o2.stop(t + i * 0.09 + 0.16);
        });
        break;

      case 'end':
        [261, 329, 392, 523, 659].forEach((freq, i) => {
          const o2 = ac.createOscillator(), g2 = ac.createGain();
          o2.connect(g2); g2.connect(ac.destination);
          o2.type = 'sine'; o2.frequency.value = freq;
          g2.gain.setValueAtTime(0.09, t + i * 0.1);
          g2.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.2);
          o2.start(t + i * 0.1); o2.stop(t + i * 0.1 + 0.2);
        });
        break;

      default:  // generic click
        osc.type = 'sine'; osc.frequency.value = 440;
        gain.gain.setValueAtTime(0.07, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        osc.start(t); osc.stop(t + 0.1);
    }
  } catch (e) { /* AudioContext may be blocked by browser policy */ }
}


// ── 5. CONFETTI ───────────────────────────────────────────────

const confettiCanvas = document.getElementById('cvc');
const confettiCtx    = confettiCanvas.getContext('2d');
let   confettiPieces = [];

function launchConfetti() {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const palette = ['#b8922a', '#d4af6a', '#1c1612', '#8c7e72', '#4a3f35', '#c9a84c'];
  for (let i = 0; i < 70; i++) {
    confettiPieces.push({
      x:   Math.random() * confettiCanvas.width,
      y:   -8,
      vx:  (Math.random() - 0.5) * 3,
      vy:  Math.random() * 3 + 1.5,
      w:   Math.random() * 10 + 5,
      h:   Math.random() * 4 + 2,
      rot: Math.random() * 360,
      rv:  (Math.random() - 0.5) * 4,
      c:   palette[Math.floor(Math.random() * palette.length)],
      l:   1,
    });
  }
  drawConfetti();
}

function drawConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = confettiPieces.filter(p => p.l > 0);
  confettiPieces.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.rot += p.rv; p.l -= 0.008;
    confettiCtx.save();
    confettiCtx.globalAlpha = p.l;
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot * Math.PI / 180);
    confettiCtx.fillStyle = p.c;
    confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    confettiCtx.restore();
  });
  if (confettiPieces.length) requestAnimationFrame(drawConfetti);
  else confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}


// ── 6. SCREEN NAVIGATION ─────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}


// ── 7. QR CODE (canvas-drawn, no external library) ───────────

function drawQR(text) {
  const canvas  = document.getElementById('qr-canvas');
  const ctx     = canvas.getContext('2d');
  const isDark  = document.body.classList.contains('dark');

  ctx.clearRect(0, 0, 130, 130);
  ctx.fillStyle = isDark ? '#1e1a14' : '#fff';
  ctx.fillRect(0, 0, 130, 130);

  const darkCol = isDark ? '#e8dfd2' : '#1c1612';
  const liteCol = isDark ? '#1e1a14' : '#fff';

  // Finder pattern square helper
  function finderSquare(x, y) {
    ctx.fillStyle = darkCol; ctx.fillRect(x,     y,     28, 28);
    ctx.fillStyle = liteCol; ctx.fillRect(x + 3, y + 3, 22, 22);
    ctx.fillStyle = darkCol; ctx.fillRect(x + 6, y + 6, 16, 16);
  }

  finderSquare(8,  8);   // top-left
  finderSquare(94, 8);   // top-right
  finderSquare(8,  94);  // bottom-left

  // Timing strips
  for (let i = 0; i < 7; i++) {
    ctx.fillStyle = i % 2 === 0 ? darkCol : liteCol;
    ctx.fillRect(44 + i * 6, 8, 4, 4);
    ctx.fillRect(8, 44 + i * 6, 4, 4);
  }

  // Data cells — deterministic pattern seeded from room code text
  ctx.fillStyle = darkCol;
  let hash = 0;
  for (let i = 0; i < text.length; i++) hash = (hash << 5) - hash + text.charCodeAt(i) | 0;
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 7; col++) {
      hash = hash * 1664525 + 1013904223 | 0;
      if (hash % 3 === 0) ctx.fillRect(44 + col * 6, 44 + row * 6, 4, 4);
    }
  }

  // Room code centred in gold
  ctx.fillStyle = '#b8922a';
  ctx.font      = 'bold 10px Jost, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(text, 65, 72);
}


// ── 8. LOCAL NAME INPUTS ──────────────────────────────────────

function buildLocalNames(count) {
  const container = document.getElementById('local-names');
  const existing  = [...container.querySelectorAll('.name-inp')].map(i => i.value);
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const row     = document.createElement('div');
    row.className = 'name-row';
    row.innerHTML = `
      <span class="name-num">${i + 1}</span>
      <input class="name-inp" type="text" maxlength="18"
             placeholder="Player ${i + 1}" value="${existing[i] || ''}">`;
    container.appendChild(row);
  }
}


// ── 9. LOCAL GAME ─────────────────────────────────────────────

function startLocalGame() {
  const inputs = document.querySelectorAll('#local-names .name-inp');
  localPlayers = [...inputs].map((inp, i) => ({
    name: inp.value.trim() || `Player ${i + 1}`,
  }));
  localIdx   = 0;
  localRound = 1;
  myRole     = 'local';
  resetGameUI();
  updateLocalGameUI();
  showScreen('s-game');
}

function updateLocalGameUI() {
  document.getElementById('p-name').textContent    = localPlayers[localIdx].name;
  document.getElementById('p-sub').textContent     = 'Choose your fate';
  document.getElementById('r-num').textContent     = localRound;
  document.getElementById('prog').style.width      = (localIdx / localPlayers.length * 100) + '%';
  document.getElementById('mode-pill').textContent = MODE_NAMES[mode];
  document.getElementById('your-turn-banner').style.display = 'none';
  document.getElementById('spectator-msg').style.display    = 'none';
  enableChoices(true);
}

function localShowQuestion(type) {
  beep(type);
  const pool = Q[mode][type === 'truth' ? 'truths' : 'dares'];
  const text = pool[Math.floor(Math.random() * pool.length)];
  renderQuestion(type, text);
  enableChoices(false);
  document.getElementById('act-row').style.display  = 'flex';
  document.getElementById('solo-end').style.display = 'none';
}

function localNextPlayer() {
  beep('next');
  localIdx = (localIdx + 1) % localPlayers.length;
  if (localIdx === 0) localRound++;
  resetGameUI();
  updateLocalGameUI();
}

function localEndGame() {
  beep('end');
  launchConfetti();
  renderRoster(localPlayers);
  showScreen('s-end');
}


// ── 10. SHARED GAME UI HELPERS ────────────────────────────────

function resetGameUI() {
  const card = document.getElementById('q-card');
  card.classList.remove('shown');
  card.style.display = 'none';
  document.getElementById('q-empty').style.display  = '';
  document.getElementById('act-row').style.display  = 'none';
  document.getElementById('solo-end').style.display = '';
}

function enableChoices(enabled = true) {
  document.getElementById('truth-btn').disabled = !enabled;
  document.getElementById('dare-btn').disabled  = !enabled;
}

function renderQuestion(type, text) {
  const card  = document.getElementById('q-card');
  const badge = document.getElementById('q-badge');
  const qText = document.getElementById('q-text');

  document.getElementById('q-empty').style.display = 'none';
  badge.textContent = type === 'truth' ? 'Truth' : 'Dare';
  badge.className   = 'q-badge ' + type;
  qText.textContent = '\u201c' + text + '\u201d';
  document.getElementById('p-sub').textContent =
    type === 'truth' ? 'Speak honestly' : 'Accept the challenge';

  card.style.display = 'flex';
  void card.offsetWidth; // force reflow so CSS transition fires
  requestAnimationFrame(() => card.classList.add('shown'));
}

function renderRoster(players) {
  document.getElementById('roster').innerHTML = players
    .map((p, i) => `
      <div class="roster-row">
        <span class="r-num">${i + 1}</span>
        <span class="r-name">${p.name}</span>
        <span class="r-sym">${SYMS[i]}</span>
      </div>`)
    .join('');
}


// ── 11. ONLINE — STORAGE HELPERS ─────────────────────────────
//  Relies on window.storage (shared key-value provided by host environment)

function roomKey(code) {
  return 'room:' + code.toUpperCase();
}

async function saveRoom(state) {
  try {
    await window.storage.set(roomKey(state.code), JSON.stringify(state), true);
  } catch (e) {
    console.error('saveRoom failed:', e);
  }
}

async function loadRoom(code) {
  try {
    const result = await window.storage.get(roomKey(code), true);
    return result ? JSON.parse(result.value) : null;
  } catch (e) {
    return null;
  }
}

async function deleteRoom(code) {
  try { await window.storage.delete(roomKey(code), true); }
  catch (e) { /* silently ignore */ }
}


// ── 12. ONLINE — ROOM CODE GENERATOR ─────────────────────────

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}


// ── 13. ONLINE — HOST FLOW ────────────────────────────────────

async function hostRoom() {
  const name = document.getElementById('online-myname').value.trim();
  if (!name) { showOnlineStatus('Please enter your name first.', 'err'); return; }

  myName   = name;
  isHost   = true;
  myRole   = 'online';
  roomCode = generateCode();

  const state = {
    code:       roomCode,
    status:     'waiting',
    mode,
    round:      1,
    players:    [{ name, host: true }],
    currentIdx: 0,
    question:   null,
    type:       null,
    ts:         Date.now(),
  };

  await saveRoom(state);
  enterWaitingRoom(state);
}


// ── 14. ONLINE — WAITING ROOM ─────────────────────────────────

function enterWaitingRoom(state) {
  roomCode = state.code;

  // Render each letter with a gold <span> via CSS
  document.getElementById('wr-code-big').innerHTML =
    state.code.split('').map(c => `<span>${c}</span>`).join('');
  document.getElementById('wr-code-display').textContent = state.code;

  drawQR(state.code);
  updateWaitingList(state.players);

  if (isHost) {
    document.getElementById('wr-host-controls').style.display = 'flex';
    document.getElementById('wr-guest-msg').style.display     = 'none';
  } else {
    document.getElementById('wr-host-controls').style.display = 'none';
    document.getElementById('wr-guest-msg').style.display     = 'block';
  }

  showScreen('s-waiting');
  startPolling();
}

function updateWaitingList(players) {
  document.getElementById('wr-count').textContent = `${players.length} / 8`;
  document.getElementById('waiting-list').innerHTML = players
    .map((p, i) => `
      <div class="waiting-row">
        <span class="w-sym">${SYMS[i]}</span>
        <span class="w-name">${p.name}</span>
        ${p.host
          ? '<span class="w-host">Host</span>'
          : '<span class="w-ping"></span>'}
      </div>`)
    .join('');

  if (isHost) {
    const btn = document.getElementById('wr-start-btn');
    if (players.length >= 2) {
      btn.disabled    = false;
      btn.textContent = 'Start Game';
    } else {
      btn.disabled    = true;
      btn.textContent = 'Waiting for Players\u2026';
    }
  }
}


// ── 15. ONLINE — JOIN FLOW ────────────────────────────────────

async function joinRoom() {
  const name = document.getElementById('online-myname').value.trim();
  const code = document.getElementById('join-code-inp').value.trim().toUpperCase();

  if (!name)           { showOnlineStatus('Please enter your name.', 'err'); return; }
  if (code.length < 4) { showOnlineStatus('Please enter a valid room code.', 'err'); return; }

  showOnlineStatus('<span class="spin"></span>Looking for room\u2026', '');

  const state = await loadRoom(code);
  if (!state)                     { showOnlineStatus('Room not found. Check the code and try again.', 'err'); return; }
  if (state.status === 'playing') { showOnlineStatus('That game has already started.', 'err'); return; }
  if (state.players.length >= 8)  { showOnlineStatus('Room is full (8 players maximum).', 'err'); return; }

  myName   = name;
  isHost   = false;
  myRole   = 'online';
  roomCode = code;

  state.players.push({ name, host: false });
  state.ts = Date.now();
  await saveRoom(state);

  hideOnlineStatus();
  enterWaitingRoom(state);
}


// ── 16. ONLINE — POLLING ──────────────────────────────────────

function startPolling() {
  stopPolling();
  pollTimer = setInterval(poll, 2500);
}

function stopPolling() {
  if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
}

async function poll() {
  const state = await loadRoom(roomCode);
  if (!state) { stopPolling(); showScreen('s-home'); return; }

  if      (state.status === 'waiting') updateWaitingList(state.players);
  else if (state.status === 'playing') applyOnlineGameState(state);
  else if (state.status === 'ended')   { stopPolling(); applyEndState(state); }
}


// ── 17. ONLINE — APPLY STATE FROM STORAGE ────────────────────

function applyOnlineGameState(state) {
  onlinePlayers  = state.players;
  onlineIdx      = state.currentIdx;
  onlineRound    = state.round;
  onlineQuestion = state.question;
  onlineType     = state.type;

  // First push: transition from waiting room to game screen
  if (document.getElementById('s-waiting').classList.contains('active')) {
    showScreen('s-game');
    resetGameUI();
  }

  document.getElementById('mode-pill').textContent = MODE_NAMES[state.mode] || MODE_NAMES[mode];
  document.getElementById('p-name').textContent    = onlinePlayers[onlineIdx].name;
  document.getElementById('r-num').textContent     = onlineRound;
  document.getElementById('prog').style.width      = (onlineIdx / onlinePlayers.length * 100) + '%';

  const isMyTurn = onlinePlayers[onlineIdx].name === myName;
  document.getElementById('your-turn-banner').style.display = isMyTurn ? ''     : 'none';
  document.getElementById('spectator-msg').style.display    = isMyTurn ? 'none' : '';

  if (onlineQuestion) {
    // A question has been selected — show it on all devices
    document.getElementById('p-sub').textContent =
      onlineType === 'truth' ? 'Speak honestly' : 'Accept the challenge';
    if (!document.getElementById('q-card').classList.contains('shown')) {
      renderQuestion(onlineType, onlineQuestion);
    }
    enableChoices(false);
    document.getElementById('act-row').style.display  = isMyTurn ? 'flex' : 'none';
    document.getElementById('solo-end').style.display = 'none';
  } else {
    // No question yet — enable choice only for the current player
    if (!document.getElementById('q-card').classList.contains('shown')) {
      document.getElementById('q-empty').style.display = '';
    }
    enableChoices(isMyTurn);
    document.getElementById('act-row').style.display  = 'none';
    document.getElementById('solo-end').style.display = isMyTurn ? '' : 'none';
    document.getElementById('p-sub').textContent      = 'Choose your fate';
  }
}

function applyEndState(state) {
  beep('end');
  launchConfetti();
  renderRoster(state.players);
  showScreen('s-end');
}


// ── 18. ONLINE — START / QUESTION / NEXT / END ───────────────

async function onlineStartGame() {
  const state = await loadRoom(roomCode);
  if (!state) return;
  state.status     = 'playing';
  state.round      = 1;
  state.currentIdx = 0;
  state.question   = null;
  state.type       = null;
  state.mode       = mode;
  state.ts         = Date.now();
  await saveRoom(state);
  onlinePlayers = state.players;
  onlineIdx     = 0;
  onlineRound   = 1;
  showScreen('s-game');
  applyOnlineGameState(state);
}

async function onlineShowQuestion(type) {
  beep(type);
  const pool = Q[mode][type === 'truth' ? 'truths' : 'dares'];
  const text = pool[Math.floor(Math.random() * pool.length)];
  renderQuestion(type, text);
  enableChoices(false);
  document.getElementById('act-row').style.display  = 'flex';
  document.getElementById('solo-end').style.display = 'none';
  // Persist chosen question so all devices see it
  const state = await loadRoom(roomCode);
  if (state) { state.question = text; state.type = type; state.ts = Date.now(); await saveRoom(state); }
}

async function onlineNextPlayer() {
  beep('next');
  const state = await loadRoom(roomCode);
  if (!state) return;
  state.currentIdx = (state.currentIdx + 1) % state.players.length;
  if (state.currentIdx === 0) state.round++;
  state.question = null;
  state.type     = null;
  state.ts       = Date.now();
  await saveRoom(state);
  resetGameUI();
  applyOnlineGameState(state);
}

async function onlineEndGame() {
  stopPolling();
  const state = await loadRoom(roomCode);
  if (state) { state.status = 'ended'; state.ts = Date.now(); await saveRoom(state); }
  beep('end');
  launchConfetti();
  renderRoster(onlinePlayers.length ? onlinePlayers : localPlayers);
  showScreen('s-end');
}


// ── 19. UNIVERSAL HANDLERS ────────────────────────────────────

function handleTruth() {
  myRole === 'online' ? onlineShowQuestion('truth') : localShowQuestion('truth');
}

function handleDare() {
  myRole === 'online' ? onlineShowQuestion('dare') : localShowQuestion('dare');
}

function handleNext() {
  myRole === 'online' ? onlineNextPlayer() : localNextPlayer();
}

function handleEnd() {
  myRole === 'online' ? onlineEndGame() : localEndGame();
}


// ── 20. STATUS BANNER ─────────────────────────────────────────

function showOnlineStatus(message, type) {
  const banner = document.getElementById('online-status');
  banner.style.display = 'flex';
  banner.className     = 'status-banner ' + (type || '');
  document.getElementById('online-status-txt').innerHTML = message;
}

function hideOnlineStatus() {
  document.getElementById('online-status').style.display = 'none';
}


// ── 21. COPY ROOM CODE ────────────────────────────────────────

function copyCode() {
  const copyAndFlash = () => {
    const btn  = document.getElementById('wr-copy-btn');
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = orig), 2000);
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(roomCode).then(copyAndFlash);
  } else {
    // Fallback for older browsers
    const tmp = document.createElement('input');
    tmp.value = roomCode;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    copyAndFlash();
  }
}


// ── 22. EVENT LISTENERS ───────────────────────────────────────

// Home — play style selection
document.getElementById('local-btn').addEventListener('click', () => {
  beep('click');
  buildLocalNames(3);
  document.querySelector('#local-count-grid .count-btn[data-n="3"]').classList.add('sel');
  showScreen('s-local');
});

document.getElementById('online-btn').addEventListener('click', () => {
  beep('click');
  hideOnlineStatus();
  showScreen('s-online');
});

// Mode buttons
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    beep('click');
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('sel'));
    this.classList.add('sel');
    mode = this.dataset.mode;
  });
});

// Local setup — player count
document.querySelectorAll('#local-count-grid .count-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    beep('click');
    document.querySelectorAll('#local-count-grid .count-btn').forEach(b => b.classList.remove('sel'));
    this.classList.add('sel');
    buildLocalNames(parseInt(this.dataset.n));
  });
});

document.getElementById('local-start-btn').addEventListener('click', () => {
  beep('click');
  startLocalGame();
});

document.getElementById('local-back-btn').addEventListener('click', () => {
  beep('click');
  showScreen('s-home');
});

// Online lobby
document.getElementById('host-btn').addEventListener('click', () => {
  beep('click');
  hostRoom();
});

document.getElementById('join-btn').addEventListener('click', () => {
  beep('click');
  joinRoom();
});

document.getElementById('online-back-btn').addEventListener('click', () => {
  beep('click');
  showScreen('s-home');
});

// Auto-uppercase join code
document.getElementById('join-code-inp').addEventListener('input', function () {
  this.value = this.value.toUpperCase();
});

// Waiting room
document.getElementById('wr-start-btn').addEventListener('click', () => {
  beep('click');
  onlineStartGame();
});

document.getElementById('wr-cancel-btn').addEventListener('click', async () => {
  beep('click');
  stopPolling();
  if (roomCode) await deleteRoom(roomCode);
  showScreen('s-online');
});

document.getElementById('wr-copy-btn').addEventListener('click', copyCode);

// Game screen
document.getElementById('truth-btn').addEventListener('click', handleTruth);
document.getElementById('dare-btn').addEventListener('click',  handleDare);
document.getElementById('next-btn').addEventListener('click',  handleNext);
document.getElementById('end-btn1').addEventListener('click',  handleEnd);
document.getElementById('end-btn2').addEventListener('click',  handleEnd);

// End screen
document.getElementById('again-btn').addEventListener('click', () => {
  beep('click');
  showScreen(myRole === 'online' ? 's-online' : 's-local');
});

document.getElementById('settings-btn').addEventListener('click', () => {
  beep('click');
  stopPolling();
  showScreen('s-home');
});

// Sound toggle
const sndBtn = document.getElementById('snd-btn');
sndBtn.addEventListener('click', () => {
  sndOn = !sndOn;
  sndOn ? sndBtn.removeAttribute('data-muted') : sndBtn.setAttribute('data-muted', '');
});

// Theme toggle (light ↔ dark)
document.getElementById('thm-btn').addEventListener('click', function () {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  this.innerHTML = darkMode ? '&#9790;' : '&#9788;';
});

// Keep confetti canvas full-screen on resize
window.addEventListener('resize', () => {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});


// ── 23. INIT ──────────────────────────────────────────────────

buildLocalNames(3);
