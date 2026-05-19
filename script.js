// script.js

// --- Game State Variables ---
let players = [];
let currentGameMatrix = null;
let playerRoles = []; // Array of objects: { name, word, hint, isImposter }
let currentRevealIndex = 0;
let timerInterval = null;
let timerSecondsRemaining = 180; // 3 Minutes standard

// --- DOM Element Selectors ---
const screens = {
    setup: document.getElementById('setup-screen'),
    reveal: document.getElementById('reveal-screen'),
    debate: document.getElementById('debate-screen'),
    vote: document.getElementById('vote-screen'),
    results: document.getElementById('results-screen')
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    createRulesModal();
    setupEventListeners();
});

function setupEventListeners() {
    // Setup Screen
    document.getElementById('add-player-btn').addEventListener('click', addPlayer);
    document.getElementById('player-name-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addPlayer();
    });
    document.getElementById('start-game-btn').addEventListener('click', startGame);

    // Rules Buttons (Global Hook)
    document.querySelectorAll('.rules-toggle-btn').forEach(btn => {
        btn.addEventListener('click', toggleRulesModal);
    });

    // Reveal Screen
    const peekBtn = document.getElementById('secure-peek-btn');
    peekBtn.addEventListener('mousedown', showSecretData);
    peekBtn.addEventListener('mouseup', hideSecretData);
    peekBtn.addEventListener('mouseleave', hideSecretData);
    
    // Mobile Touch Support for Peek Button
    peekBtn.addEventListener('touchstart', (e) => { e.preventDefault(); showSecretData(); });
    peekBtn.addEventListener('touchend', (e) => { e.preventDefault(); hideSecretData(); });

    document.getElementById('next-player-btn').addEventListener('click', advanceRevealTurn);

    // Debate Screen
    document.getElementById('pause-timer-btn').addEventListener('click', toggleTimer);
    document.getElementById('proceed-to-vote-btn').addEventListener('click', initVotingScreen);

    // Results Screen
    document.getElementById('play-again-btn').addEventListener('click', resetGameToSetup);
}

// --- Screen Router ---
function switchScreen(activeScreenKey) {
    Object.keys(screens).forEach(key => {
        if (screens[key]) {
            if (key === activeScreenKey) {
                screens[key].classList.add('active');
            } else {
                screens[key].classList.remove('active');
            }
        }
    });
}

