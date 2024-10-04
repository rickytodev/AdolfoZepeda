

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('switch').addEventListener('change', () => {
    if (document.body.classList.contains('white')) {
        document.body.classList.remove('white');
    } else {
        document.body.classList.add('white');
    }
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Agregar evento de clic al hamburguesa
hamburger.addEventListener('click', () => {
    nav.classList.toggle('show'); // Alterna la clase 'show' en el menú
});

