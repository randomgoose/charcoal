import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

        return (
                <header>
                        <div className="NavBar"></div>
                        <nav>
                                <Link to="/">Home</Link>
                                <Link to="/profile">Profile</Link>
                                <a href="#">News</a>
                                <a href="#">Sport</a>
                                <a href="#">Weather</a>
                                <a href="#">iPlayer</a>
                                <a href="#">Sounds</a>
                                <a href="#">CBBC</a>
                        </nav>
                </header>
        )
}

export default NavBar