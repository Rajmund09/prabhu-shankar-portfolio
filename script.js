// Simple hover effect
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.transform += ' scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
    });
});

// Add scroll indicator HTML to body
document.addEventListener('DOMContentLoaded', function () {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = `
        <div class="scroll-text">SCROLL</div>
        <div class="scroll-line"></div>
        <div class="scroll-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    document.body.appendChild(scrollIndicator);

    // Hide scroll indicator when user starts scrolling
    let scrollTimer;
    window.addEventListener('scroll', function () {
        scrollIndicator.style.opacity = '0';
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            scrollIndicator.style.opacity = '0.7';
        }, 2000);
    });
});

// Right-click prevention with enhanced inspect card
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showInspectCard();
});

// Keydown prevention for F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function (e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
        (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
        showInspectCard();
    }
});

// Show inspect card with animation
function showInspectCard() {
    const inspectCard = document.getElementById('inspectCard');
    if (inspectCard) {
        inspectCard.classList.add('show');
        // Auto hide after 5 seconds
        setTimeout(() => {
            closeInspectCard();
        }, 5000);
    }
}

// Close inspect card
function closeInspectCard() {
    const inspectCard = document.getElementById('inspectCard');
    if (inspectCard) {
        inspectCard.classList.remove('show');
    }
}

// Enhanced mouse parallax for animated profile card
const card = document.getElementById("profileCard");
const frame = card.querySelector(".profile-frame");
const tags = card.querySelectorAll(".profile-tag");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

const MAX_ROTATE = 13;
const EASE = 0.10;

if (card) {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = ((x - centerX) / centerX) * MAX_ROTATE;
        targetY = ((y - centerY) / centerY) * MAX_ROTATE;
    });

    card.addEventListener("mouseleave", () => {
        targetX = 0;
        targetY = 0;
    });

    function animateCard() {
        currentX += (targetX - currentX) * EASE;
        currentY += (targetY - currentY) * EASE;

        card.style.transform = `
            perspective(1000px)
            rotateY(${currentX}deg)
            rotateX(${-currentY}deg)
        `;

        // subtle inner depth
        frame.style.transform = `translateZ(20px)`;

        tags.forEach((tag, i) => {
            tag.style.transform = `
                translate(${currentX * 1.5}px, ${currentY * 1.5}px)
                translateZ(${30 + i * 8}px)
            `;
        });

        requestAnimationFrame(animateCard);
    }

    animateCard();
}

// GSAP ScrollSmoother (Optional - for premium smoothness)
function initGSAPSmoothScroll() {
    // Check if ScrollSmoother is available
    if (typeof gsap !== 'undefined' && gsap.registerPlugin && ScrollSmoother) {
        gsap.registerPlugin(ScrollSmoother);

        // Create smooth scrolling effect
        ScrollSmoother.create({
            smooth: 1.5, // Adjust smoothness (1-3 recommended)
            effects: true, // Enable parallax effects
            smoothTouch: 0.1, // Mobile smoothness
            normalizeScroll: true, // Normalize scroll across devices
            ignoreMobileResize: true, // Better mobile handling
        });
    }
}

// Call this in your page load function
window.addEventListener('load', function () {
    // ... your existing load code ...

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Optional: Uncomment for GSAP smooth scroll
    // initGSAPSmoothScroll();
});
// Client review data
const reviews = [
    {
        name: "Rahul Sharma",
        role: "Business Owner",
        company: "Sharma Enterprises",
        rating: "★★★★★",
        review: "Excellent service! Team delivered ahead of schedule.",
        date: "Mar 2023",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Priya Patel",
        role: "Marketing Director",
        company: "Urban Style",
        rating: "★★★★★",
        review: "Social media engagement increased by 75%!",
        date: "Feb 2023",
        photo: "https://images.unsplash.com/photo-1494790108755-2616b786d4d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Arjun Singh",
        role: "CEO",
        company: "TechNova",
        rating: "★★★★☆",
        review: "Professional team with great technical expertise.",
        date: "Apr 2023",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Ananya Reddy",
        role: "Product Manager",
        company: "FinTech Labs",
        rating: "★★★★★",
        review: "Mobile app exceeded expectations. Highly recommended!",
        date: "Jan 2023",
        photo: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Vikram Mehta",
        role: "Operations Head",
        company: "Global Retail",
        rating: "★★★★☆",
        review: "Reduced costs by 30%. Great value for money.",
        date: "May 2023",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Sneha Kapoor",
        role: "Founder",
        company: "Wellness Hub",
        rating: "★★★★★",
        review: "Beautiful website design that represents our brand.",
        date: "Jun 2023",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Rohan Verma",
        role: "CTO",
        company: "Data Insights",
        rating: "★★★★★",
        review: "Exceptional support. Crucial for decision making.",
        date: "Jul 2023",
        photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    },
    {
        name: "Neha Gupta",
        role: "HR Director",
        company: "Corp Solutions",
        rating: "★★★★☆",
        review: "Streamlined our hiring process. Professional team.",
        date: "Aug 2023",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        verified: true
    }
];

// Function to create a review card
function createCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const verifiedBadge = review.verified ?
        '<span class="verified-badge">✓ Verified</span>' :
        '';

    card.innerHTML = `
        <div class="card-header">
            <img src="${review.photo}" alt="${review.name}" class="client-photo" loading="lazy">
            <div class="client-info">
                <div class="client-name">${review.name}</div>
                <div class="client-role">${review.role}</div>
            </div>
        </div>
        <div class="rating">${review.rating}</div>
        <div class="review-text">"${review.review}"</div>
        <div class="review-meta">
            <div class="review-date">${review.date}</div>
            ${verifiedBadge}
        </div>
        <div class="quote-icon">"</div>
    `;
    return card;
}

// Add review cards to the page
function addReviewCards() {
    const topCarousel = document.getElementById('topReviews');
    const bottomCarousel = document.getElementById('bottomReviews');

    if (topCarousel && bottomCarousel) {
        // Add cards to top carousel (moving left to right)
        for (let i = 0; i < 4; i++) {
            reviews.forEach(review => {
                topCarousel.appendChild(createCard(review));
            });
        }

        // Add cards to bottom carousel (moving right to left)
        for (let i = 0; i < 4; i++) {
            reviews.slice().reverse().forEach(review => {
                bottomCarousel.appendChild(createCard(review));
            });
        }
    }
}

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Page loading animation
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-wrapper');
    gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        onComplete: function () {
            loader.style.display = 'none';
            initAnimations();
            addReviewCards();

            // Initialize counters
            animateCounters();

            // Add CSS custom properties for profile card
            updateProfileCardSize();
            window.addEventListener('resize', updateProfileCardSize);

            // Initialize resume modal
            initResumeModal();
        }
    });
});

// Update profile card size based on viewport
function updateProfileCardSize() {
    const vw = window.innerWidth;
    const profileCard = document.querySelector('.animated-profile-card');

    if (profileCard && vw < 576) {
        // On mobile, adjust tag positions
        const tags = document.querySelectorAll('.profile-tag');
        tags.forEach(tag => {
            if (tag.classList.contains('profile-tag-left') ||
                tag.classList.contains('profile-tag-right')) {
                tag.style.display = vw < 400 ? 'none' : 'block';
            }
        });
    }
}

// Initialize Resume Modal
function initResumeModal() {
    const downloadBtn = document.getElementById('downloadResumeBtn');
    const resumeModal = document.getElementById('resumeModal');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const closeResumeModalBtn = document.getElementById('closeResumeModal');
    const printOption = document.querySelector('.print-option');

    if (!downloadBtn || !resumeModal) return;

    // Open modal when download button is clicked
    downloadBtn.addEventListener('click', function (e) {
        e.preventDefault();
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal when close buttons are clicked
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (closeResumeModalBtn) {
        closeResumeModalBtn.addEventListener('click', function () {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    resumeModal.addEventListener('click', function (e) {
        if (e.target === resumeModal) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle print option
    if (printOption) {
        printOption.addEventListener('click', function () {
            if (window.confirm('Open print dialog for resume?')) {
                window.print();
            }
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Track download clicks (optional analytics)
    const downloadLinks = resumeModal.querySelectorAll('.download-option-card[href]');
    downloadLinks.forEach(link => {
        link.addEventListener('click', function () {
            const format = this.getAttribute('data-format');
            console.log(`Resume download initiated: ${format} format`);

            // Close modal after a brief delay
            setTimeout(() => {
                resumeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }, 300);

            // Optional: Show success notification
            setTimeout(() => {
                showDownloadSuccess(format);
            }, 500);
        });
    });

    // Add touch event listeners for better mobile experience
    // Prevent modal from closing on option click (for mobile)
    const options = resumeModal.querySelectorAll('.download-option-card');
    options.forEach(option => {
        option.addEventListener('touchstart', function (e) {
            e.stopPropagation();
        }, { passive: true });
    });

    // Close modal on swipe down (for mobile)
    let startY = 0;
    resumeModal.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    }, { passive: true });

    resumeModal.addEventListener('touchmove', function (e) {
        if (!resumeModal.classList.contains('active')) return;

        const currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        // If swiping down more than 100px, close modal
        if (diff > 100) {
            resumeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }, { passive: true });

    // Handle orientation change
    window.addEventListener('orientationchange', function () {
        // Re-center modal on orientation change
        if (resumeModal.classList.contains('active')) {
            setTimeout(() => {
                resumeModal.style.display = 'none';
                resumeModal.offsetHeight; // Trigger reflow
                resumeModal.style.display = 'flex';
            }, 300);
        }
    });
}

// Optional: Show download success notification
function showDownloadSuccess(format) {
    const successMsg = document.createElement('div');
    successMsg.className = 'download-success-notification';
    successMsg.innerHTML = `
        <i class="fas fa-check"></i>
        <span>Resume downloaded as ${format.toUpperCase()}</span>
    `;
    document.body.appendChild(successMsg);

    // Add styles for notification
    if (!document.querySelector('#downloadSuccessStyles')) {
        const style = document.createElement('style');
        style.id = 'downloadSuccessStyles';
        style.textContent = `
            .download-success-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(0, 255, 136, 0.9);
                color: #000;
                padding: 12px 20px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 10px;
                z-index: 99999;
                animation: slideInRight 0.3s ease;
                box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
                font-weight: 500;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .download-success-notification {
                    top: 10px;
                    right: 10px;
                    left: 10px;
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => successMsg.remove(), 3000);
}

function initAnimations() {
    // Header scroll effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hero section animation
    const heroTl = gsap.timeline();
    heroTl.from(".hero-text h1", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power3.out"
    })
        .from(".hero-text p", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.5")
        .from(".hero-buttons", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        }, "-=0.5")
        .from(".animated-profile-card", {
            duration: 1.5,
            scale: 0.8,
            opacity: 0,
            ease: "back.out(1.7)"
        }, "-=1");

    // About section animation
    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".stat", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Reviews section animation
    gsap.from(".client-reviews .section-title", {
        scrollTrigger: {
            trigger: ".client-reviews",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    });

    // Skills section animation
    gsap.from(".toggle-container", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out"
    });

    // Projects section animation
    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Socials section animation
    gsap.from(".social-item", {
        scrollTrigger: {
            trigger: "#socials",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 0.4,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Contact section animation
    gsap.from(".contact-info", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power2.out"
    });

    // Footer animation
    gsap.from(".footer-content", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close menu if open
                document.getElementById('menu-icon').checked = false;
            }
        });
    });
}

