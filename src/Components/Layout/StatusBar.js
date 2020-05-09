import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faSearch, faShieldVirus, faSlidersH, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const StatusBar = (props) => {
    const history = useHistory()
    const goBack = () => {
        history.replace("/")
    }

    const searchBox = props.searchBox ? (
        <div className={"StatusBar__searchBox"}>
            <input className={"StatusBar__search"}
                type={"search"}
                placeholder={"Search"}
            />
            <FontAwesomeIcon icon={faSearch}
                className={"StatusBar__search-icon"}
                size={"lg"} />
        </div>
    ) : null

    let leftIcon
    if (props.leftIcon === 'bookmark') {
        leftIcon = (
            <button className={"StatusBar__button bookmark"}>
                <FontAwesomeIcon icon={faBookmark} size={"lg"} />
            </button>
        )
    } else if (props.leftIcon === 'back') {
        leftIcon = (
            <button className={"StatusBar__button bookmark"} onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} size={"lg"} />
            </button>
        )
    } else {
        leftIcon = (
            <button className={"StatusBar__button bookmark"}>
                <FontAwesomeIcon icon={faBookmark} size={"lg"} />
            </button>
        )
    }

    return (
        <header className="StatusBar">

            <div className="StatusBar__system">
            </div>

            <div className={"StatusBar__app"}>
                {leftIcon}

                <div className="StatusBar__logoBox">
                    <img className="StatusBar__logo" src={require("../../Images/Branding/bbc.svg")} alt="logo"></img>
                    <span className={"StatusBar__appName"}>Future</span>
                </div>

                <button className={"StatusBar__button setting"}>
                    <FontAwesomeIcon icon={faSlidersH} size={"lg"} />
                </button>
            </div>

            {searchBox}

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