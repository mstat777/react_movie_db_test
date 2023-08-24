import React, { useEffect, useState} from 'react';
import { API_KEY, BASE_FETCH_URL, BASE_IMG_URL } from "../../Other/Url";
import ShowMoviesList from '../../Other/ShowMoviesList';
import ShowMovieDetails from '../../Other/ShowMovieDetails';

function Search() {

    const [allMovies, setAllMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);

    const maxResults = 10;

    // trouver les détails du film choisi de la base de donnée
    useEffect(() => {
        fetch(`${BASE_FETCH_URL}/trending/movie/week?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setSelectedMovie(res.results))
            .catch(err => console.log(err));
    }, []);

    return (
        <main>  
            <div id="searchContainer">
                <label for="searchBar">Search:</label>
                <input type="text" id="searchBar" name="searchBar" />
                <div id="resultDiv"></div>
            </div>

            <section id="resultsContainer">

            </section>
        </main>
    )
}

export default Search;