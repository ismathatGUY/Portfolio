// script.js

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        const sectionIndex = Array.from(section.parentNode.children).indexOf(section);
        const sectionPosition = sectionIndex * 100;
        document.querySelector('.sections-container').style.transform = `translateX(-${sectionPosition}vw)`;
    });
});
