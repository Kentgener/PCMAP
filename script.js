document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(drop => {
        drop.addEventListener('click', () => {
            drop.classList.toggle('active');
            const content = drop.nextElementSibling;
            content.style.maxHeight = drop.classList.contains('active') ? content.scrollHeight + "px" : "0";
        });
    });

    // Animate on scroll (simple)
    const sections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.animationPlayState = 'paused';
        observer.observe(section);
    });
});