// Animated counters with GSAP
function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = { value: 0 };

        gsap.to(count, {
            value: target,
            duration: 2,
            scrollTrigger: {
                trigger: counter,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            onUpdate: () => {
                counter.textContent = Math.ceil(count.value);
            }
        });
    });
}

// Toggle functionality
let state = 0;
const btn = document.getElementById("toggleBtn");

if (btn) {
    btn.addEventListener("click", () => {
        state = !state;

        if (state) {
            btn.classList.remove("rotate-left", "left");
            btn.classList.add("rotate-right", "right");
        } else {
            btn.classList.remove("rotate-right", "right");
            btn.classList.add("rotate-left", "left");
        }
    });
}

// Video functionality - Fixed for all devices
const videoBtn = document.getElementById('videoBtn');
const videoModal = document.querySelector('.video-modal');
const modalVideo = document.getElementById('modalVideo');
const closeVideoBtn = document.getElementById('closeVideo');

if (videoBtn && videoModal && modalVideo && closeVideoBtn) {
    // Store original body styles to restore later
    let originalBodyOverflow = '';
    let originalHtmlOverflow = '';
    let originalBodyHeight = '';

    videoBtn.addEventListener('click', function () {
        // Store original values
        originalBodyOverflow = document.body.style.overflow;
        originalHtmlOverflow = document.documentElement.style.overflow;
        originalBodyHeight = document.body.style.height;

        // Show modal
        videoModal.classList.add('active');

        // Disable scrolling on body AND html
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Fix for iOS Safari
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';

        // Store scroll position for iOS
        const scrollY = window.scrollY;
        document.body.dataset.scrollY = scrollY;

        setTimeout(() => {
            modalVideo.play().catch(e => {
                console.log('Video play failed:', e);
                // Close modal if video fails to play
                closeVideo();
                alert('Unable to play video. Please make sure the video file exists at "/phv.mp4"');
            });
        }, 300);
    });

    // Close video function
    function closeVideo() {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.currentTime = 0;

        // Restore scrolling
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;

        // Restore body position and height
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.height = originalBodyHeight;

        // Restore scroll position for iOS
        if (document.body.dataset.scrollY) {
            window.scrollTo(0, parseInt(document.body.dataset.scrollY, 10));
            delete document.body.dataset.scrollY;
        }
    }

    closeVideoBtn.addEventListener('click', closeVideo);

    videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) {
            closeVideo();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideo();
        }
    });

    modalVideo.addEventListener('ended', function () {
        setTimeout(() => {
            closeVideo();
        }, 1000);
    });

    // Handle page visibility changes (when user switches tabs)
    document.addEventListener('visibilitychange', function () {
        if (document.hidden && videoModal.classList.contains('active')) {
            modalVideo.pause();
        }
    });

    // Handle page unload
    window.addEventListener('beforeunload', function () {
        if (videoModal.classList.contains('active')) {
            closeVideo();
        }
    });
}

