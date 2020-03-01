import React from "react"
import data from "./NewsData"
import Highlight from "react-highlighter"

class Article extends React.Component {
    state = {
        search: "ipsam"
    }

    set = () => {
        this.setState({
            search: window.getSelection().toString()
        })
    };

    render() {
        return(
            <>
                <h1 className="Article__title">{data[0].title}</h1>
                <p className="Article__author">{data[0].author}</p>
                <Highlight className="Article__content" onMouseUp={this.set} search={this.state.search}>{data[0].content}</Highlight>
                {/* <button onClick={this.set}>Change</button> */}
            </>
        )
    }
}

export default Article