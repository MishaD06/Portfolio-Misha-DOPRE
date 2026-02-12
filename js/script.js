// ===== GESTION DU THÈME CLAIR/SOMBRE =====
const themeSwitch = document.querySelector('.theme-switch');
const lightIcon = document.querySelector('.fa-sun');
const darkIcon = document.querySelector('.fa-moon');
const htmlElement = document.documentElement;

// Fonction pour définir le thème
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        lightIcon.classList.remove('active');
        darkIcon.classList.add('active');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkIcon.classList.remove('active');
        lightIcon.classList.add('active');
    }
}

// Charger le thème sauvegardé ou utiliser light par défaut
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Event listener pour le switch
if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANNÉE DYNAMIQUE =====
document.addEventListener('DOMContentLoaded', () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});