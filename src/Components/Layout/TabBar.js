import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle, faEye, faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const TabBar = (props) => {

        return (
                <footer className="TabBar">
                        <button className={"TabBar__tab"}>
                            <Link to={"/"}>
                                <FontAwesomeIcon icon={faHome} size={"lg"}/>
                            </Link>
                        </button>
                        <button className={"TabBar__tab"}>
                            <Link to={"/profile"}>
                                <FontAwesomeIcon icon={faCircle} size={"lg"}/>
                            </Link>
                        </button>
                        <button className={"TabBar__tab"}>
                                <FontAwesomeIcon icon={faEye} size={"lg"}/>
                        </button>
                        {/*<button className={"TabBar__tab"}></button>*/}
                        {/*<button className={"TabBar__tab"}></button>*/}
                </footer>
        )
}

export default TabBar