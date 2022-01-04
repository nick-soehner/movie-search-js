const myKey = apiKey.key;
const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${myKey}&page=1`;
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = `https://api.themoviedb.org/3/search/movie?&api_key=${myKey}f&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const btn = document.getElementById("btn");

const showMovies = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            let movie = data.results[0];
            data.results.forEach((element) => {
                const card = document.createElement("div");
                const cardFront = document.createElement("div");
                const cardBack = document.createElement("div");
                const img = document.createElement("img");
                const title = document.createElement("h2");
                const text = document.createElement("p");

                img.src = imgPath + element.poster_path;
                title.innerHTML = `${element.title}`; /* change movie to element */
                text.innerHTML = `${element.overview}`;
                card.classList.add("card");
                cardFront.classList.add("card-front", "card-face");
                cardBack.classList.add("card-back", "card-face");

                main.appendChild(card);

                /* (card) */
                card.appendChild(cardFront);
                card.appendChild(cardBack);

                /* (front card) */
                cardFront.appendChild(img);

                /* (back card) */
                cardBack.append(title, text);
            });
        });
};
showMovies(apiUrl);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = "";
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(searchApi + searchTerm);
    }
});
