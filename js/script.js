// Gestion thème clair/sombre
const themeSwitch = document.querySelector('.theme-switch');
const lightIcon = document.querySelector('.theme-switch .fa-sun, .fa-sun');
const darkIcon = document.querySelector('.theme-switch .fa-moon, .fa-moon');
const htmlElement = document.documentElement;

// Fonction pour mettre à jour un href avec le paramètre ?theme=
function updateHrefWithTheme(urlStr, theme) {
    if (!urlStr) return urlStr;
    if (
        urlStr.startsWith('http://') || 
        urlStr.startsWith('https://') || 
        urlStr.startsWith('mailto:') || 
        urlStr.startsWith('tel:') || 
        urlStr.startsWith('javascript:') || 
        urlStr.startsWith('#') || 
        urlStr.endsWith('.pdf')
    ) {
        return urlStr;
    }
    
    const hashIndex = urlStr.indexOf('#');
    const hash = hashIndex !== -1 ? urlStr.slice(hashIndex) : '';
    let base = hashIndex !== -1 ? urlStr.slice(0, hashIndex) : urlStr;
    
    const searchIndex = base.indexOf('?');
    if (searchIndex !== -1) {
        const pathname = base.slice(0, searchIndex);
        const search = base.slice(searchIndex);
        const params = new URLSearchParams(search);
        params.set('theme', theme);
        base = `${pathname}?${params.toString()}`;
    } else {
        base = `${base}?theme=${theme}`;
    }
    return `${base}${hash}`;
}

// Fonction pour synchroniser tous les liens internes de la page
function syncInternalLinks(theme) {
    document.querySelectorAll('a[href]').forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = updateHrefWithTheme(currentHref, theme);
        if (newHref !== currentHref) {
            link.setAttribute('href', newHref);
        }
    });
}

// Fonction pour appliquer le thème
function applyTheme(theme, save = true) {
    const isDark = theme === 'dark';
    const effectiveTheme = isDark ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', effectiveTheme);
    
    if (save) {
        // 1. LocalStorage
        try {
            localStorage.setItem('theme', effectiveTheme);
        } catch (e) {}
        
        // 2. window.name (clé pour Firefox en protocole local file://)
        try {
            window.name = JSON.stringify({ theme: effectiveTheme });
        } catch (e) {}
        
        // 3. Mise à jour de l'URL courante dans la barre d'adresse
        try {
            if (window.history && window.history.replaceState) {
                const currentUrl = new URL(window.location.href);
                currentUrl.searchParams.set('theme', effectiveTheme);
                window.history.replaceState(null, '', currentUrl.toString());
            }
        } catch (e) {}
    }
    
    // Mise à jour de tous les liens de navigation de la page
    syncInternalLinks(effectiveTheme);
    
    // Mise à jour des icônes
    if (lightIcon) {
        lightIcon.classList.toggle('active', !isDark);
    }
    if (darkIcon) {
        darkIcon.classList.toggle('active', isDark);
    }
}

// Déterminer le thème initial avec chaîne de secours
function getPreferredTheme() {
    // 1. Paramètre URL ?theme=
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlTheme = urlParams.get('theme');
        if (urlTheme === 'dark' || urlTheme === 'light') return urlTheme;
    } catch (e) {}
    
    // 2. Mémoire d'onglet window.name (permet le passage entre fichiers file:// sous Firefox)
    try {
        if (window.name) {
            const data = JSON.parse(window.name);
            if (data && (data.theme === 'dark' || data.theme === 'light')) {
                return data.theme;
            }
        }
    } catch (e) {}
    
    // 3. LocalStorage
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') return saved;
    } catch (e) {}
    
    // 4. Préférence système du navigateur / OS
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

// Initialisation au chargement
const initialTheme = htmlElement.getAttribute('data-theme') || getPreferredTheme();
applyTheme(initialTheme, true);

// Capture des clics sur les liens pour garantir la transmission du thème
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    const current = htmlElement.getAttribute('data-theme') || 'light';
    const updated = updateHrefWithTheme(href, current);
    if (updated !== href) {
        link.setAttribute('href', updated);
    }
}, true);

// Event listener pour le bouton toggle
if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        const current = htmlElement.getAttribute('data-theme');
        const nextTheme = current === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
    });
}

// Synchronisation entre onglets ouverts (Chrome & environnements web)
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        const syncedTheme = e.newValue || getPreferredTheme();
        applyTheme(syncedTheme, false);
    }
});

// Écoute des préférences système en temps réel si aucun choix explicite n'a été fixé
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        try {
            if (!localStorage.getItem('theme') && !new URLSearchParams(window.location.search).get('theme')) {
                applyTheme(e.matches ? 'dark' : 'light', false);
            }
        } catch (err) {}
    });
}

// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

// scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        try {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } catch (err) {}
    });
});

// année dynamique
document.addEventListener('DOMContentLoaded', () => {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
});