// --- Dynamic Rules Modal Injection ---
function createRulesModal() {
    if (document.getElementById('rules-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'rules-modal';
    modal.className = 'custom-modal-overlay dynamic-hide';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(10, 15, 30, 0.95); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    `;

    const content = document.createElement('div');
    content.className = 'modal-container';
    content.style.cssText = `
        background: #121826; border: 2px solid #00f2fe; padding: 2rem;
        border-radius: 12px; max-width: 500px; width: 90%; color: #fff;
        box-shadow: 0 0 20px rgba(0, 242, 254, 0.3); font-family: sans-serif;
    `;

    content.innerHTML = `
        <h2 style="color: #00f2fe; margin-top: 0; text-transform: uppercase; letter-spacing: 2px;">Protocol Rules</h2>
        <hr style="border-color: #323f5e; margin: 1rem 0;">
        <ul style="padding-left: 1.2rem; line-height: 1.6;">
            <li><strong>Crewmates:</strong> Everyone receives a unique (different) word belonging to the same primary category theme.</li>
            <li><strong>The Imposter:</strong> One player receives a different word too, but it belongs to a crossover/conflicting theme and they don't know who they are.</li>
            <li><strong>The Objective:</strong> Discuss your words carefully through clues. Crewmates must decipher who are innocent and who the imposter is, whereas the imposter (unknown) must blend in while trying to figure their identity safely.</li>
        </ul>
        <button id="close-rules-btn" class="btn primary" style="width: 100%; margin-top: 1.5rem; background: linear-gradient(135deg, #00f2fe, #4facfe); border: none; padding: 10px; color: white; font-weight: bold; cursor: pointer; border-radius: 6px;">CLOSE PROTOCOL</button>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    document.getElementById('close-rules-btn').addEventListener('click', toggleRulesModal);
}

function toggleRulesModal() {
    const modal = document.getElementById('rules-modal');
    if (modal.classList.contains('dynamic-hide')) {
        modal.classList.remove('dynamic-hide');
        modal.style.opacity = '1';
        modal.style.pointerEvents = 'auto';
    } else {
        modal.classList.add('dynamic-hide');
        modal.style.opacity = '0';
        modal.style.pointerEvents = 'none';
    }
}

// --- Setup Phase Logic ---
function addPlayer() {
    const input = document.getElementById('player-name-input');
    const name = input.value.trim();
    
    if (!name) return;
    if (players.includes(name)) {
        alert("This neural signature is already registered.");
        return;
    }
    if (players.length >= 10) {
        alert("Maximum neural sync reached (10 players max for local matrix stability).");
        return;
    }

    players.push(name);
    input.value = '';
    renderPlayerList();
    updateStartButtonState();
}

function removePlayer(index) {
    players.splice(index, 1);
    renderPlayerList();
    updateStartButtonState();
}

function updateStartButtonState() {
    const startBtn = document.getElementById('start-game-btn');
    if (players.length >= 3) {
        startBtn.removeAttribute('disabled');
        startBtn.classList.remove('hidden');
    } else {
        startBtn.setAttribute('disabled', 'true');
        startBtn.classList.add('hidden');
    }
}

function renderPlayerList() {
    const listContainer = document.getElementById('player-list');
    listContainer.innerHTML = '';
    
    players.forEach((player, index) => {
        const li = document.createElement('li');
        li.className = 'player-item added';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = player;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.addEventListener('click', () => removePlayer(index));
        
        li.appendChild(nameSpan);
        li.appendChild(removeBtn);
        listContainer.appendChild(li);
    });
}

// --- Core Engine Allocation Logic ---
// --- Core Engine Allocation Logic (With User-Defined Chaos Mutation) ---
function startGame() {
    const activePool = window.SYNAPSE_MATRIX_POOL;
    
    if (!activePool || activePool.length === 0) {
        alert("CRITICAL ERROR: Matrix database ('words.js') not detected or is empty.");
        return;
    }

    // 1. Select the primary major category for the match
    currentGameMatrix = activePool[Math.floor(Math.random() * activePool.length)];

    let innocentPool = [...currentGameMatrix.innocentWords];
    shuffleArray(innocentPool);

    // Lock down exactly ONE unique innocent hint for all crewmates to share this round
    const chosenInnocentHint = currentGameMatrix.innocentHint;

    // 2. Determine if a Chaos Mutation occurs using your UI element selector value
    const mutationSetting = parseFloat(document.getElementById('mutation-rate').value);
    const isMutationTriggered = Math.random() < mutationSetting;
    let imposterSourceMatrix = currentGameMatrix; // Default: same major category

    if (isMutationTriggered && activePool.length > 1) {
        // Filter out the current category to force a completely different pool
        let alternatePool = activePool.filter(matrix => matrix.id !== currentGameMatrix.id);
        imposterSourceMatrix = alternatePool[Math.floor(Math.random() * alternatePool.length)];
        
        console.log(`%c[CHAOS MUTATION]: Imposter word isolated from unrelated universe: "${imposterSourceMatrix.id}"`, "color: #ff0055; font-weight: bold;");
    }

    // 3. Extract, shuffle, and isolate the exact Imposter data components
    let imposterPool = [];
    if (imposterSourceMatrix.imposterWords && imposterSourceMatrix.imposterWords.length > 0) {
        imposterPool = [...imposterSourceMatrix.imposterWords];
    }
    shuffleArray(imposterPool);

    const chosenImposterWord = imposterPool[0] || "PARADOX_SIGNAL";
    
    // Lock down exactly ONE unique imposter hint corresponding to their source universe
    const chosenImposterHint = imposterSourceMatrix.imposterHint;

    // 4. Assign roles to players securely
    const imposterIndex = Math.floor(Math.random() * players.length);

    playerRoles = players.map((player, idx) => {
        const isImposter = (idx === imposterIndex);
        
        return {
            name: player,
            word: isImposter ? chosenImposterWord : (innocentPool.pop() || "CORE_NODE"),
            hint: isImposter ? chosenImposterHint : chosenInnocentHint,
            isImposter: isImposter
        };
    });

    currentRevealIndex = 0;
    setupNextPlayerReveal();
    switchScreen('reveal');
}

// --- Pass & Play (Secret Reveal) Logic ---
function setupNextPlayerReveal() {
    const totalPlayers = playerRoles.length;
    const progressPercent = (currentRevealIndex / totalPlayers) * 100;
    document.getElementById('reveal-progress').style.width = `${progressPercent}%`;

    const currentPlayer = playerRoles[currentRevealIndex];
    document.getElementById('current-player-turn').innerText = `${currentPlayer.name.toUpperCase()}'S ALIGNMENT`;
    
    document.getElementById('secret-data').classList.add('hidden');
    document.getElementById('secure-peek-btn').classList.remove('hidden');
    document.getElementById('next-player-btn').classList.add('hidden');

    document.getElementById('secret-word').innerText = currentPlayer.word;
    document.getElementById('secret-hint').innerText = currentPlayer.hint;
}

function showSecretData() {
    document.getElementById('secret-data').classList.remove('hidden');
    document.getElementById('next-player-btn').classList.remove('hidden');
}

function hideSecretData() {
    document.getElementById('secret-data').classList.add('hidden');
}

function advanceRevealTurn() {
    currentRevealIndex++;
    if (currentRevealIndex < playerRoles.length) {
        setupNextPlayerReveal();
    } else {
        initDebateScreen();
    }
}

// --- Debate & Timer Module ---
function initDebateScreen() {
    switchScreen('debate');
    timerSecondsRemaining = 180; 
    updateTimerDisplay();

    // Generate Randomized Turn Order Assignment for Debate
    generateDebateTurnOrder();
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerSecondsRemaining > 0) {
            timerSecondsRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            initVotingScreen();
        }
    }, 1000);
}

