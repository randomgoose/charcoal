import React from 'react'

const StatusBar = (props) => {

        return (
                <header className="StatusBar">


                        <div className="StatusBar__logoBox">
                                <img className="StatusBar__logo" src={require("../../Images/Branding/bbc.svg")} alt="logo"></img>
                            <span className={"StatusBar__appName"}>Future</span>
                        </div>
                        
                        {/*<nav className="StatusBar__navigation">*/}
                        {/*        <Link to="/">Home</Link>*/}
                        {/*        <Link to="/profile">Profile</Link>*/}
                        {/*        <a href="#">News</a>*/}
                        {/*        <a href="#">Sport</a>*/}
                        {/*        <a href="#">Weather</a>*/}
                        {/*        <a href="#">iPlayer</a>*/}
                        {/*        <a href="#">Sounds</a>*/}
                        {/*        <a href="#">CBBC</a>*/}
                        {/*</nav>*/}
                </header>
        )
}

export default StatusBar