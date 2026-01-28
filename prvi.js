// Professional Project Data
const projectsData = [
    {
        id: 1,
        title: "AI Digital Branding Platform",
        description: "Enterprise-grade animated branding platform with GSAP animations, AI content optimization, and responsive design.",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "AI"],
        category: "ai",
        type: "Branding Platform",
        icon: "fas fa-robot",
        demand: "high",
        liveLink: "https://neurobrand-site.vercel.app/",
        codeLink: "https://github.com/Rajmund09/neurobrand-site"
    },
    {
        id: 2,
        title: "Intelligent Voice Assistant",
        description: "Advanced voice assistant with speech recognition, task automation, and natural language processing capabilities.",
        tags: ["Python", "Speech API", "Automation", "AI"],
        category: "ai",
        type: "AI Assistant",
        icon: "fas fa-microphone-alt",
        demand: "high",
        liveLink: "https://github.com/Rajmund09/THING-Voice-Assistant",
        codeLink: "https://github.com/Rajmund09/THING-Voice-Assistant"
    },
    {
        id: 3,
        title: "AI Chatbot System",
        description: "Natural language processing chatbot for customer support with sentiment analysis and contextual responses.",
        tags: ["Python", "NLP", "TensorFlow", "AI/ML"],
        category: "ai",
        type: "AI Solution",
        icon: "fas fa-comments",
        demand: "high",
        liveLink: "https://github.com/Rajmund09/whatsapp-ai-auto-reply-bot",
        codeLink: "https://github.com/Rajmund09/whatsapp-ai-auto-reply-bot"
    },
    {
        id: 4,
        title: "Productivity Tracker Pro",
        description: "Full-stack application for tracking learning progress with data visualization and analytics dashboard.",
        tags: ["Python", "Flask", "Pandas", "Chart.js"],
        category: "web",
        type: "Web Application",
        icon: "fas fa-chart-line",
        demand: "high",
        liveLink: "https://github.com/Rajmund09/SkillTrack.git",
        codeLink: "https://github.com/Rajmund09/SkillTrack.git"
    },
    {
        id: 5,
        title: "Insurance Platform",
        description: "Professional insurance solution with quote calculation, claims management, and responsive design.",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        category: "web",
        type: "Client Project",
        icon: "fas fa-shield-alt",
        demand: "high",
        liveLink: "https://mund-global-insurance-website.vercel.app/",
        codeLink: "https://github.com/Rajmund09/mund-global-insurance-website"
    },

    {
        id: 6,
        title: "Professional Portfolio",
        description: "Interactive portfolio with modern animations, responsive design, and project showcase.",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        category: "web",
        type: "Portfolio",
        icon: "fas fa-briefcase",
        demand: "high",
        liveLink: "index.html",
        codeLink: "https://github.com/Rajmund09"
    },
    {
        id: 7,
        title: "Learning Platform",
        description: "Educational platform with glassmorphism UI, interactive elements, and course management.",
        tags: ["HTML5", "CSS3", "JavaScript", "Education"],
        category: "web",
        type: "Web Platform",
        icon: "fas fa-graduation-cap",
        demand: "high",
        liveLink: "https://course-website-smoky.vercel.app/",
        codeLink: "https://github.com/Rajmund09/course_website"
    },
    {
        id: 8,
        title: "Banking System",
        description: "Secure banking management application with transaction processing and admin dashboard.",
        tags: ["Java", "JDBC", "MySQL", "Swing"],
        category: "java",
        type: "Desktop App",
        icon: "fas fa-university",
        demand: "medium",
        liveLink: "https://github.com/Rajmund09/Mini-Banking-System",
        codeLink: "https://github.com/Rajmund09/Mini-Banking-System"
    },
    {
        id: 9,
        title: "Automation Script",
        description: "Web automation for tracking and notifications with scheduled execution capabilities.",
        tags: ["Python", "Automation", "Selenium", "Web Scraping"],
        category: "python",
        type: "Automation Tool",
        icon: "fas fa-robot",
        demand: "medium",
        liveLink: "#",
        codeLink: "https://github.com/Rajmund09"
    },
    {
        id: 10,
        title: "Competition Manager",
        description: "Tournament management system with real-time updates and participant tracking.",
        tags: ["HTML5", "CSS3", "JavaScript", "Full-stack"],
        category: "web",
        type: "Web Application",
        icon: "fas fa-trophy",
        demand: "medium",
        liveLink: "#",
        codeLink: "https://github.com/Rajmund09"
    },
    {
        id: 11,
        title: "3D Interactive Experience",
        description: "Creative 3D environment with modeling, lighting, and interactive elements.",
        tags: ["Blender", "Unity", "3D Design", "Animation"],
        category: "game",
        type: "3D Project",
        icon: "fas fa-gamepad",
        demand: "medium",
        liveLink: "#",
        codeLink: "https://github.com/Rajmund09"
    },
    {
        id: 12,
        title: "Streaming Service Clone",
        description: "Responsive interface clone with video browsing and playback features.",
        tags: ["HTML5", "CSS3", "JavaScript", "UI Clone"],
        category: "web",
        type: "Interface Clone",
        icon: "fas fa-film",
        demand: "medium",
        liveLink: "#",
        codeLink: "https://github.com/Rajmund09"
    },
    {
        id: 13,
        title: "Utility Management System",
        description: "C++ based system for consumption calculation and billing management.",
        tags: ["C++", "Data Structures", "OOP", "Console"],
        category: "mini",
        type: "System Tool",
        icon: "fas fa-bolt",
        demand: "low",
        liveLink: "https://github.com/Rajmund09/Electricity-Billing-System",
        codeLink: "https://github.com/Rajmund09/Electricity-Billing-System"
    },
    {
        id: 14,
        title: "Interactive Game Challenge",
        description: "Classic game implementation with AI opponent and scoring system.",
        tags: ["Python", "Game Dev", "Logic", "Console"],
        category: "python",
        type: "Game Project",
        icon: "fas fa-gamepad",
        demand: "low",
        liveLink: "https://github.com/Rajmund09/snake-water-gun-python",
        codeLink: "https://github.com/Rajmund09/snake-water-gun-python"
    },
    {
        id: 15,
        title: "Number Guessing Game",
        description: "Interactive guessing game with multiple difficulty levels and scoring.",
        tags: ["Python", "Game Dev", "Logic", "Console"],
        category: "python",
        type: "Learning Project",
        icon: "fas fa-brain",
        demand: "low",
        liveLink: "https://github.com/Rajmund09/Guess-The-Number",
        codeLink: "https://github.com/Rajmund09/Guess-The-Number"
    },
    {
        id: 16,
        title: "UI Component Library",
        description: "Collection of modern UI components with responsive design patterns.",
        tags: ["HTML5", "CSS3", "UI/UX", "Design System"],
        category: "web",
        type: "Design Library",
        icon: "fas fa-layer-group",
        demand: "low",
        liveLink: "https://aesthetic-card-ui.vercel.app/",
        codeLink: "https://github.com/Rajmund09/aesthetic-card-ui9"
    },
    {
        id: 17,
        title: "Physics Animation",
        description: "CSS-based physics animation demonstrating realistic motion principles.",
        tags: ["HTML5", "CSS3", "Animation", "Physics"],
        category: "web",
        type: "Animation Demo",
        icon: "fas fa-basketball-ball",
        demand: "low",
        liveLink: "https://smooth-bounce-animation.vercel.app/",
        codeLink: "https://github.com/Rajmund09/smooth-bounce-animation"
    },
    {
        id: 18,
        title: "Software Interface Clone",
        description: "Responsive clone of professional software download interface.",
        tags: ["HTML5", "CSS3", "Responsive", "UI Clone"],
        category: "web",
        type: "Interface Project",
        icon: "fas fa-code",
        demand: "low",
        liveLink: "https://text-editor-download-ui.vercel.app/",
        codeLink: "https://github.com/Rajmund09/text-editor-download-ui"
    },
    {
        id: 19,
        title: "Community Platform",
        description: "Interactive platform for technology community engagement.",
        tags: ["HTML5", "CSS3", "Community", "Web App"],
        category: "web",
        type: "Community Platform",
        icon: "fas fa-users",
        demand: "low",
        liveLink: "https://algoarena-connect-landing.vercel.app/",
        codeLink: "https://github.com/Rajmund09/Algoarena-connect-landing"
    },
    {
        id: 21,
        title: "Elegant TODO Pro",
        description: "A modern, feature-rich TODO application with glassmorphism UI, priority management, focus mode, and localStorage persistence.",
        tags: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Glassmorphism",
            "LocalStorage",
            "Responsive UI"
        ],
        category: "web",
        type: "Productivity Web App",
        icon: "fas fa-list-check",
        demand: "high",
        liveLink: "https://your-live-demo-link.vercel.app/",
        codeLink: "https://github.com/Rajmund09/elegant-todo-pro"
    },
    {
        id: 6,
        title: "Card Builder Pro",
        description: "A feature-rich, web-based card design platform that enables users to create fully customized cards with real-time previews, theme selection, image uploads, and responsive UI.",
        tags: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Responsive Design"],
        category: "web",
        type: "Personal Project",
        icon: "fas fa-id-card",
        demand: "high",
        liveLink: "https://your-live-link-here.vercel.app/",
        codeLink: "https://github.com/Rajmund09/card-builder-pro"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            initPage();
        }, 800);
    }, 1500);
});

