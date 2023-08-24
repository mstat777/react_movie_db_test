import React, { useEffect, useState} from 'react';
import { API_KEY, BASE_FETCH_URL, BASE_IMG_URL } from "../../Other/Url";
import ShowMoviesList from '../../Other/ShowMoviesList';
import ShowMovieDetails from '../../Other/ShowMovieDetails';
import { fetchDatas } from '../../Other/fetch';

function Search() {
    // pour stocker les films via fetch
    const [allMovies, setAllMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);
    // hook pour la barre de recherche
    const [searchInput, setSearchInput] = useState("");
    // limiter le nb de résultats à afficher
    const maxResults = 10;

    // fetch all films
    useEffect(() => {
        async function getDatas(){
            const {results} = await fetchDatas(`https://api.themoviedb.org/3/search/movie?`, null , `query=${searchInput}&` );
            setAllMovies(results);
        }
        getDatas();
    }, [searchInput]);

    // enregistrer le texte entré dans la barre de recherche
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <main>  
            <div id="searchContainer">
                <label for="searchBar">Search:</label>
                <input type="search" 
                        id="searchBar" 
                        name="searchBar" 
                        value={searchInput}
                        onChange={handleChange}/>

                <div id="resultDiv">
                    { searchInput &&
                        <ShowMoviesList allMovies={allMovies}
                                    url={BASE_IMG_URL} 
                                    searchInput={searchInput}
                                    maxResults={maxResults}
                                    selectedMovie={selectedMovie}
                                    setSelectedMovie={setSelectedMovie}
                      />
                    }
                </div>
            </div>

            <section id="resultsContainer">
                { selectedMovie.length !== 0 &&
                    <ShowMovieDetails url={BASE_IMG_URL} 
                                    poster_path={selectedMovie.poster_path}
                                    original_title={selectedMovie.original_title}
                                    vote_count={selectedMovie.vote_count}
                                    vote_average={selectedMovie.vote_average}
                                    release_date={selectedMovie.release_date}
                                    overview={selectedMovie.overview}
                    />
                }
            </section>
        </main>
    )
}

export default Search;