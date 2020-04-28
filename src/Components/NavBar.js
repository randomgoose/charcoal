import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

        return (
                <header className="NavBar">

                        <div className="NavBar__logoBox">
                                <img className="NavBar__logo" src={require("../Images/Branding/bbc.svg")} alt="logo"></img>
                        </div>
                        
                        <nav className="NavBar__navigation">
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