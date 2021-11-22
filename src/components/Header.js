import React, {useState} from 'react'

const Header = () => {
    const [navClick, setNavClick] = useState('burger')
    const [nav, setNav] = useState('nonenav')

    const toggleNav = () => {
        if(navClick === 'burger toggle'){
            setNavClick('burger')
            setNav('nonenav')
        }else{
            setNavClick('burger toggle')
            setNav('display')
        }
    }

    return (
        <header>
            <div className="navbar" id="header">
                <div className="container">
                    <h3>The Portal</h3>

                    <div className={navClick} onClick={toggleNav}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    <ul className={nav}>
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
