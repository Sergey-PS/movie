import axios from "axios";

export default function loadFavourites() {
    const movies = [];

    for (let i = 0; i < localStorage.length; i++) {
        let sm = localStorage.key(i);
        if (sm[0] === 'm') {
            axios.get('https://api.themoviedb.org/3/movie/' + sm.slice(1) + '?language=en&api_key=e7b8782a21b5b1fb64981f82df123a3a')
                .then(response => {
                    //console.log(response.data);
                    movies.push(response.data)
                    if (i === localStorage.length - 1) {
                        console.log("movies", movies)
                        return movies;
                    }
                })
        }
    }

    // setLocStorage([]);
    // let newPhotos = [];
    //
    //
    //         console.log("!!!")
    //         let sm = localStorage.key(i);
    //         if (sm[0] === 'm') {
    //             axios.get('https://api.themoviedb.org/3/movie/' + sm.slice(1) + '?language=en&api_key=e7b8782a21b5b1fb64981f82df123a3a&query=' + searchMovie + '&page=' + currentPage)
    //                 .then(response => {
    //                     let gr = [];
    //                     for (let j = 0; j < response.data.genres.length; j++) {
    //                         gr.push(response.data.genres[j].id);
    //
    //                     }
    //                     response.data.genres = gr;
    //                     setLocStorage([...locStorage, response.data]);
    //
    //                 })
    //         }
    //     }
    //
    //     console.log(locStorage)
}