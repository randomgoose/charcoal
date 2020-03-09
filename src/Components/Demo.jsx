import React, { useState, Suspense, useEffect } from 'react'
import './Demo.scss'
import Highlight from 'react-highlighter'
import data from "./NewsData"
import ARComponent from './ARComponent'
import ModelViewer from './ModelViewer'
import Model from './Model'
import ThreeText from './ThreeText'
import Poll from './Poll'
import Slot from './Slot'
import SlotPanel from './SlotPanel'

const Demo = (props) => {

    const [search, setSearch] = useState("ipsam")
    const [x, setX] = useState(100)
    const [y, setY] = useState(100)

    const set = (e) => {
        setSearch(
            window.getSelection().toString()
        )
        setX(e.pageX)
        setY(e.pageY)
    };

    const content = data[0].content.split("\n").map( item => (
        <p>
            <Highlight onMouseUp={set} key={Math.random()} search={search}>
                {item}
            </Highlight>
        </p>
    ))

    return(
        <>
        <div className="Article__layout">
            <div className="Article__spacing"></div>
                <div className="Article__title gel-layout--middle">The animals that will survive climate change</div>
            <div className="Article__spacing"></div>
        </div>

        <div className="Article__layout">
            <div className="Article__spacing"></div>
                <div className="Article__intro">With one in every four species facing extinction, which animals are the best equipped to survive the climate crisis? (Spoiler alert: it’s probably not humans).</div>
            <div className="Article__spacing"></div>
        </div>
        
        <div className="Article__layout">
            <div className="Article__spacing"></div>
            <div className="Article__body">
                { content }
            </div>
            <div className="Article__spacing"></div>
            {/* <div className="Article__paragraph">t</div> */}
        </div>

        <div id="evil">s</div>

        <Poll id={0}></Poll>

        <ARComponent x={x} y={y} data={{
            type: "highlight",
            content: search
        }}>
                        <ThreeText>{search.length <= 35 ? search : search.slice(0, 35) + "..."}</ThreeText>
                        {/* <Card /> */}
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