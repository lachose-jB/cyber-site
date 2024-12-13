
# [<"img src="readme-assets/logo.png"> React Portfolio](https://ryanbalieiro.github.io/react-portfolio-template/) par Ryan Balieiro

Un modèle de portfolio élégant et futuriste pour développeurs – construit avec **React** et **Bootstrap 5**.

![alt tag1](readme-assets/promo.png)

## Fonctionnalités clés

- Léger et entièrement réactif.
- S'adapte parfaitement aux écrans mobiles.
- Support multilingue inclus.
- Options de thème clair et sombre disponibles.
- Une variété de composants pour mettre en valeur votre expérience professionnelle, éducation, compétences, portfolio, et plus encore.
- Utilise **Vite** pour l'empaquetage.
- Envoi d'e-mails avec **EmailJS** – aucun backend nécessaire !

## [Aperçu en direct](https://ryanbalieiro.github.io/react-portfolio-template/)

Découvrez la version en direct du modèle déployée **[ici sur GitHub Pages](https://ryanbalieiro.github.io/react-portfolio-template/)**.

---

### 1. Mise en page de base

La mise en page utilise une vue centrale fixe avec une barre latérale à gauche, s'adaptant parfaitement à diverses résolutions d'écran, du 4:3 à l'ultra-large.

![alt tag1](readme-assets/demo.png)

---

### 2. Captures d'écran de bureau

La vue principale effectue une transition fluide lors de la sélection d'une nouvelle page depuis la barre latérale, créant un effet de changement de page. La barre latérale est également basculable pour agrandir l'espace de contenu.

![alt tag1](readme-assets/desktop.png)

---

### 3. Captures d'écran mobiles

Sur mobile, le layout regroupe les sections du portfolio en catégories et se transforme en une interface à onglets avec une navigation inférieure.

![alt tag1](readme-assets/mobile.png)

---

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/ryanbalieiro/react-portfolio-template
```

1. Accédez au répertoire racine du projet et installez toutes les dépendances avec npm

```bash
npm install
```

1. Lancez le projet en mode développement

```bash
npm run dev
```

1. Pour désactiver temporairement l'animation de préchargement lors des ajustements de thème, modifiez le champ suivant dans `public/data/settings.json`

```json
"preloader": {
    "enabled": false,
    (...)
}
```

---

## Personnalisation du modèle

### 1. Modification du contenu

Tout le contenu du portfolio, y compris les textes et les images, se trouve dans le dossier `public` à la racine. Ce dossier contient deux répertoires principaux :

- `public/data` ➔ Contient les fichiers JSON avec les textes et configurations générales.
- `public/images` ➔ Contient toutes les images utilisées dans le portfolio.

Pour personnaliser le contenu, il suffit de modifier les fichiers JSON et de remplacer les images.

### 2. Personnalisation des couleurs

Vous pouvez ajuster facilement les couleurs du thème en modifiant les variables SCSS dans `src/styles/_variables.scss`. Ce fichier contient les couleurs statiques ainsi que les palettes pour les thèmes clair et sombre.

### 3. Ajout et suppression de langues

Pour ajouter ou supprimer des langues, modifiez le champ `supportedLanguages` dans `public/data/settings.json` :

```json
{
    "supportedLanguages": [
        {
            "name": "Français",
            "id": "fr",
            "flagUrl": "images/flags/fr.png",
            "default": true
        },

        {
            "name": "English",
            "id": "en",
            "flagUrl": "images/flags/en.png"
        }
    ]
}
```

### 4. Ajout, suppression et réorganisation des sections

Dans `public/data/structure.json`, vous pouvez ajouter ou retirer des sections en modifiant le tableau `sections` :

```json
{
    "sections": [
        {
            "id": "about",
            "categoryId": "home",
            "jsonPath": "/data/sections/cover.json",
            "faIcon": "fa-solid fa-address-card"
        }
    ]
}
```

---

## Déploiement

Dans `vite.config.js`, définissez le répertoire de base pour le déploiement :

```js
export default defineConfig({
  base: '/react-portfolio-template/',
  plugins: [react()],
})
```

Pour compiler le projet en production :

```bash
npm run build
```

---

## À propos

Ce modèle a été créé et est maintenu par **[Ryan Balieiro](https://ryanbalieiro.com/)**.

Il est basé sur **[React](https://reactjs.org/)** et **[Bootstrap](https://getbootstrap.com/)**.

---

## Licence

Code publié sous licence [MIT](https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE). N'hésitez pas à le modifier et à l'adapter à vos besoins.

Si vous aimez ce modèle, n'oubliez pas de lui attribuer une ⭐ ! :)