function generateDebateTurnOrder() {
    // Clone original player pool list array sequence safely
    let orderPool = [...players];
    shuffleArray(orderPool);

    // Look for or dynamically create order element frame box
    let orderContainer = document.getElementById('debate-turn-order-list');
    if (!orderContainer) {
        // Fallback programmatic generation if element tag frame layout is missing from DOM
        const targetParent = document.getElementById('debate-screen');
        orderContainer = document.createElement('div');
        orderContainer.id = 'debate-turn-order-list';
        orderContainer.style.cssText = "margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: center;";
        targetParent.insertBefore(orderContainer, document.getElementById('timer-controls') || targetParent.lastChild);
    }

    // Fill sequence items cleanly
    orderContainer.innerHTML = `<h3 style="color:#00f2fe; margin-top:0; font-size:0.9rem; letter-spacing:1px; text-transform:uppercase;">SYNCHRONIZED SPEECH SEQUENCE</h3>`;
    
    const stringSequence = orderPool.map((name, idx) => {
        return `<span style="font-weight:bold; color:#fff;">${idx + 1}. ${name.toUpperCase()}</span>`;
    }).join(' <span style="color:#4facfe; margin:0 8px;">➔</span> ');

    orderContainer.innerHTML += `<div style="font-size:1.1rem; line-height:1.5; padding: 5px 0;">${stringSequence}</div>`;
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSecondsRemaining / 60);
    const seconds = timerSecondsRemaining % 60;
    document.getElementById('timer').innerText = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
    const btn = document.getElementById('pause-timer-btn');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        btn.innerText = "Resume";
    } else {
        btn.innerText = "Pause";
        timerInterval = setInterval(() => {
            if (timerSecondsRemaining > 0) {
                timerSecondsRemaining--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                initVotingScreen();
            }
        }, 1000);
    }
}

