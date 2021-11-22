import React from 'react'
import Movies from './Movies'

const MovieSection = ({ phaseOne, phaseTwo, phaseThree, phaseFour }) => {
    return (
        <div className="movies" id="movies">
            <div className="container">
                <h2>experience The Marvel cinematic universe</h2>
                <p className="align">download the google drive file for better quality</p>

                <div className="phaseone">
                    <div className="forcenter">
                        <p>Phase One</p>

                        <div className="gridmoviecontainer">
                            <Movies movietypes={phaseOne}/>
                        </div>
                    </div>
                    
                </div>

                <div className="phaseone">
                    <div className="forcenter">
                        <p>Phase Two</p>

                        <div className="gridmoviecontainer">
                            <Movies movietypes={phaseTwo}/>
                        </div>
                    </div>
                    
                </div>

                <div className="phaseone">
                    <div className="forcenter">
                        <p>Phase Three</p>

                        <div className="gridmoviecontainer">
                            <Movies movietypes={phaseThree}/>
                        </div>
                    </div>
                    
                </div>

                <div className="phaseone">
                    <div className="forcenter">
                        <p>Phase Four</p>

                        <div className="gridmoviecontainer">
                            <Movies movietypes={phaseFour}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieSection
