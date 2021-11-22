import React from 'react'

const Movie = ({ newMovies }) => {
    

    return (
        <>
            {newMovies.map((movie) => (<a href={movie.link} key={movie.id} target="blank">
                <div className="box">
                <img src={movie.picture} alt={movie.name} />
                    <p>{movie.name}</p>
                </div>
            </a>))}
        </>
    )
}

export default Movie
