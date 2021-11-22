import React from 'react'
import Movie  from './NewMovie'

const NRealeses = ({ newMovies }) => {
    return (
        <div className="newreleases">
            <div className="container">
                <h2>New releases</h2>
                <p>catch up with the mcu by watching the latest releases</p>

                <div className="forcenter">
                    <div className="newgrid">
                       <Movie newMovies={newMovies}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NRealeses
