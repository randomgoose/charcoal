import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const categories = [
    "all",
    "sports",
    "art",
    "politics",
    "environment",
    "Equality"
]

class NavBar extends React.Component {

    state = {
        focus: 0
    }

    next = () => {
        this.setState({
            focus: this.state.focus >= categories.length - 1 ? 0 : this.state.focus + 1
        })
    }

    last = () => {
        this.setState({
            focus: this.state.focus <= 0 ? categories.length - 1 : this.state.focus - 1
        })
    }

    render() {

        return(
            <div className={"NavBar"}>
                <button className={"NavBar__button"} onClick={this.last}>
                    <FontAwesomeIcon icon={faChevronLeft} size={"sm"}/>
                </button>

                <span className={"NavBar__focus"}>{categories[this.state.focus].toUpperCase()}</span>

                <button className={"NavBar__button"} onClick={this.next}>
                    <FontAwesomeIcon icon={faChevronRight} size={"sm"}/>
                </button>
            </div>
        )
    }
}

export default NavBar