function initPage() {
    // Initialize file interaction
    initFileInteraction();

    // Initialize filters
    initFilters();

    // Add keyboard navigation
    initKeyboardNavigation();

    // Initial render of projects
    renderProjects(projectsData);

    // Initialize intersection observer for animations
    initIntersectionObserver();

    // Initialize smooth scroll behavior
    initSmoothScroll();

    // Initialize touch device detection
    initTouchOptimization();
}

// Realistic File Folder Interaction with Close Functionality
function initFileInteraction() {
    const openFile = document.getElementById('openFile');
    const clickIndicator = document.getElementById('clickIndicator');
    const projectsSection = document.getElementById('projects');
    const closeFolderBtn = document.getElementById('closeFolderBtn');
    const instructionText = document.getElementById('instructionText');
    const folderStatus = document.getElementById('folderStatus');
    const realisticFolder = document.getElementById('realisticFolder');
    const folderIcon = document.getElementById('folderIcon');
    const folderName = document.getElementById('folderName');
    const folderTab = document.querySelector('.folder-tab');

    let fileOpened = false;

    const openFileAction = () => {
        if (fileOpened) return;
        fileOpened = true;

        // Update instruction text
        instructionText.textContent = "Project Archive Opened";
        instructionText.style.background = 'var(--gradient-accent)';

        // Update folder status
        folderStatus.textContent = "Projects are now visible below";
        folderStatus.style.color = 'var(--accent)';
        folderStatus.style.fontWeight = '600';

        // Enhanced folder opening animation
        // Hide click indicator with animation
        clickIndicator.style.opacity = '0';
        clickIndicator.style.transform = 'scale(0) rotate(90deg)';
        clickIndicator.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

        // Folder opening animation
        openFile.style.pointerEvents = 'none';

        // Animate folder opening
        realisticFolder.style.animation = 'folderOpen 0.8s ease forwards';
        realisticFolder.style.transform = 'translateY(-8px) scale(1.05)';
        realisticFolder.style.boxShadow = 'var(--shadow-hover)';
        realisticFolder.style.borderColor = 'var(--primary)';

        // Animate tab
        folderTab.style.background = 'linear-gradient(to bottom, var(--primary), var(--primary-dark))';
        folderTab.style.borderColor = 'var(--primary)';

        // Animate icon and text
        folderIcon.style.transform = 'scale(1.3)';
        folderIcon.style.color = 'var(--primary)';
        folderName.textContent = "PROJECTS OPENED";
        folderName.style.color = 'var(--primary)';

        // Show close button
        setTimeout(() => {
            closeFolderBtn.classList.add('show');
            closeFolderBtn.focus();
        }, 800);

        // Show projects section with delay
        setTimeout(() => {
            projectsSection.classList.add('active');

            // Smooth scroll to projects
            setTimeout(() => {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Focus on projects section for accessibility
                projectsSection.setAttribute('tabindex', '-1');
                projectsSection.focus();

                // Announce for screen readers
                announceToScreenReader('Projects section opened successfully. Press Escape or click Close Folder to close.');
            }, 500);
        }, 1000);
    };

    const closeFileAction = () => {
        if (!fileOpened) return;
        fileOpened = false;

        // Update instruction text
        instructionText.textContent = "Click to Open Project Archive";
        instructionText.style.background = 'var(--gradient)';

        // Update folder status
        folderStatus.textContent = "Interactive file folder with project showcase";
        folderStatus.style.color = 'var(--text-muted)';
        folderStatus.style.fontWeight = 'normal';

        // Show click indicator again
        clickIndicator.style.opacity = '1';
        clickIndicator.style.transform = 'scale(1) rotate(0deg)';
        clickIndicator.style.animation = 'subtlePulse 3s infinite ease-in-out';

        // Reset folder animation - Use folderClose animation
        realisticFolder.style.animation = 'folderClose 0.6s ease forwards';
        realisticFolder.style.transform = 'translateY(0) scale(1)';
        realisticFolder.style.boxShadow = 'var(--shadow-xl)';
        realisticFolder.style.borderColor = '#4a5568';

        // Reset tab
        folderTab.style.background = 'linear-gradient(to bottom, #4a5568, #2d3748)';
        folderTab.style.borderColor = '#4a5568';

        // Reset icon and text
        folderIcon.style.transform = 'scale(1)';
        folderIcon.style.color = 'var(--primary-light)';
        folderName.textContent = "PROJECTS";
        folderName.style.color = 'var(--text-light)';

        // Hide close button
        closeFolderBtn.classList.remove('show');

        // Hide projects section
        projectsSection.classList.remove('active');

        // Re-enable click events
        openFile.style.pointerEvents = 'auto';

        // Focus back on the folder for accessibility
        openFile.focus();

        // Announce for screen readers
        announceToScreenReader('Folder closed. Click folder to open again.');

        // Smooth scroll back to folder
        setTimeout(() => {
            openFile.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    };

    // Click interaction for opening
    openFile.addEventListener('click', openFileAction);

    // Keyboard interaction for opening
    openFile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFileAction();
        }
    });

    // Click interaction for close button
    closeFolderBtn.addEventListener('click', closeFileAction);

    // Keyboard interaction for close button
    closeFolderBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeFileAction();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fileOpened) {
            e.preventDefault();
            closeFileAction();
        }
    });

    // Click indicator interaction
    clickIndicator.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!fileOpened) {
            openFileAction();
        }
    });

    clickIndicator.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!fileOpened) {
                openFileAction();
            }
        }
    });

    // Hover effects
    openFile.addEventListener('mouseenter', () => {
        if (!fileOpened) {
            realisticFolder.style.transform = 'translateY(-4px)';
            clickIndicator.style.transform = 'scale(1.1)';
        }
    });

    openFile.addEventListener('mouseleave', () => {
        if (!fileOpened) {
            realisticFolder.style.transform = 'translateY(0)';
            clickIndicator.style.transform = 'scale(1)';
        }
    });

    // Touch device optimization
    let touchStartTime;
    openFile.addEventListener('touchstart', (e) => {
        touchStartTime = Date.now();
        if (!fileOpened) {
            openFile.style.transform = 'scale(0.98)';
        }
    });

    openFile.addEventListener('touchend', (e) => {
        e.preventDefault();
        const touchDuration = Date.now() - touchStartTime;
        if (touchDuration < 500 && !fileOpened) {
            openFile.style.transform = 'scale(1)';
            openFileAction();
        }
    });
}

