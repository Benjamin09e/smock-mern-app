# Products

## Description
products est une application React pour la gestion et l'affichage de produits. Ce projet utilise plusieurs bibliothèques et outils populaires pour le développement de front-end, y compris React Router pour la navigation, Axios pour les requêtes HTTP, et React Icons pour les icônes.

## Table des matières
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts](#scripts)
- [Dépendances](#dépendances)
- [Configuration ESLint](#configuration-eslint)
- [Compatibilité Navigateurs](#compatibilité-navigateurs)
- [Licence](#licence)

## Installation
Pour installer et configurer l'application, suivez ces étapes :

1. Installez les dépendances :
    ```
    npm install
    ```
2. Créez un fichier `.env` à la racine du projet pour les variables d'environnement:
    ```
    REACT_APP_YOUR_API_URL=http://localhost:5001/api/
    ```

## Utilisation
Pour démarrer l'application en mode développement, utilisez la commande suivante :
    ```
    npm start
    ```

## Scripts
Les scripts disponibles dans ce projet sont :

    start : Lance l'application en mode développement.
    build : Crée une version de production de l'application.
    test : Lance les tests de l'application.
    eject : Éjecte la configuration par défaut de Create React App.


## Dépendances
Voici les principales dépendances utilisées dans ce projet :

@testing-library/jest-dom : Extensions pour Jest pour tester le DOM.
@testing-library/react : Outils de test pour les composants React.
@testing-library/user-event : API pour interagir avec les éléments du DOM lors des tests.
axios : Client HTTP basé sur les promesses.
react : Bibliothèque pour construire des interfaces utilisateur.
react-dom : Fournit des méthodes spécifiques au DOM pour React.
react-icons : Inclut des icônes populaires pour React.
react-router-dom : Routage pour les applications React.
react-scripts : Scripts et configurations pour Create React App.
web-vitals : Bibliothèque pour mesurer les métriques essentielles du web.


## Configuration
Le projet utilise ESLint pour maintenir la qualité du code. La configuration étend les paramètres par défaut de Create React App et Jest :

```
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}
```

## Compatibilité Navigateurs
Le projet est configuré pour prendre en charge les navigateurs suivants :

```
Production :

0.2%

not dead
not op_mini all
Développement :

last 1 chrome version
last 1 firefox version
last 1 safari version
```

## Licence
Ce projet est privé et n'a pas de licence ouverte