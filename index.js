const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Route pour rechercher des films
app.get('/fetch=:id', 
    async (req, res) => {
    const movieId = req.params.id;
    const url = 
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.API_KEY}`;

    try {
        const response = await axios.get(url);
        fs.writeFileSync(`${movieId}.json`, 
            JSON.stringify(response.data));
        res.redirect(`/view?id=${movieId}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching data');
    }
});

// Route pour afficher la page HTML
app.get('/view', (req, res) => {
    res.sendFile
    (path.join(__dirname, 'public', 'index.html'));
});

// Route pour obtenir les données du film
app.get('/data=:id', (req, res) => {
    const filePath = `${__dirname}/${req.params.id}.json`;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(404).send
        ({ error: 'Data not found' });
        res.json(JSON.parse(data));
    });
});

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log
    (`Serveur en cours d'exécution sur le port ${PORT}`);
});