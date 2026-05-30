// script.js - British English Edition with Full Control Matrix

// --- Game State Variables ---
let players = [];
let currentGameMatrix = null;
let playerRoles = []; // Objects: { name, word, hint, isImposter, isParanoiac, isMuted, isMimic, mimicTarget }
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
    // Setup Screen Actions
    document.getElementById('add-player-btn').addEventListener('click', addPlayer);
    document.getElementById('player-name-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addPlayer();
    });
    document.getElementById('start-game-btn').addEventListener('click', startGame);

    // Rules Overlay Modal Actions
    document.querySelectorAll('.rules-toggle-btn').forEach(btn => {
        btn.addEventListener('click', toggleRulesModal);
    });

    // Pass & Play Reveal Screen Actions
    const peekBtn = document.getElementById('secure-peek-btn');
    if (peekBtn) {
        peekBtn.addEventListener('click', toggleSecretDataVisibility);
    }
    
    const nextBtn = document.getElementById('next-player-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', advanceRevealTurn);
    }

    // Debate Screen Actions
    document.getElementById('pause-timer-btn').addEventListener('click', toggleTimer);
    document.getElementById('proceed-to-vote-btn').addEventListener('click', initVotingScreen);

    // Results Screen Actions
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
        background: rgba(3, 5, 10, 0.98); z-index: 9999;
        display: flex; justify-content: center; align-items: center;
        opacity: 0; pointer-events: none; transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        backdrop-filter: blur(12px);
    `;

    const content = document.createElement('div');
    content.className = 'modal-container';
    content.style.cssText = `
        background: #070a14; 
        border: 2px solid #ff0055; 
        padding: 2.5rem;
        border-radius: 12px; 
        max-width: 680px; 
        width: 92%; 
        color: #e2e8f0;
        box-shadow: 0 0 40px rgba(255, 0, 85, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.9);
        font-family: 'Courier New', Courier, monospace;
        max-height: 85vh; 
        overflow-y: auto;
        letter-spacing: 0.5px;
        animation: modalPulse 4s infinite alternate;
    `;

    // Injecting keyframe styles dynamically for moving glow effects
    if (!document.getElementById('rules-animation-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'rules-animation-styles';
        styleSheet.innerText = `
            @keyframes modalPulse {
                0% { border-color: #ff0055; box-shadow: 0 0 30px rgba(255, 0, 85, 0.15); }
                100% { border-color: #00f2fe; box-shadow: 0 0 35px rgba(0, 242, 254, 0.25); }
            }
            .protocol-slat {
                background: rgba(255, 255, 255, 0.01);
                border: 1px solid #1e293b;
                padding: 1rem;
                border-radius: 6px;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .protocol-slat:hover {
                background: rgba(0, 242, 254, 0.03);
                border-color: #00f2fe;
                transform: translateX(4px);
                box-shadow: -4px 0 0 #00f2fe;
            }
            .anomaly-slat:hover {
                background: rgba(255, 0, 85, 0.03);
                border-color: #ff0055;
                transform: translateX(4px);
                box-shadow: -4px 0 0 #ff0055;
            }
        `;
        document.head.appendChild(styleSheet);
    }

    content.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h2 style="color: #ff0055; margin: 0; text-transform: uppercase; letter-spacing: 3px; font-size: 1.5rem; font-weight: 900;">
                ⚠️ CRITICAL CORE PROTOCOLS
            </h2>
            <p style="color: #64748b; font-size: 0.8rem; margin: 0.4rem 0 0 0; text-transform: uppercase; letter-spacing: 1px;">
                Secure Mainframe Entry // Identity Redacted Until Launch
            </p>
        </div>

        <hr style="border: 0; border-top: 1px dashed #22314d; margin: 1.5rem 0;">
        
        <h3 style="color: #00f2fe; text-transform: uppercase; letter-spacing: 2px; font-size: 0.95rem; margin-top: 0; margin-bottom: 1rem;">
            [01] THE FOUNDATIONAL MECHANICAL STRUCTURE
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem; font-size: 0.9rem; line-height: 1.5;">
            <div class="protocol-slat">
                <span style="color: #00f2fe; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
                    Step 1: The Blind Allocation Turn
                </span>
                At the start, absolutely nobody knows their true alignment. Players must pass the device around sequentially. Each individual performs a secure peek to reveal their assigned keyword node and thematic context frame.
            </div>

            <div class="protocol-slat">
                <span style="color: #00f2fe; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
                    Step 2: The Transmission Sequence
                </span>
                The interface generates a strict speech order. Following this list, every player must speak exactly **one short clue** or keyword associated with their node. This continues for **at least two full rounds** of clue-giving.
            </div>

            <div class="protocol-slat">
                <span style="color: #00f2fe; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">
                    Step 3: The Voting Lock
                </span>
                To trigger an early execution phase, a strict majority **(strictly greater than 50% of active players)** must collectively declare readiness to vote. If the debate extends to a third round, all players give their final clue, and a forced vote instantly initializes. You must purge a suspected link or align on a "Phantom Skip."
            </div>
        </div>

        <h3 style="color: #ffaa00; text-transform: uppercase; letter-spacing: 2px; font-size: 0.95rem; margin-bottom: 1rem;">
            [02] UNDERLYING FRAME ALIGNMENTS
        </h3>
        
        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem; font-size: 0.9rem; line-height: 1.5;">
            <div style="background: rgba(0, 242, 254, 0.03); border-left: 3px solid #00f2fe; padding: 0.85rem 1rem; border-radius: 0 6px 6px 0;">
                <strong style="color: #00f2fe; text-transform: uppercase;">Innocent Crewmates:</strong> 
                You hold a entirely unique word tied directly to the core thematic category. Find your allies without giving the structural category away.
            </div>

            <div style="background: rgba(255, 0, 85, 0.03); border-left: 3px solid #ff0055; padding: 0.85rem 1rem; border-radius: 0 6px 6px 0;">
                <strong style="color: #ff0055; text-transform: uppercase;">The Imposter (Unaware):</strong> 
                You possess a word belonging to a crossover category. You do not know you are the anomaly! You must actively study the room's clues to disguise your rogue dataset.
            </div>
        </div>

        <h3 style="color: #a855f7; text-transform: uppercase; letter-spacing: 2px; font-size: 0.95rem; margin-bottom: 0.5rem;">
            [03] VOLATILE SYSTEM MODIFIERS
        </h3>
        <p style="font-size: 0.8rem; color: #64748b; margin-top: 0; margin-bottom: 1rem;">
            Host-customised environmental anomalies that automatically alter network behavior at execution runtime:
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem; font-size: 0.85rem; line-height: 1.5;">
            <div class="protocol-slat anomaly-slat">
                <span style="color: #a855f7; font-weight: bold; text-transform: uppercase;">🔄 Category Inversion (25% Chance)</span> — 
                The system reverses dataset arrays. The Crewmates inherit the erratic crossover keywords, whereas the Imposter receives the clean baseline terminology.
            </div>

            <div class="protocol-slat anomaly-slat">
                <span style="color: #f43f5e; font-weight: bold; text-transform: uppercase;">☣️ Chaos Mutation</span> — 
                Strips the Imposter of related data entirely. Their target node word is ripped from a completely foreign, unrelated alternative category universe.
            </div>

            <div class="protocol-slat anomaly-slat">
                <span style="color: #00ff66; font-weight: bold; text-transform: uppercase;">👻 Phantom Protocol (15% Chance)</span> — 
                A ghost network configuration. There is no Imposter present; every terminal is innocent. Paranoia is your sole execution hazard.
            </div>

            <div class="protocol-slat anomaly-slat">
                <span style="color: #ffaa00; font-weight: bold; text-transform: uppercase;">👁️ The Paranoiac (15% Chance)</span> — 
                One innocent architecture player is blinded. Their screen registers absolute corruption, forcing them to fabricate clues blindly from round one.
            </div>

            <div class="protocol-slat anomaly-slat">
                <span style="color: #bc00ff; font-weight: bold; text-transform: uppercase;">🔗 Mimic Node (10% Chance)</span> — 
                An innocent terminal is cleared of keyword variables. They are given a targeted host asset and must replicate or hijack that player's specific clues.
            </div>

            <div class="protocol-slat anomaly-slat">
                <span style="color: #ff0055; font-weight: bold; text-transform: uppercase;">🤐 Static Frequency (10% Chance)</span> — 
                A defensive glitch seals a random player's vocal drive. They are muted for the match, restricted to a single physical gesture to project their node clue.
            </div>
        </div>
        
        <button id="close-rules-btn" style="
            width: 100%; 
            background: transparent; 
            border: 1px solid #ff0055; 
            padding: 14px; 
            color: #ff0055; 
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold; 
            font-size: 0.95rem;
            cursor: pointer; 
            border-radius: 6px; 
            text-transform: uppercase; 
            letter-spacing: 2px;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        " onmouseover="this.style.background='rgba(255, 0, 85, 0.12)'; this.style.color='#00f2fe'; this.style.borderColor='#00f2fe';" 
           onmouseout="this.style.background='transparent'; this.style.color='#ff0055'; this.style.borderColor='#ff0055';">
            [ TERMINATE SYSTEM BRIEFING ]
        </button>
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
        alert("This neural signature has already been registered.");
        return;
    }
    if (players.length >= 10) {
        alert("Maximum neural synchronisation reached (10 players maximum for local matrix stability).");
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

// --- Core Engine Control Matrix Allocation Logic ---
function startGame() {
    const activePool = window.SYNAPSE_MATRIX_POOL;
    
    if (!activePool || activePool.length === 0) {
        alert("CRITICAL MALFUNCTION: Matrix database ('words.js') not detected or is empty.");
        return;
    }

    // Select a baseline data category matrix
    currentGameMatrix = activePool[Math.floor(Math.random() * activePool.length)];

    const standardUniverseFlip = Math.random() < 0.50;
    
    let nativeInnocentWords = standardUniverseFlip ? [...currentGameMatrix.imposterWords] : [...currentGameMatrix.innocentWords];
    let nativeInnocentHint  = standardUniverseFlip ? currentGameMatrix.imposterHint : currentGameMatrix.innocentHint;
    
    let nativeImposterPool  = standardUniverseFlip ? [...currentGameMatrix.innocentWords] : [...currentGameMatrix.imposterWords];
    let nativeImposterHint  = standardUniverseFlip ? currentGameMatrix.innocentHint : currentGameMatrix.imposterHint;

    // FEATURE 1: Category Inversion Check
    const categoryInversionCheckbox = document.getElementById('category-inversion-checkbox');
    const allowCategoryInversion = categoryInversionCheckbox ? categoryInversionCheckbox.checked : true;
    const isCategoryInverted = allowCategoryInversion && (Math.random() < 0.25);

    let finalInnocentPool, finalInnocentHint, finalImposterPool, finalImposterHint;

    if (isCategoryInverted) {
        finalInnocentPool = [...nativeImposterPool];
        finalInnocentHint = nativeImposterHint;
        finalImposterPool = [...nativeInnocentWords];
        finalImposterHint = nativeInnocentHint;
        console.log("%c[SYSTEM ANOMALY]: Category Inversion Activated. Pools cross-wired!", "color: #00f0ff; font-weight: bold;");
    } else {
        finalInnocentPool = [...nativeInnocentWords];
        finalInnocentHint = nativeInnocentHint;
        finalImposterPool = [...nativeImposterPool];
        finalImposterHint = nativeImposterHint;
    }

    shuffleArray(finalInnocentPool);

    // FEATURE 2: Chaos Mutation Rate Check
    const mutationCheckbox = document.getElementById('mutation-rate-checkbox');
    const allowMutation = mutationCheckbox ? mutationCheckbox.checked : true;
    const mutationSetting = parseFloat(document.getElementById('mutation-rate').value || 0);
    const isMutationTriggered = allowMutation && (Math.random() < mutationSetting);

    if (isMutationTriggered && activePool.length > 1) {
        let alternatePool = activePool.filter(matrix => matrix.id !== currentGameMatrix.id);
        let imposterSourceMatrix = alternatePool[Math.floor(Math.random() * alternatePool.length)];
        let structuralMutationFlip = Math.random() < 0.50;
        finalImposterPool = structuralMutationFlip ? [...imposterSourceMatrix.imposterWords] : [...imposterSourceMatrix.innocentWords];
        finalImposterHint = structuralMutationFlip ? imposterSourceMatrix.imposterHint : imposterSourceMatrix.innocentHint;
        console.log(`%c[CHAOS MUTATION]: Imposter word isolated from alternative data universe: "${imposterSourceMatrix.id}"`, "color: #ff0055; font-weight: bold;");
    }

    shuffleArray(finalImposterPool);
    const chosenImposterWord = finalImposterPool[0] || "PARADOX_SIGNAL";

    // FEATURE 3: Phantom Protocol Check (Fixing the 15% rate math)
    const phantomCheckbox = document.getElementById('phantom-checkbox');
    const allowPhantom = phantomCheckbox ? phantomCheckbox.checked : true;
    const isAllInnocentMatch = allowPhantom && (players.length >= 4) && (Math.random() < 0.15);
    
    const imposterIndex = isAllInnocentMatch ? -1 : Math.floor(Math.random() * players.length);
    if (isAllInnocentMatch) {
        console.log("%c[PHANTOM PROTOCOL]: Ghost threat activated. Everyone is an Innocent Crewmate this match!", "color: #00ff66; font-weight: bold;");
    }

    // FEATURE 4: The Paranoiac Check
    const paranoiacCheckbox = document.getElementById('paranoiac-toggle');
    const allowParanoiac = paranoiacCheckbox ? paranoiacCheckbox.checked : true;
    const isParanoiacGame = !isAllInnocentMatch && allowParanoiac && (Math.random() < 0.15) && players.length >= 4;
    
    let paranoiacIndex = -1;
    if (isParanoiacGame) {
        do {
            paranoiacIndex = Math.floor(Math.random() * players.length);
        } while (paranoiacIndex === imposterIndex);
        console.log(`%c[PARANOIAC CONFIG]: Paranoiac protocol deployed successfully.`, "color: #ffaa00; font-weight: bold;");
    }

    // FEATURE 5: Echo Chamber / Mimic Node Check
    const mimicCheckbox = document.getElementById('mimic-checkbox');
    const allowMimic = mimicCheckbox ? mimicCheckbox.checked : true;
    const isMimicActive = allowMimic && (players.length >= 4) && (Math.random() < 0.10);
    
    let assignedMimicIndex = -1;
    let mimicTargetIndex = -1;

    if (isMimicActive) {
        let clearSlots = players.map((_, i) => i).filter(i => i !== imposterIndex && i !== paranoiacIndex);
        if (clearSlots.length > 0) {
            assignedMimicIndex = clearSlots[Math.floor(Math.random() * clearSlots.length)];
            let targetSlots = players.map((_, i) => i).filter(i => i !== assignedMimicIndex);
            mimicTargetIndex = targetSlots[Math.floor(Math.random() * targetSlots.length)];
            console.log(`%c[MIMIC SIGNAL]: Index ${assignedMimicIndex} is mimicking clues from Index ${mimicTargetIndex}`, "color: #bc00ff; font-weight: bold;");
        }
    }

    // FEATURE 6: Static Frequency Sabotage Check
    const staticFrequencyCheckbox = document.getElementById('static-frequency-checkbox');
    const allowMuting = staticFrequencyCheckbox ? staticFrequencyCheckbox.checked : true;
    const isStaticFrequencyActive = allowMuting && (Math.random() < 0.10);
    
    let assignedMuteIndex = -1;
    if (isStaticFrequencyActive) {
        assignedMuteIndex = Math.floor(Math.random() * players.length);
        console.log(`%c[GLITCH TRAP]: Static Frequency Protocol deployed. Axis assigned to index: ${assignedMuteIndex}`, "color: #ff0055; font-weight: bold;");
    }

    // Structure Mapping Engine
    playerRoles = players.map((player, idx) => {
        const isImposter = (idx === imposterIndex);
        const isParanoiac = (idx === paranoiacIndex);
        const isMuted = (idx === assignedMuteIndex);
        const isMimic = (idx === assignedMimicIndex);
        
        let assignedWord = "CORE_NODE";
        let assignedHint = finalInnocentHint;
        let targetName = isMimic ? players[mimicTargetIndex] : null;

        if (isImposter) {
            assignedWord = chosenImposterWord;
            assignedHint = finalImposterHint;
        } else if (isParanoiac) {
            assignedWord = "⚠️ SYNAPSE_BLIND_SIGNAL";
            assignedHint = "Your neural interface context is corrupted. You have no data frame. Act normal.";
        } else if (isMimic) {
            assignedWord = `🔗 MIMIC NODE: ${targetName.toUpperCase()}`;
            assignedHint = `You do not possess personal category data. You must mirror the context clues given by ${targetName.toUpperCase()} to survive!`;
        } else {
            assignedWord = finalInnocentPool.pop() || "CORE_NODE";
        }

        // Final fail-safe array format check
        if (!assignedHint || assignedHint === "undefined") {
            assignedHint = currentGameMatrix.category || currentGameMatrix.id || "CLASSIFIED MATRIC ARCHITECTURE";
        }
        
        return {
            name: player,
            word: assignedWord,
            hint: assignedHint,
            isImposter: isImposter,
            isParanoiac: isParanoiac,
            isMuted: isMuted,
            isMimic: isMimic,
            mimicTarget: targetName
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
    document.getElementById('current-player-turn').innerText = `${currentPlayer.name.toUpperCase()}'S ARCHITECTURE`;
    
    document.getElementById('secret-data').classList.add('hidden');
    
    const peekBtn = document.getElementById('secure-peek-btn');
    peekBtn.classList.remove('hidden');
    peekBtn.innerText = "CLICK TO PEEK SECRET NODE";
    
    document.getElementById('next-player-btn').classList.add('hidden');

    document.getElementById('secret-word').innerText = currentPlayer.word;
    document.getElementById('secret-hint').innerText = currentPlayer.hint;

    const oldWarning = document.getElementById('static-frequency-warning-container');
    if (oldWarning) oldWarning.remove();

    if (currentPlayer.isMuted) {
        const warningBox = document.createElement('div');
        warningBox.id = 'static-frequency-warning-container';
        warningBox.style.cssText = `
            background: rgba(255, 0, 85, 0.15); border: 2px solid #ff0055;
            padding: 1rem; margin: 1rem 0; border-radius: 8px; text-align: center;
            font-family: monospace; animation: pulse 2s infinite alternate;
        `;
        warningBox.innerHTML = `
            <span style="color: #ff0055; font-weight: bold; font-size: 0.9rem; letter-spacing: 1px;">
                ⚠️ SIGNAL FAULT: STATIC FREQUENCY DETECTED
            </span>
            <p style="color: #fff; margin: 0.5rem 0 0 0; font-size: 0.8rem; line-height: 1.4;">
                You are strictly forbidden from vocalising spoken words or sounds this match! You must convey your connection clue to the table using only a <span style="color:#ff0055; font-weight:bold; text-transform:uppercase;">single physical gesture or facial expression</span>.
            </p>
        `;
        const secretDataBox = document.getElementById('secret-data');
        secretDataBox.insertBefore(warningBox, secretDataBox.firstChild);
    }
}

function toggleSecretDataVisibility() {
    const secretData = document.getElementById('secret-data');
    const peekBtn = document.getElementById('secure-peek-btn');
    const nextBtn = document.getElementById('next-player-btn');

    if (secretData.classList.contains('hidden')) {
        secretData.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        peekBtn.innerText = "LOCK & CONCEAL SECRET DATA";
    } else {
        secretData.classList.add('hidden');
        peekBtn.innerText = "CLICK TO PEEK SECRET NODE";
    }
}

function advanceRevealTurn() {
    currentRevealIndex++;
    if (currentRevealIndex < playerRoles.length) {
        setupNextPlayerReveal();
    } else {
        initDebateScreen();
    }
}

// --- Debate Module ---
function initDebateScreen() {
    switchScreen('debate');
    timerSecondsRemaining = 180; 
    updateTimerDisplay();

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
    let orderPool = [...players];
    shuffleArray(orderPool);

    let orderContainer = document.getElementById('debate-turn-order-list');
    if (!orderContainer) {
        const targetParent = document.getElementById('debate-screen');
        orderContainer = document.createElement('div');
        orderContainer.id = 'debate-turn-order-list';
        orderContainer.style.cssText = "margin: 1.5rem 0; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; text-align: center;";
        targetParent.insertBefore(orderContainer, document.getElementById('timer-controls') || targetParent.lastChild);
    }

    orderContainer.innerHTML = `<h3 style="color:#00f2fe; margin-top:0; font-size:0.9rem; letter-spacing:1px; text-transform:uppercase;">SYNCHRONISED SPEECH SEQUENCE</h3>`;
    
    const stringSequence = orderPool.map((name, idx) => {
        const playerObj = playerRoles.find(p => p.name === name);
        let statusBadge = '';
        
        if (playerObj && playerObj.isMuted) {
            statusBadge = ` <span style="color:#ff0055; font-size:0.8rem;">[🤐 GESTURE ONLY]</span>`;
        }

        return `<span style="font-weight:bold; color:#fff;">${idx + 1}. ${name.toUpperCase()}${statusBadge}</span>`;
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

    const skipBtn = document.createElement('button');
    skipBtn.className = "btn primary";
    skipBtn.style.cssText = "background: linear-gradient(135deg, #00ff66, #00b344); border: none; font-weight: bold; margin-top: 15px;";
    skipBtn.innerText = "❌ NO IMPOSTER PRESENT (PHANTOM SKIP)";
    skipBtn.addEventListener('click', () => registerVote(null)); 
    pool.appendChild(skipBtn);
}

function registerVote(selectedPlayer) {
    const verdictBanner = document.getElementById('verdict-banner');
    const actualImposterExists = playerRoles.some(p => p.isImposter);

    if (selectedPlayer === null) {
        if (!actualImposterExists) {
            verdictBanner.className = "verdict-banner win";
            verdictBanner.innerText = `PHANTOM DETECTED & THWARTED! The group correctly deduced that no semantic leak occurred. Everyone was an Innocent Component!`;
        } else {
            const imposterObj = playerRoles.find(p => p.isImposter);
            verdictBanner.className = "verdict-banner loss";
            verdictBanner.innerText = `CRITICAL MALFUNCTION! You skipped execution, but there WAS a leak. ${imposterObj.name} was the Paradox entity and has infected the architectural mainframe!`;
        }
    } 
    else {
        if (selectedPlayer.isImposter) {
            verdictBanner.className = "verdict-banner win";
            verdictBanner.innerText = `PARADOX ISOLATED! You successfully purged ${selectedPlayer.name}. The semantic leak has been safely sealed.`;
        } else if (selectedPlayer.isParanoiac) {
            verdictBanner.className = "verdict-banner loss";
            verdictBanner.innerText = `TOTAL SABOTAGE! You purged ${selectedPlayer.name}, who was an Innocent Paranoiac with a blind data stream. You fell straight into the paradox trap!`;
        } else if (selectedPlayer.isMimic) {
            verdictBanner.className = "verdict-banner loss";
            verdictBanner.innerText = `FATAL ERROR. You purged ${selectedPlayer.name}, who was an Innocent Mimic node forced to mirror ${selectedPlayer.mimicTarget.toUpperCase()}! The threat persists.`;
        } else {
            verdictBanner.className = "verdict-banner loss";
            if (!actualImposterExists) {
                verdictBanner.innerText = `PHANTOM CRITICAL BLUNDER! Everyone was completely Innocent this match. There was no leak, but your own hysteria caused you to exile ${selectedPlayer.name}!`;
            } else {
                verdictBanner.innerText = `CRITICAL MALFUNCTION. You exiled ${selectedPlayer.name}, who was entirely Innocent. The Paradox entity remains hidden within the architecture.`;
            }
        }
    }

    renderFinalReveal();
    switchScreen('results');
}

// --- Final Reveal Panel ---
function renderFinalReveal() {
    const container = document.getElementById('final-reveal-list');
    container.innerHTML = '';

    playerRoles.forEach(player => {
        const div = document.createElement('div');
        
        let roleClass = 'is-innocent';
        let roleTitle = '[Innocent Component]';
        
        if (player.isImposter) {
            roleClass = 'is-imposter';
            roleTitle = '⚡ [THE PARADOX]';
        } else if (player.isParanoiac) {
            roleClass = 'is-paranoiac';
            roleTitle = '👁️ [THE PARANOIAC]';
        } else if (player.isMimic) {
            roleClass = 'is-mimic';
            roleTitle = `🔗 [MIMIC DECREE: ${player.mimicTarget.toUpperCase()}]`;
        }

        const staticLabel = player.isMuted ? ` <span style="color:#ff0055; font-size:0.75rem; font-weight:bold;">[🤐 MUTED FREQUENCY]</span>` : '';
        
        div.className = `reveal-item ${roleClass}`;
        div.innerHTML = `
            <div>
                <strong>${player.name}</strong> ${roleTitle}${staticLabel}
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
    updateStartButtonState();
    switchScreen('setup');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Particle Background ---
function initBackgroundParticles() {
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed; width: ${Math.random() * 4 + 2}px; height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 242, 254, ${Math.random() * 0.3 + 0.1}); box-shadow: 0 0 8px #00f2fe;
            border-radius: 50%; top: ${Math.random() * 100}vh; left: ${Math.random() * 100}vw;
            z-index: -1; pointer-events: none; opacity: ${Math.random()};
        `;
        document.body.appendChild(particle);
        animateParticle(particle);
    }
}

function animateParticle(el) {
    let speedX = (Math.random() - 0.5) * 0.5;
    let speedY = (Math.random() - 0.5) * 0.5;
    function move() {
        let x = parseFloat(el.style.left) + speedX;
        let y = parseFloat(el.style.top) + speedY;
        if (x < 0) x = 100; if (x > 100) x = 0;
        if (y < 0) y = 100; if (y > 100) y = 0;
        el.style.left = x + 'vw'; el.style.top = y + 'vh';
        requestAnimationFrame(move);
    }
    move();
}
document.addEventListener('DOMContentLoaded', initBackgroundParticles);