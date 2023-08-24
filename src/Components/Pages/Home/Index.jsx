import React, { useEffect, useState} from 'react';
import { API_KEY, BASE_FETCH_URL, BASE_IMG_URL } from "../../Other/Url";
import ShowMovies from '../../Other/ShowMovies';

function Home() {
    //
    const [movie, setMovie] = useState([]);

    // fetch data
    useEffect(() => {
        fetch(`${BASE_FETCH_URL}/trending/movie/week?api_key=${API_KEY}`)
            .then(res => res.json())
            .then(res => setMovie(res.results))
            .catch(err => console.log(err));
    }, []);
        
    return (
        <main>
            <section id="trending-container">
                <h2>Trendings movies of the week</h2>
                {movie && movie.length > 0 && movie.map((movieObj, index) => (
                    <ShowMovies key={index}
                                url={BASE_IMG_URL} 
                                poster_path={movieObj.poster_path}
                                original_title={movieObj.original_title}
                                vote_count={movieObj.vote_count}
                                vote_average={movieObj.vote_average}
                                release_date={movieObj.release_date}
                                overview={movieObj.overview}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home;