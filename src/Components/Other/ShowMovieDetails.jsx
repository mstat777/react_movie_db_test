function ShowMovieDetails(props) {
    const { url, 
            poster_path,
            original_title,
            vote_count,
            vote_average,
            release_date,
            overview} = props;

    const urlFull = url + poster_path;

    return (
        <>
            <h2>Details:</h2>
            <article>
                <img src={urlFull} alt="" />
                <h3>{original_title}</h3>
                <p>Vote count : {vote_count}</p>
                <p>Vote avg : {vote_average}</p>
                <p>Release : {release_date}</p>
                <p>{overview}</p>
            </article>
        </>
    )
}

export default ShowMovieDetails;