// --- Voting Logic ---
function initVotingScreen() {
    if (timerInterval) clearInterval(timerInterval);
    switchScreen('vote');

    const pool = document.getElementById('voting-pool');
    pool.innerHTML = '';

    playerRoles.forEach(player => {
        const btn = document.createElement('button');
        btn.className = "btn secondary";
        btn.innerText = player.name;
        btn.addEventListener('click', () => registerVote(player));
        pool.appendChild(btn);
    });
}

function registerVote(selectedPlayer) {
    const verdictBanner = document.getElementById('verdict-banner');
    
    if (selectedPlayer.isImposter) {
        verdictBanner.className = "verdict-banner win";
        verdictBanner.innerText = `PARADOX ISOLATED! You successfully purged ${selectedPlayer.name}. The semantic leak was safely sealed.`;
    } else {
        verdictBanner.className = "verdict-banner loss";
        verdictBanner.innerText = `CRITICAL MALFUNCTION. You purged ${selectedPlayer.name}, who was entirely Innocent. The Paradox entity remains inside the architecture.`;
    }

    renderFinalReveal();
    switchScreen('results');
}

// --- Final Reveal & Breakdown Panel ---
function renderFinalReveal() {
    const container = document.getElementById('final-reveal-list');
    container.innerHTML = '';

    playerRoles.forEach(player => {
        const div = document.createElement('div');
        div.className = `reveal-item ${player.isImposter ? 'is-imposter' : 'is-innocent'}`;
        
        div.innerHTML = `
            <div>
                <strong>${player.name}</strong> ${player.isImposter ? '⚡ [THE PARADOX]' : '[Innocent Component]'}
                <br><small>Context Frame: ${player.hint}</small>
            </div>
            <div style="text-align: right; font-weight: bold; align-self: center;">
                "${player.word}"
            </div>
        `;
        container.appendChild(div);
    });
}

function resetGameToSetup() {
    currentGameMatrix = null;
    playerRoles = [];
    
    // REMOVE OR COMMENT OUT THESE TWO LINES:
    // document.getElementById('player-list').innerHTML = '';
    // players = []; 
    
    // LEAVE THESE ALONE:
    updateStartButtonState();
    switchScreen('setup');
}

// --- Utility Shuffler ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Ambient Particle Matrix ---
function initBackgroundParticles() {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 242, 254, ${Math.random() * 0.3 + 0.1});
            box-shadow: 0 0 8px #00f2fe;
            border-radius: 50%;
            top: ${Math.random() * 100}vh;
            left: ${Math.random() * 100}vw;
            z-index: -1;
            pointer-events: none;
            opacity: ${Math.random()};
        `;
        document.body.appendChild(particle);
        
        // Animate the individual particle smoothly
        animateParticle(particle);
    }
}

function animateParticle(el) {
    let speedX = (Math.random() - 0.5) * 0.5;
    let speedY = (Math.random() - 0.5) * 0.5;
    
    function move() {
        let x = parseFloat(el.style.left) + speedX;
        let y = parseFloat(el.style.top) + speedY;
        
        // Loop around screen boundaries
        if (x < 0) x = 100;
        if (x > 100) x = 0;
        if (y < 0) y = 100;
        if (y > 100) y = 0;
        
        el.style.left = x + 'vw';
        el.style.top = y + 'vh';
        
        requestAnimationFrame(move);
    }
    move();
}

// Fire the background generation when page loads
document.addEventListener('DOMContentLoaded', initBackgroundParticles);