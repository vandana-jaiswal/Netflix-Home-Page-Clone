// api key from TMDB

const api = "api_key=4ec590464744195701a56f9d3ac717a1";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w500"; //you can change "w185" to your preference


// requests for movies data

const requests = {

    fetchTopRated: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchThrillerMovies: `${base_url}/discover/movie?${api}&with_genres=53`,
    fetchSciFiMovies: `${base_url}/discover/movie?${api}&with_genres=878`,
    fetchKidsFamily: `${base_url}/discover/movie?${api}&with_genres=10751`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
    fetchCrimeSuspense: `${base_url}/discover/movie?${api}&with_genres=80`
};
//used to truncate the string

function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
//Banner Movies 

fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())



    .then((data) => {

        //after every refresh , movie will change

        const setMovie = 
            data.results[Math.floor(Math.random() * data.results.length - 1)];



            var banner = document.getElementById("banner");
            var bannner_title = document.getElementById("banner__title");
            var banner__desc = document.getElementById("banner__description");


            banner.style.backgroundImage = 
                "url(" + banner_url + setMovie.backdrop_path + ")";
            banner__desc.innerText = truncate(setMovie.overview, 150);
            bannner_title.innerText = setMovie.name;
    });


    //Top rated 
        fetch(requests.fetchTopRated)
            .then((res) => res.json())


            .then((data) => {
                const headrow = document.getElementById("headrow");
                const row = document.createElement("div");
                row.clasName = "row";

                headrow.appendChild(row);


                const title = document.createElement("h2");
                title.className = "row__title";
                title.innerText = " Top rated";
                row.appendChild(title);


                const row_posters = document.createElement("div");
                row_posters.className = "row__posters";
                row.appendChild(row_posters);


                data.results.forEach((movie) => {
                    console.log(movie);
                    const poster = document.createElement("img");
                    poster.className = "row__posterLarge";
                    var s2 = movie.id;

                    poster.id = s2;
                    poster.src =  img_url + movie.poster_path;
                    row_posters.appendChild(poster);
                });
            });

    //Comedy Movies
        fetch(requests.fetchComedyMovies)
            .then((res) => res.json())

            .then((data) => {
                const headrow = document.getElementById("headrow");
                const row = document.createElement("div");
                row.className = "row";
                headrow.appendChild(row);


                const title = document.createElement("h2");
                title.className = "row__title";
                title.innerText = "Comedy Movies";
                row.appendChild(title);


                const row_posters = document.createElement("div");
                row_posters.className = "row__posters";
                row.appendChild(row_posters);


                data.results.forEach((movie) => {
                    console.log(movie);
                    const poster = document.createElement("img");
                    poster.className = "row__poster";
                    var s2 = movie.id;
                    poster.id = s2;
                    poster.src = img_url + movie.backdrop_path;
                    row_posters.appendChild(poster);
                });
            });
    //Horror Movies
        fetch(requests.fetchHorrorMovies)
            .then((res) => res.json())

            .then((data) => {
                const headrow = document.getElementById("headrow");
                const row = document.createElement("div");
                row.className = "row";
                headrow.appendChild(row);

                const title = document.createElement("h2");
                title.className = "row__title";
                title.innerText = "Horror Movies";
                row.appendChild(title);

                const row_posters = document.createElement("div");
                row_posters.className = "row__posters";
                row.appendChild(row_posters);

                data.results.forEach((movie) => {
                    console.log(movie);
                    const poster = document.createElement("img");
                    poster.className = "row__poster";
                    var s2 = movie.id;
                    poster.id = s2;
                    poster.src = img_url + movie.backdrop_path;
                    row_posters.appendChild(poster);
                });
            });
    //Romance Movies
        fetch(requests.fetchRomanceMovies)
            .then((res) => res.json())

            .then((data) => {
                const headrow = document.getElementById("headrow");
                const row = document.createElement("div");
                row.className = "row";
                headrow.appendChild(row);

                const title = document.createElement("h2");
                title.className = "row__title";
                title.innerText = "Romance Movies";
                row.appendChild(title);

                const row_posters = document.createElement("div");
                row_posters.className = "row__posters";
                row.appendChild(row_posters);

                data.results.forEach((movie) => {
                    console.log(movie);
                    const poster = document.createElement("img");
                    poster.className = "row__poster";
                    var s2 = movie.id;
                    poster.id = s2;
                    poster.src = img_url + movie.backdrop_path;
                    row_posters.appendChild(poster);
                });
            });

    //Thriller Movies
        fetch(requests.fetchThrillerMovies)
        .then((res) => res.json())

        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Thriller Movies";
            row.appendChild(title);

            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const  poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });

    //Science Fiction Movies
        fetch(requests.fetchSciFiMovies)
            .then((res) => res.json())

            .then((data) => {
                const headrow = document.getElementById("headrow");
                const row = document.createElement("div");
                row.className = "row";
                headrow.appendChild(row);

                const title = document.createElement("h2");
                title.className = "row__title";
                title.innerText = "Science Fiction";
                row.appendChild(title);

                const row_posters = document.createElement("div");
                row_posters.className = "row__posters";
                row.appendChild(row_posters);

                data.results.forEach((movie) => {
                    console.log(movie);
                    const poster = document.createElement("img");
                    poster.className = "row__poster";
                    var s2 = movie.id;
                    poster.id = s2;
                    poster.src = img_url + movie.backdrop_path;
                    row_posters.appendChild(poster);
                });
            });

    //kids and family 
        fetch(requests.fetchKidsFamily)
        .then((res) => res.json())

        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Kids and Family";
            row.appendChild(title);

            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });

        
    //Documentaries
        fetch(requests.fetchDocumentaries)
            .then((res) => res.json())

            .then((data) => {
                const headrow = document.getElementById("headrow");
                const row = document.createElement("div");
                row.className = "row";
                headrow.appendChild(row);

                const title = document.createElement("h2");
                title.className = "row__title";
                title.innerText = "Documentaries";
                row.appendChild(title);

                const row_posters = document.createElement("div");
                row_posters.className = "row__posters";
                row.appendChild(row_posters);

                data.results.forEach((movie) => {
                    console.log(movie);
                    const poster = document.createElement("img");
                    poster.className = "row__poster";
                    var s2 = movie.id;
                    poster.id = s2;
                    poster.src = img_url + movie.backdrop_path;
                    row_posters.appendChild(poster);
                });
            });

    //Horror Movies
        fetch(requests.fetchCrimeSuspense)
        .then((res) => res.json())

        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);

            const title = document.createElement("h2");
            title.className = "row__title";
            title.innerText = "Crime and Suspense";
            row.appendChild(title);

            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });
