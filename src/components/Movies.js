import React from 'react'

const Movies = ({ movietypes }) => {
    return (
        <>
        {movietypes.map((movie) => (<a href={movie.link} key={movie.id} target="blank">
            <div className="box">
                <img src={movie.picture} alt={movie.name} />
                <p>{movie.name}</p>
                <small>{movie.available}</small>
            </div>
        </a>))}
    </>
    )
}

export default Movies