// Render Professional Projects
function renderProjects(projects) {
    const container = document.getElementById('projectsGrid');
    container.innerHTML = '';

    if (projects.length === 0) {
        container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
                        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                        <h3 style="color: var(--text-light); margin-bottom: 0.5rem; font-size: 1.2rem;">No projects found</h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Try adjusting your filters</p>
                    </div>
                `;
        return;
    }

    projects.forEach((project, index) => {
        const card = document.createElement('article');
        card.className = `project-card`;
        card.style.animationDelay = `${index * 0.05}s`;
        card.tabIndex = 0;
        card.setAttribute('aria-label', `${project.title} - ${project.type}`);
        card.setAttribute('role', 'article');

        // Get demand color
        let demandColor = '#10b981'; // High
        if (project.demand === 'medium') demandColor = '#f59e0b';
        if (project.demand === 'low') demandColor = '#ef4444';

        card.innerHTML = `
                    <div class="project-header">
                        <span class="project-badge">${project.type}</span>
                        <span class="project-demand" style="color: ${demandColor}; border-color: ${demandColor}40; background: ${demandColor}15;">
                            <i class="fas fa-chart-line" aria-hidden="true"></i>
                            ${project.demand.toUpperCase()} DEMAND
                        </span>
                    </div>
                    <div class="project-preview" aria-hidden="true">
                        <i class="${project.icon} project-icon"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags" aria-label="Technologies used">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.liveLink}" class="project-link link-view" target="_blank" 
                               aria-label="View live demo of ${project.title}">
                                <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                                <span>Live Demo</span>
                            </a>
                            <a href="${project.codeLink}" class="project-link link-code" target="_blank"
                               aria-label="View source code of ${project.title}">
                                <i class="fab fa-github" aria-hidden="true"></i>
                                <span>Source Code</span>
                            </a>
                        </div>
                    </div>
                `;

        // Add keyboard navigation for cards
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const link = card.querySelector('.link-view');
                if (link) link.click();
            }
        });

        // Add touch feedback
        card.addEventListener('touchstart', () => {
            card.style.transform = 'scale(0.98)';
        });

        card.addEventListener('touchend', () => {
            card.style.transform = '';
        });

        container.appendChild(card);
    });
}

// Filter System
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const footerLinks = document.querySelectorAll('.footer-links a[data-filter]');

    const filterHandler = (filter) => {
        // Update active button with animation
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.focus();
        }

        // Filter projects
        let filteredProjects;

        if (filter === 'all') {
            filteredProjects = projectsData;
        } else if (['high', 'medium', 'low'].includes(filter)) {
            filteredProjects = projectsData.filter(p => p.demand === filter);
        } else {
            filteredProjects = projectsData.filter(p => p.category === filter);
        }

        // Animate filter change
        const container = document.getElementById('projectsGrid');
        container.style.opacity = '0.5';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            renderProjects(filteredProjects);

            // Animate in new cards
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 50);
        }, 300);

        // Announce filter change for screen readers
        announceToScreenReader(`Showing ${filteredProjects.length} ${filter} projects`);

        // Smooth scroll on mobile
        if (window.innerWidth < 768) {
            setTimeout(() => {
                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300);
        }

        // Update URL hash without page jump
        history.pushState(null, null, `#filter-${filter}`);
    };

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => filterHandler(btn.dataset.filter));
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                filterHandler(btn.dataset.filter);
            }
        });
    });

    // Footer filter links
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterHandler(link.dataset.filter);
        });
    });

    // Check URL hash on load
    const hash = window.location.hash;
    if (hash) {
        const filter = hash.replace('#filter-', '');
        if (['all', 'high', 'medium', 'low', 'ai', 'web', 'python', 'java'].includes(filter)) {
            setTimeout(() => filterHandler(filter), 1000);
        }
    }
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animationPlayState = 'running';
                }, index * 100);
            }
        });
    }, observerOptions);

    const trendObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, observerOptions);

    // Initialize trend cards
    document.querySelectorAll('.trend-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        trendObserver.observe(card);
    });

    // Re-observe project cards when they change
    const projectsContainer = document.getElementById('projectsGrid');
    const projectsObserver = new MutationObserver(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            cardObserver.observe(card);
        });
    });

    projectsObserver.observe(projectsContainer, { childList: true });
}

// Keyboard Navigation
function initKeyboardNavigation() {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#projects';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Skip to main content';
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('projects').focus();
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Focus the target for accessibility
                setTimeout(() => {
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                }, 1000);
            }
        });
    });
}

// Touch Optimization
function initTouchOptimization() {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.body.classList.add('touch-device');

        // Increase hit areas for touch
        const touchElements = document.querySelectorAll('.filter-btn, .project-link, .social-link, .back-btn, .back-btn-large, .tag');
        touchElements.forEach(el => {
            el.style.minHeight = '44px';
            if (!el.classList.contains('tag')) {
                el.style.minWidth = '44px';
            }
        });

        // Make cards more touch-friendly
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.cursor = 'pointer';
        });
    }
}

// Screen Reader Announcements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

// Handle window resize for responsiveness
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);

        // Recalculate grid columns on resize
        const container = document.getElementById('projectsGrid');
        if (container) {
            container.style.transition = 'none';
            setTimeout(() => {
                container.style.transition = '';
            }, 50);
        }
    }, 250);
});

// Initialize viewport height variable
document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
});
