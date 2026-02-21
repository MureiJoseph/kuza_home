function showTMBPage() {
    var mainContent = document.getElementById('mainContent');
    var tmbPage = document.getElementById('tmbPage');
    var tmbBackBtn = document.querySelector('.tmb-back-btn');
    if (mainContent) mainContent.classList.add('hidden');
    if (tmbPage) tmbPage.classList.add('active');
    if (tmbBackBtn) tmbBackBtn.classList.add('visible');
    window.scrollTo(0, 0);
}

function hideTMBPage() {
    var mainContent = document.getElementById('mainContent');
    var tmbPage = document.getElementById('tmbPage');
    var tmbBackBtn = document.querySelector('.tmb-back-btn');
    if (mainContent) mainContent.classList.remove('hidden');
    if (tmbPage) tmbPage.classList.remove('active');
    if (tmbBackBtn) tmbBackBtn.classList.remove('visible');
}
// ═══════════════════════════════════════
// CUSTOM CURSOR
// ═══════════════════════════════════════
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
const mouseGlow = document.querySelector('.mouse-glow');

if (cursor && cursorDot) {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Move cursor circle
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        // Move cursor dot
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    if (mouseGlow) {
        const animateGlow = () => {
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;
            mouseGlow.style.left = glowX + 'px';
            mouseGlow.style.top = glowY + 'px';

            // Always ensure glow is visible while moving
            if (mouseGlow.style.opacity !== '1') {
                mouseGlow.style.opacity = '1';
            }

            requestAnimationFrame(animateGlow);
        };
        animateGlow();
    }

    // Hide cursor on mouse leave
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
        if (mouseGlow) mouseGlow.style.opacity = '0';
    });

    // Show cursor on mouse enter
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
        if (mouseGlow) mouseGlow.style.opacity = '1';
    });
}

// ═══════════════════════════════════════
// PARALLAX SHAPES
// ═══════════════════════════════════════
const shapes = document.querySelectorAll('.shape[data-speed]');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    shapes.forEach(shape => {
        const speed = parseFloat(shape.dataset.speed);
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ═══════════════════════════════════════
// NAVIGATION SCROLL
// ═══════════════════════════════════════
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 100);
});

// ═══════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ═══════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    // Toggle menu on hamburger click
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        // Update ARIA state
        mobileToggle.setAttribute('aria-expanded', isExpanded);
        mobileToggle.setAttribute('aria-label', isExpanded ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.setAttribute('aria-label', 'Open navigation menu');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.setAttribute('aria-label', 'Open navigation menu');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

// ═══════════════════════════════════════
// 3D CARD TILT
// ═══════════════════════════════════════
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});
