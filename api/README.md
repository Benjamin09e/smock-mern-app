# API

## Description
api est une application Node.js pour la gestion des produits d'une boutique. Ce projet utilise Express pour le serveur web, Mongoose pour la gestion de la base de données MongoDB, et divers autres outils pour améliorer le développement.

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Dépendances](#dépendances)
- [Scripts](#scripts)
- [Contributeurs](#contributeurs)
- [Licence](#licence)

## Installation
Pour installer et configurer l'application, suivez ces étapes :

1. Installez les dépendances :
    ```
    npm install
    ```

2. Créez un fichier `.env` à la racine du projet pour les variables d'environnement:
    ```
    PORT=5001
    MONGO_URL = ...
    ```

## Utilisation
Pour démarrer l'application en mode développement, utilisez la commande suivante :
    ```
    npm start
    ```

## Dépendances
Voici les principales dépendances utilisées dans ce projet :

    cors : Middleware pour activer CORS.
    dotenv : Gestion des variables d'environnement.
    express : Framework web pour Node.js.
    mongoose : ODM pour MongoDB.
    nodemon : Outil pour redémarrer automatiquement le serveur en développement

## Scripts
Les scripts disponibles dans ce projet sont :

    start : Lance l'application en mode développement avec nodemon.

## Contributeurs
    Benjamin - Auteur principal


## Licence
    Ce projet est sous licence ISC
