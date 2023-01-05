const API_KEY = '085482ff232e707906780be8effbd33a';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;
const IMAGEPATH = 'https://image.tmdb.org/t/p/w500';
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

function showMovies(url) {
    fetch(url)
    .then(res => res.json())
    .then(function(data) {
        console.log(data);
        data.results.forEach(element => {
            const el = document.createElement('div');
            const image = document.createElement('img');
            const text = document.createElement('h2');

            text.innerHTML = `${element.title}`;
            image.src = IMAGEPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            main.appendChild(el);
        })
    });
}

showMovies(apiUrl);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        search.value = '';
    }
})
