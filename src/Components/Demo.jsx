import React, { useState, Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './Demo.scss'
import Highlight from 'react-highlighter'
import data from "./NewsData"
import ARComponent from './ARComponent'
import ModelViewer from './ModelViewer'
import Model from './Model'
import ThreeText from './ThreeText'
import Poll from './Poll'
import Slot from './Slot'
import SlotPanel from './SlotPanel'
import Card from './Card'

const Demo = (props) => {
    const storyId = useParams()

    console.log(storyId)

    const [search, setSearch] = useState("ipsam")
    const [x, setX] = useState(-9999)
    const [y, setY] = useState(-9999)

    const setHighlight = (e) => {
        setSearch(
            window.getSelection().toString()
        )
        setX(e.pageX)
        setY(e.pageY)
    };

    const content = data[0].content.split("\n").map( item => (
        <p  className="gel-layout">
            <Highlight onMouseUp={setHighlight} key={Math.random()} search={search}>
                {item}
            </Highlight>
        </p>
    ))

    return(
        <>
        <div className="Article__layout">
                <div className="Article__main">
                    <div className="Article__title">The animals that will survive climate change</div>
                    <div className="Article__date">24th January 2020</div>
                    <div className="Article__author">By Amos Zeeberg</div>
                    <div className="Article__body">
                        { content }
                    </div> 
                </div>
        </div>

        <Poll id={0}></Poll>

        <ARComponent x={x} y={y} data={{
            type: "highlight",
            content: search
        }}>
                        <ThreeText>{search.length <= 35 ? search : search.slice(0, 35) + "..."}</ThreeText>
                        <Card />
        </ARComponent>


        <ARComponent x={100} y={100} data={{
            type: "model",
            content: "snow"
        }}>
            <Model />
        </ARComponent>
        </>
    )
}

export default Demo;