class SiteSidebar extends HTMLElement {
    connectedCallback() {
        // --- ADAPTIVE STYLE INJECTION ---
        if (!document.getElementById("sidebar-generated-styles")) {
            const styleTag = document.createElement("style");
            styleTag.id = "sidebar-generated-styles";
            styleTag.innerHTML = `
                site-sidebar {
                    --sb-width: var(--sidebar-width, 280px);
                    --sb-bg-main: var(--bg-main, #060713);
                    --sb-neon-blue: var(--neon-blue, #00f0ff);
                    --sb-neon-purple: var(--neon-purple, #9d4edd);
                    --sb-text-secondary: var(--text-secondary, #b9bed3);
                    --sb-border: var(--border-color, rgba(255, 255, 255, 0.05));
                }

                .sidebar {
                    width: var(--sb-width);
                    background: rgba(10, 11, 22, 0.85); 
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-right: 1px solid var(--sb-border);
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    z-index: 100;
                    box-shadow: 5px 0 25px rgba(0, 0, 0, 0.5);
                }

                .sidebar-brand {
                    padding: 30px 24px;
                    font-size: 1.3rem;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    color: var(--text-primary, #ffffff);
                    text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
                    border-bottom: 1px solid var(--sb-border);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .sidebar-brand i { 
                    color: var(--sb-neon-blue); 
                    animation: sbPulse 2s infinite; 
                }

                .progress-container { 
                    padding: 15px 24px; 
                    border-bottom: 1px solid var(--sb-border); 
                    background: rgba(255, 255, 255, 0.02); 
                }

                .progress-label { 
                    font-size: 0.75rem; 
                    text-transform: uppercase; 
                    letter-spacing: 1px; 
                    color: var(--sb-text-secondary); 
                    margin-bottom: 6px; 
                    display: flex; 
                    justify-content: space-between; 
                }

                .progress-track { 
                    width: 100%; 
                    height: 6px; 
                    background: rgba(255, 255, 255, 0.1); 
                    border-radius: 10px; 
                    overflow: hidden; 
                    box-shadow: inset 0 1px 3px rgba(0,0,0,0.5); 
                }

                .progress-bar { 
                    width: 0%; 
                    height: 100%; 
                    background: linear-gradient(90deg, var(--sb-neon-blue), var(--sb-neon-purple)); 
                    box-shadow: 0 0 8px var(--sb-neon-blue); 
                    border-radius: 10px; 
                    transition: width 0.5s ease; 
                }

                .sidebar-menu { 
                    list-style: none; 
                    padding: 20px 0; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 6px; 
                    overflow-y: auto; 
                }

                .sidebar-menu li a { 
                    display: flex; 
                    align-items: center; 
                    gap: 14px; 
                    padding: 12px 24px; 
                    color: var(--sb-text-secondary); 
                    text-decoration: none; 
                    font-size: 0.95rem; 
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
                    border-left: 4px solid transparent; 
                }

                .sidebar-menu li a i { 
                    width: 20px; 
                    text-align: center; 
                    transition: transform 0.3s ease; 
                }

                .sidebar-menu li a:hover { 
                    color: #ffffff; 
                    background: rgba(255, 255, 255, 0.03); 
                    border-left-color: rgba(0, 240, 255, 0.4); 
                }

                .sidebar-menu li a:hover i { 
                    transform: scale(1.15); 
                    color: var(--sb-neon-blue); 
                }

                .sidebar-menu li a.active { 
                    color: var(--sb-neon-blue); 
                    background: linear-gradient(90deg, rgba(0, 240, 255, 0.08), transparent); 
                    border-left-color: var(--sb-neon-blue); 
                    font-weight: 600; 
                    text-shadow: 0 0 8px rgba(0, 240, 255, 0.3); 
                }

                @keyframes sbPulse { 
                    0% { opacity: 0.7; transform: scale(1); } 
                    50% { opacity: 1; transform: scale(1.05); } 
                    100% { opacity: 0.7; transform: scale(1); } 
                }

                @media (max-width: 992px) {
                    .sidebar { 
                        width: 100%; 
                        position: relative; 
                        border-right: none; 
                        border-bottom: 1px solid var(--sb-border); 
                    }
                }
            `;
            document.head.appendChild(styleTag);
        }

        // Render Sidebar Structural Markup Layout
        this.innerHTML = `
        <nav class="sidebar">
            <div class="sidebar-brand">
                <i class="fa-solid fa-code"></i> SWE Portal
            </div>
            <div class="progress-container">
                <div class="progress-label">
                    <span>Study Progress</span>
                    <span id="progress-text">0%</span>
                </div>
                <div class="progress-track">
                    <div class="progress-bar" id="study-progress"></div>
                </div>
                <div style="text-align: right; margin-top: 6px;">
                    <button id="reset-progress-btn" style="background: transparent; border: none; color: #ff007f; font-size: 0.7rem; cursor: pointer; text-decoration: underline; opacity: 0.6; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'">
                        <i class="fa-solid fa-rotate-left"></i> Reset Tracker
                    </button>
                </div>
            </div>
            <ul class="sidebar-menu">
                <li><a href="index.html" id="nav-home"><i class="fa-solid fa-house"></i> Home Overview</a></li>
                <li><a href="week1.html" id="nav-week1"><i class="fa-solid fa-cube"></i> Week 1: Core Blueprint</a></li>
                <li><a href="week2.html" id="nav-week2"><i class="fa-solid fa-sitemap"></i> Week 2: Inheritance</a></li>
                <li><a href="week3.html" id="nav-week3"><i class="fa-solid fa-arrows-split-up-and-left"></i> Week 3: Generalisation</a></li>
                <li><a href="week4.html" id="nav-week4"><i class="fa-solid fa-crosshairs"></i> Week 4: Target Systems</a></li>
                <li><a href="week5.html" id="nav-week5"><i class="fa-solid fa-database"></i> Week 5: Database & ERDs</a></li>
                <li><a href="week6.html" id="nav-week6"><i class="fa-solid fa-vector-square"></i> OOP Code: The Four Pillars</a></li>
                <li><a href="week8.html" id="nav-week8"><i class="fa-solid fa-vial-circle-check"></i> Week 8: Testing Frameworks</a></li>
                <li><a href="https://mridul-0812.github.io/Practise-OOP/" id="nav-playground" target="_blank"><i class="fa-solid fa-circle-question"></i> Further practice on OOP</a></li>
            </ul>
        </nav>
        `;

        this.setActivePage();
        this.startTimeTracking();
    }

