export default function movieView(movie) {
        const url = "https://www.themoviedb.org/movie/" + movie;
        window.location.href = url;
}

