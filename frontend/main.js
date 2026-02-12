function showTMBPage() {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('tmbPage').classList.add('active');
    window.scrollTo(0, 0);
}

function hideTMBPage() {
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('tmbPage').classList.remove('active');
}

// CUSTOM CURSOR LOGIC - DISAPPEARS ON MOBILE
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

// Check if device is desktop (not touch and screen > 1024px)
const isDesktop = window.matchMedia("(pointer: fine)").matches && window.innerWidth > 1024;

if (isDesktop && cursor && cursorDot) {
    // Show cursor elements
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
}

// PARALLAX SHAPES
const shapes = document.querySelectorAll('.shape');
if (isDesktop) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX - window.innerWidth / 2) * 0.02;
        const y = (e.clientY - window.innerHeight / 2) * 0.02;
        shapes.forEach(shape => {
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// NAV SCROLL
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 100);
    }
});