// Optional: Add a CSS fix for the modal itself
// Add this CSS to your styles

// Message sent animation
function initMessageAnimation() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.querySelector('.success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show success animation
            successMessage.classList.add('active');

            // Reset form
            contactForm.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 3000);
        });
    }
}

// Close menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-icon').checked = false;
    });
});

// Add hover effect to loop items
document.querySelectorAll('.loop-item').forEach(item => {
    item.addEventListener('mouseenter', function () {
        gsap.to(this, { scale: 1.05, duration: 0.3 });
    });
    item.addEventListener('mouseleave', function () {
        gsap.to(this, { scale: 1, duration: 0.3 });
    });
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        gsap.to(this, { y: -10, duration: 0.3 });
    });
    card.addEventListener('mouseleave', function () {
        gsap.to(this, { y: 0, duration: 0.3 });
    });
});

// Initialize message animation
initMessageAnimation();

// Add click event to close inspect card when clicking outside
const inspectCard = document.getElementById('inspectCard');
if (inspectCard) {
    inspectCard.addEventListener('click', function (e) {
        if (e.target === this) {
            closeInspectCard();
        }
    });
}

// Performance optimizations
window.addEventListener('load', () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Prevent text selection on some elements
document.addEventListener('selectstart', function (e) {
    if (e.target.classList.contains('prevent-select')) {
        e.preventDefault();
    }
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // In a real application, you would send this data to a server
            // For now, we'll simulate a successful submission
            simulateFormSubmission(name, email, subject, message);
        });
    }

    // WhatsApp click tracking
    const whatsappLinks = document.querySelectorAll('[href*="whatsapp"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function () {
            // You can add analytics here
            console.log('WhatsApp link clicked');
        });
    });

    // Email click tracking
    const emailLinks = document.querySelectorAll('[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Email link clicked');
        });
    });

    // Location click tracking
    const locationLinks = document.querySelectorAll('[href*="maps.google"]');
    locationLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Location link clicked');
        });
    });
});

