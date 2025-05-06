document.getElementById('search-btn').addEventListener('click', () => {
    const movieId = document.getElementById('movie-id').value;
    fetch(`/fetch=${movieId}`)
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                throw new Error('Erreur lors de la récupération des données');
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById('movie-data').innerText = 'Erreur lors de la récupération des données';
        });
});

// Fonction pour afficher les données du film
function displayMovieData(movie) {
    const container = document.getElementById('movie-data');
    container.innerHTML = `
        <section class="movies-card">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            <h2>${movie.title} (${movie.release_date.split('-')[0]})</h2>
            <p><strong>Overview:</strong> ${movie.overview}</p>
            <p><strong>Genres:</strong> ${movie.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Vote Average:</strong> ${movie.vote_average}</p>
        </section>
    `;
}

// Récupérer les données du film après redirection
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

if (movieId) {
    fetch(`/data=${movieId}`)
        .then(res => res.json())
        .then(data => {
            displayMovieData(data);
        })
        .catch(err => {
            document.getElementById('movie-data').innerText = 'Error loading data';
        });
}
