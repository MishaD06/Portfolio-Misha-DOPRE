Site portfolio personnel présentant mon parcours, mes projets et mes compétences en ingénierie informatique.


![HTML](https://img.shields.io/badge/HTML-88.5%25-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-9.5%25-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-2%25-F7DF1E?logo=javascript&logoColor=black)

---

## 🎯 À propos

Portfolio personnel développé dans le cadre de mes études à **CESI Nice** en cycle ingénieur informatique. Ce site présente :

- Mon parcours académique et professionnel
- Mes projets techniques et citoyens
- Mes compétences et technologies maîtrisées
- Mes coordonnées et moyens de contact

Le site est conçu avec une approche **responsive design** et propose un **thème clair/sombre** pour une expérience utilisateur optimale.

---

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Thème clair/sombre** avec persistance via `localStorage`
- **Design responsive** optimisé mobile, tablette et desktop
- **Animations fluides** avec transitions CSS personnalisées
- **Palette de couleurs cohérente** (vert forêt : `#2D6A4F`)

### 🧭 Navigation
- Menu de navigation fixe avec indicateur de page active
- Menu mobile hamburger pour petits écrans
- Smooth scrolling pour les ancres internes

### 📱 Compatibilité
- Compatible avec tous les navigateurs modernes
- Optimisé pour les performances
- Utilisation de polices web (Inter & JetBrains Mono)
- Icons via Font Awesome 6.5

### 🎮 Interactivité
- Démo interactive du **Jeu de la Vie** (Conway's Game of Life)
- Cartes de projets avec liens vers GitHub et démos
- Année dynamique mise à jour automatiquement

---

## 📁 Structure du projet

```
Portfolio-Misha-DOPRE/
│
├── index.html              # Page d'accueil
├── cv.html                 # Parcours académique et professionnel
├── projets.html            # Liste des projets
├── projet-citoyen.html     # Détail du projet citoyen EFS
├── contact.html            # Page de contact
│
├── css/
│   └── style.css           # Styles principaux (variables CSS, composants)
│
├── js/
│   └── script.js           # Interactivité (thème, menu mobile, smooth scroll)
│
├── game-of-life-demo/
│   ├── index.html          # Page de démo du Jeu de la Vie
│   ├── game.js             # Logique du jeu
│   └── patterns.js         # Patterns prédéfinis (glider, spaceship, etc.)
│
├── images/                 # Images et assets du portfolio
│   ├── projects/           # Captures d'écran des projets
│   └── cv/                 # Documents CV (PDF)
│
└── README.md               # Documentation du projet
```

---

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS et Grid/Flexbox
- **JavaScript (ES6+)** - Interactivité côté client

### Polices & Icons
- **Inter** - Police principale (Google Fonts)
- **JetBrains Mono** - Police monospace pour le code
- **Font Awesome 6.5** - Icônes vectorielles

### Hébergement
- **GitHub Pages** - Hébergement statique gratuit

---

## 🚀 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Git (pour cloner le repository)

### Étapes

1. **Cloner le repository**
   ```bash
   git clone https://github.com/MishaD06/Portfolio-Misha-DOPRE.git
   cd Portfolio-Misha-DOPRE
   ```

2. **Ouvrir le site localement**
   
   Ouvrez simplement `index.html` dans votre navigateur, ou utilisez un serveur local :
   
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   ```

3. **Accéder au site**
   
   Ouvrez `http://localhost:8000` dans votre navigateur.

---

## 💻 Utilisation

### Développement local

1. Modifiez les fichiers HTML, CSS ou JS selon vos besoins
2. Actualisez le navigateur pour voir les changements
3. Utilisez les outils de développement du navigateur pour déboguer

### Déploiement sur GitHub Pages

1. Pousser vos changements sur la branche `main` :
   ```bash
   git add .
   git commit -m "Mise à jour du portfolio"
   git push origin main
   ```

2. Activer GitHub Pages dans les paramètres du repository :
   - Settings → Pages
   - Source : Deploy from a branch
   - Branch : `main` / `root`

3. Le site sera accessible à : `https://mishad06.github.io/Portfolio-Misha-DOPRE/`

---

## 📄 Pages du site

### 🏠 Accueil (`index.html`)
Présentation générale avec :
- Introduction et recherche de stage
- Compétences techniques
- Engagement citoyen (lien vers projet EFS)
- Liens vers réseaux professionnels

### 📚 Parcours (`cv.html`)
Timeline académique et expériences :
- Formation à CESI Nice
- Expériences professionnelles
- Certifications et formations
- Compétences techniques détaillées
- CV téléchargeable en PDF

### 💡 Projets (`projets.html`)
Galerie de projets avec :
- Projets académiques (BDD, Jeu de la Vie, IA, etc.)
- Projets personnels
- Liens vers GitHub et démos en ligne
- Technologies utilisées pour chaque projet
- Dates et statuts des projets

### 🌟 Projet Citoyen (`projet-citoyen.html`)
Page dédiée au projet de sensibilisation au don du sang avec l'EFS :
- Contexte et objectifs
- Timeline du projet
- Résultats et impact
- Photos et témoignages

### 📧 Contact (`contact.html`)
Coordonnées et informations de contact :
- Email professionnel
- Téléphone
- LinkedIn et réseaux sociaux
- Disponibilité pour stage (Avril 2026)

### 🎮 Démo Jeu de la Vie (`game-of-life-demo/index.html`)
Simulation interactive du Jeu de la Vie de Conway avec :
- Canvas HTML5 pour le rendu
- Contrôles (play/pause, vitesse, taille de grille)
- Patterns prédéfinis (glider, spaceship, pulsar, etc.)
- Mode dessin libre
- Statistiques en temps réel

---

## 🎨 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `css/style.css` :

```css
:root {
    --accent: #2D6A4F;         /* Couleur principale */
    --accent-light: #40916c;   /* Variante claire */
    --accent-soft: #e9f5ec;    /* Fond clair */
    --bg-primary: #ffffff;     /* Fond principal */
    --text-primary: #18181b;   /* Texte principal */
}

[data-theme="dark"] {
    --accent: #40916c;         /* Couleur principale mode sombre */
    --bg-primary: #0a0a0a;     /* Fond principal mode sombre */
    --text-primary: #f5f5f5;   /* Texte principal mode sombre */
}
```

### Changer les polices

Modifiez les imports dans le `<head>` des fichiers HTML :

```html
<link href="https://fonts.googleapis.com/css2?family=VotrePolice&display=swap" rel="stylesheet">
```

Et mettez à jour les variables CSS :

```css
:root {
    --font-sans: 'VotrePolice', sans-serif;
    --font-mono: 'VotrePoliceMonospace', monospace;
}
```

### Ajouter un projet

1. Ouvrez `projets.html`
2. Dupliquez une section `.project-card`
3. Modifiez le contenu :
   ```html
   <div class="project-card">
       <div class="project-header">
           <h3 class="project-title">Titre du projet</h3>
           <span class="project-date">Date</span>
       </div>
       <p class="project-subtitle">Description courte</p>
       <div class="project-description">
           <p>Description détaillée...</p>
       </div>
       <div class="project-buttons">
           <a href="lien-github" class="btn-project">
               <i class="fab fa-github"></i> GitHub
           </a>
       </div>
   </div>
   ```
4. Ajoutez les technologies utilisées avec des badges

### Modifier les informations de contact

Éditez `contact.html` pour mettre à jour :
- Email
- Téléphone
- Liens LinkedIn, GitHub
- Disponibilité et recherche de stage