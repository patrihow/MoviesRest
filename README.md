# TP 1 — Création d’une mini-application Node.js utilisant une API publique

J'ai développé une mini-application web avec **Node.js** et **Express**, en utilisant une API publique de films.

J’ai choisi l’API de [The Movie Database (TMDB)](https://developer.themoviedb.org/reference/changes-movie-list), car elle permet d’effectuer des requêtes dynamiques basées sur des paramètres (ID de film, nom, etc.).

---

## 🛠 Fonctionnalités de l’application

L'application permet de :

1. Faire une requête dynamique à une API publique avec l'ID du film.
2. Sauvegarder les données obtenues dans un fichier `.json`.
3. Cacher la clé API dans un fichier `.env`.
4. Afficher les données dans une interface HTML.

---

## ⚙️ Structure des routes Express

### `/fetch/:id`

* Envoie une requête GET à l'API de TMDB avec l’ID fourni.
* Sauvegarde la réponse dans un fichier `.json`.
* Redirige vers la route `/view?id=xxx` pour afficher les résultats dans une page HTML.

### `/data/:id`

* Lit les données enregistrées dans le fichier `.json` correspondant.
* Retourne les données au format JSON pour être utilisées par le frontend.

### `/view`

* Page HTML dynamique (`index.html`) qui utilise JavaScript pour aller chercher les données depuis `/data/:id`.
* Affiche les informations clés du film dans le DOM.
* Stylisée avec un fichier CSS simple.

## ▶️ Démarrer le serveur

```bash
npm start
```

