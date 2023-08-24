import { fetchDatas } from '../Other/fetch';

function ShowMoviesList(props) {
    const { allMovies,
            url, 
            searchInput,
            maxResults,
            selectedMovie,
            setSelectedMovie} = props;

    const urlFull = url + allMovies.poster_path;

    // on convertit le texte entré en RegExp. Le 'i' est pour ignorer Uppercase
    const textEntered = new RegExp(searchInput, 'i');

    let resultsFound = 0;

    async function handleClick(id) {
        const movie = await fetchDatas(`https://api.themoviedb.org/3/movie/`, id);
        setSelectedMovie(movie);
    }

    function showList(movieObj, index) {
        if (searchInput.trim() !== '') {
            if (textEntered.test(movieObj.original_title)) {
                resultsFound++; 
                return (
                    <li key={index} 
                        onClick={() => handleClick(movieObj.id)}
                        >
                        {movieObj.original_title}
                    </li> 
                )
            }
        }
    }

    return (
        <ul>
            {allMovies.length > 0 && 
            allMovies.map((movieObj, index) => showList(movieObj, index))
            }
        </ul>
    )
}

export default ShowMoviesList;