function simulateFormSubmission(name, email, subject, message) {
    // Show loading state
    const submitBtn = document.querySelector('#contactForm .glow-on-hover');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call delay
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

        // Reset form
        document.getElementById('contactForm').reset();

        // Scroll to success message
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }, 1500);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification styles dynamically
if (!document.querySelector('#notificationStyles')) {
    const notificationStyles = document.createElement('style');
    notificationStyles.id = 'notificationStyles';
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 15px 20px;
            color: white;
            z-index: 99999;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
            max-width: 350px;
            border-left: 4px solid;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification.success {
            border-left-color: #00cec9;
        }
        
        .notification.error {
            border-left-color: #ff6b6b;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification i {
            font-size: 1.2rem;
        }
        
        .notification.success i {
            color: #00cec9;
        }
        
        .notification.error i {
            color: #ff6b6b;
        }
        
        .notification span {
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        @media (max-width: 768px) {
            .notification {
                top: 10px;
                right: 10px;
                left: 10px;
                max-width: none;
                transform: translateY(-100%);
            }
            
            .notification.show {
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(notificationStyles);
}
// Back to Top Button - Simple and reliable
document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.setAttribute('title', 'Back to top');

    // Add to body
    document.body.appendChild(backToTopBtn);

    // Show/hide based on scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Back to top button initialized');
});
document.querySelector('.print-option').addEventListener('click', () => {
    window.open(
        'assets/resume/Prabhu_Shankar_Mund_Resume.pdf',
        '_blank'
    ).print();
});