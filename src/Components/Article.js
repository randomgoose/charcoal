import React, { Suspense, useState, useRef, useEffect } from "react"
import data from "./NewsData"
import Highlight from "react-highlighter"
import ModelViewer from './ModelViewer'
import Model from './Model'
import Box from './Box'
import ThreeText from './ThreeText'
import axios from 'axios'
import Card from './Card'
import { Canvas, useFrame } from "react-three-fiber"
import Poll from './Poll'
import './Popup.scss'

const Popup = (props) => {

    const updatePosition = () => {

    }

    return(
        <div className="Popup__background">
            
        </div>
    )
}

function Article(props) {
    
    const [search, setSearch] = useState("ipsam")


    const set = () => {
        setSearch(
            window.getSelection().toString()
        )
    };
    
    let content = data[0].content.split("\n").map( item => (
        <Highlight onMouseUp={set} key={Math.random()} search={search}>
            {item}
        </Highlight>
    ))
            
    // useFrame( () => (console.log("ss")) )
    // useFrame(() => front.current.position.x += 0.01)

    return (
        <div className="Article__layout">
            <h1 className="Article__title">{data[0].title}</h1>
            <p className="Article__author">{data[0].author}</p>
            <Poll id={0}/>
            {/* <button onClick={this.set}>Change</button> */}
            {content}
            <ModelViewer>
                <Suspense fallback={<Box position={[1, 1, 1]} />}>
                    <ThreeText>{search.length <= 35 ? search : search.slice(0, 35) + "..."}</ThreeText>
                    <Box position={[1, 1, 1]} />
                    {/* <Card /> */}
                </Suspense>
            </ModelViewer>
            {/* <Popup event={}/> */}
        </div>
    )

}

export default Article