import React, { Suspense } from "react"
import data from "./NewsData"
import Highlight from "react-highlighter"
import ModelViewer from './ModelViewer'
import Model from './Model'
import Box from './Box'
import ThreeText from './ThreeText'

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

        let content = data[0].content.split("\n").map( item => (
        <Highlight onMouseUp={this.set} key={Math.random()} search={this.state.search}>{item}</Highlight>
        ))


        return (
            <>
                <h1 className="Article__title">{data[0].title}</h1>
                <p className="Article__author">{data[0].author}</p>
                {/* <button onClick={this.set}>Change</button> */}
                {content}
                <ModelViewer>
                    <Suspense fallback={<Box position={[1, 1, 1]} />}>
                        <ThreeText>{this.state.search.length <= 35 ? this.state.search : "yes"}</ThreeText>
                        <Box position={[1, 1, 1]} />
                    </Suspense>
                </ModelViewer>
            </>
        )
    }
}

export default Article