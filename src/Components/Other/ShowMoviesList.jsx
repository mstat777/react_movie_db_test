function ShowMoviesList(props) {
    const { url, 
            poster_path,
            original_title,
            maxResults} = props;

    const urlFull = url + poster_path;

    let resultsFound = 0;

    return ( 
        <ul>
            {movie && movie.length > 0 && movie.map((movieObj, index) =>{
                    if ({resultsFound} >= {maxResults}) { 
                        break 
                    } 
                    
                    if (searchBar.value.trim() !== '') {
                        if (textEntered.test(movies[i].title)) {   
                            <li>
                                <Link to="">{movies[i].title}</Link>
                            </li>
                            resultsFound++;
                        }
                    }
                })
            }
        </ul>
    )
}

export default ShowMoviesList;