import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="navbar" id="header">
                <div className="container">
                    <h3>The Portal</h3>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#movies">Movies</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
