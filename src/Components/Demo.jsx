import React, { useState, Suspense, useEffect, useRef } from 'react'
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
import Card from './Card'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const Demo = (props) => {

    const group = useRef(null)

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

    // useFrame(state => {
    //     // console.dir(group.current)
    // })

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

        <Poll id={0}></Poll>

        <ARComponent x={x} y={y} data={{
            type: "highlight",
            content: search
        }}>
                    <group ref={group}>
                        <mesh position={[0, 0, 0]}>
                            <boxBufferGeometry attach="geometry" args={[.1, .1, .1]}></boxBufferGeometry>
                        </mesh>
                        <ThreeText>"</ThreeText> 
                        <ThreeText>{search.length <= 35 ? search : search.slice(0, 35) + "..."}</ThreeText>
                        <Card />
                    </group>
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