    setActivePage() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const links = {
            "index.html": "nav-home",
            "week1.html": "nav-week1",
            "week2.html": "nav-week2",
            "week3.html": "nav-week3",
            "week4.html": "nav-week4",
            "week5.html": "nav-week5",
            "week6.html": "nav-week6",
            "week8.html": "nav-week8"
        };
        const activeId = links[currentPage];
        if (activeId) {
            const element = this.querySelector(`#${activeId}`);
            if (element) element.classList.add("active");
        }
    }

    startTimeTracking() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        // --- 1. TRACK PAGE ACTIVATION EVENT (CLICKS) ---
        // Using sessionStorage so refreshing the current tab doesn't falsely multiply click actions
        if (!sessionStorage.getItem(`logged_${currentPage}`)) {
            let clickLog = JSON.parse(localStorage.getItem("oop_portal_click_log")) || {};
            clickLog[currentPage] = (clickLog[currentPage] || 0) + 1;
            localStorage.setItem("oop_portal_click_log", JSON.stringify(clickLog));
            sessionStorage.setItem(`logged_${currentPage}`, "true");
        }

        // Catch redirect dispatches to the external sandbox link
        const playgroundBtn = this.querySelector("#nav-playground");
        if (playgroundBtn) {
            playgroundBtn.addEventListener("click", () => {
                let clickLog = JSON.parse(localStorage.getItem("oop_portal_click_log")) || {};
                clickLog["practice_playground"] = (clickLog["practice_playground"] || 0) + 1;
                localStorage.setItem("oop_portal_click_log", JSON.stringify(clickLog));
            });
        }

        // --- 2. LIVE VERTICAL VIEW DEPTH MONITOR (SCROLL) ---
        const logScrollDepth = () => {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight - winHeight;
            if (docHeight > 0) {
                const scrollPercent = Math.round((window.scrollY / docHeight) * 100);
                let scrollLog = JSON.parse(localStorage.getItem("oop_portal_scroll_log")) || {};
                
                // Retain only the peak scroll boundary reached
                if (!scrollLog[currentPage] || scrollPercent > scrollLog[currentPage]) {
                    scrollLog[currentPage] = Math.min(scrollPercent, 100);
                    localStorage.setItem("oop_portal_scroll_log", JSON.stringify(scrollLog));
                }
            }
        };
        window.addEventListener("scroll", logScrollDepth);
        // Run once on load to capture shorter pages that don't require scrolling
        logScrollDepth();

        // --- 3. DURATION METRIC TICKER (TIME ON PAGE) ---
        const targetMinutes = 30; 
        let currentMinutes = parseFloat(localStorage.getItem("oop_study_minutes")) || 0;
        let secondAccumulator = 0;
        
        const updateProgressBar = () => {
            let progressPercent = Math.min((currentMinutes / targetMinutes) * 100, 100);
            const bar = this.querySelector("#study-progress");
            const text = this.querySelector("#progress-text");
            if (bar && text) {
                bar.style.width = `${progressPercent}%`;
                text.innerText = `${Math.round(progressPercent)}%`;
            }
        };

        updateProgressBar();

        const trackingInterval = setInterval(() => {
            // Update the granular timeline registry every second
            let timeLog = JSON.parse(localStorage.getItem("oop_portal_time_log")) || {};
            timeLog[currentPage] = (timeLog[currentPage] || 0) + 1;
            localStorage.setItem("oop_portal_time_log", JSON.stringify(timeLog));

            // Sync with global macro progress bar every 60 seconds
            secondAccumulator++;
            if (secondAccumulator >= 60) {
                currentMinutes += 1;
                localStorage.setItem("oop_study_minutes", currentMinutes);
                updateProgressBar();
                secondAccumulator = 0;
            }
        }, 1000);

        // --- 4. DATA PURGE RESET INTERFACES ---
        const resetBtn = this.querySelector("#reset-progress-btn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                if (window.confirm("Are you sure you want to clear your study bar progress?")) {
                    clearInterval(trackingInterval);
                    localStorage.removeItem("oop_study_minutes");
                    currentMinutes = 0;
                    updateProgressBar();
                    window.location.reload();
                }
            });
        }
    }
}

customElements.define('site-sidebar', SiteSidebar);