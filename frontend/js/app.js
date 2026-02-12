// KUZA HOME - MAIN JAVASCRIPT

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

if (cursor && cursorDot) {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
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
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 100);
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
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (nav && !nav.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

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

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});
