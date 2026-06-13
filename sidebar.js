class SiteSidebar extends HTMLElement {
    connectedCallback() {
        // --- ADAPTIVE STYLE INJECTION ---
        // This injects styles safely scoped strictly to our component and layouts
        if (!document.getElementById("sidebar-generated-styles")) {
            const styleTag = document.createElement("style");
            styleTag.id = "sidebar-generated-styles";
            styleTag.innerHTML = `
                /* We scope structural variables with smart fallbacks if the host page doesn't define them */
                site-sidebar {
                    --sb-width: var(--sidebar-width, 280px);
                    --sb-bg-main: var(--bg-main, #060713);
                    --sb-neon-blue: var(--neon-blue, #00f0ff);
                    --sb-neon-purple: var(--neon-purple, #9d4edd);
                    --sb-text-secondary: var(--text-secondary, #b9bed3);
                    --sb-border: var(--border-color, rgba(255, 255, 255, 0.05));
                }

                /* Layout isolation structures */
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

                /* Scoped Tracker Layout Styles */
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

                /* Sidebar Navigation List Layouts */
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

                /* Responsive Layout Management Rules */
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
                <li><a href="https://mridul-0812.github.io/Practise-OOP/"><i class="fa-solid fa-circle-question"></i> Further practice on OOP</a></li>
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
        const targetMinutes = 30; 
        let currentMinutes = parseFloat(localStorage.getItem("oop_study_minutes")) || 0;
        let trackingInterval;
        
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

        const startInterval = () => {
            return setInterval(() => {
                currentMinutes += 1;
                localStorage.setItem("oop_study_minutes", currentMinutes);
                updateProgressBar();
            }, 60000);
        };

        trackingInterval = startInterval();

        const resetBtn = this.querySelector("#reset-progress-btn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                if (window.confirm("Are you sure?")) {
                    if (window.confirm("Are you really sure? This cannot be undone!")) {
                        clearInterval(trackingInterval);
                        localStorage.removeItem("oop_study_minutes");
                        currentMinutes = 0;
                        updateProgressBar();
                        trackingInterval = startInterval();
                    }
                }
            });
        }
    }
}

customElements.define('site-sidebar', SiteSidebar);