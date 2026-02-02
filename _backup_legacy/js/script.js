
document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Slight delay for "magnetic" feel on outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Simple Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s ease';
        }, 100 + (index * 200));
    });

    // Parallax Effect
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Parallax Generic
        const parallaxElements = document.querySelectorAll('.parallax-wrapper');
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.1;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });

        // Parallax for hero text
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollY * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrollY / 700);
        }
    });

    // Smooth Scroll for Anchor Links (Native support + offset considerations if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
