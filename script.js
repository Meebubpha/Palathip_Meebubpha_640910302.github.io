document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section');
    const images = document.querySelectorAll('.home-image, .projects-image, .contact-image');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        const activeSection = document.getElementById(sectionId);
        activeSection.style.display = 'block';
        setTimeout(() => {
            activeSection.classList.add('active');
        }, 10);
    }

    images.forEach(image => {
        if (image.complete) {
            image.classList.add('loaded');
        } else {
            image.onload = () => {
                image.classList.add('loaded');
            };
        }
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    showSection('home');
});
