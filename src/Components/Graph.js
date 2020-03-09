import React, { useRef, useEffect, useState } from 'react'
import data from './PollData'
import { useFrame, useLoader, useThree, Dom } from 'react-three-fiber'
import { BufferAttribute, Line } from 'three'
import ThreeText from './ThreeText'
import * as THREE from 'three'
import './Graph.scss'

function Bar(props) {
        let [currentValue, setCurrentValue] = useState(1)

        let bar = useRef()
        const [hovered, setHover] = useState(false)
        

        useFrame(state => {
                if (currentValue < props.value) {
                        setCurrentValue(currentValue += 0.5)
                }
        })

        return (
                <group>
                        {/* <ThreeText position={[0 + props.index * 1 * 0.2, 0, 1.1]} rotation={[-30, 45, -30]}>{props.description.slice(2)}</ThreeText> */}
                        <mesh ref={bar}
                                key={props.index}
                                position={[0 + props.index * 1 * 0.2, currentValue / 2 * 0.1 * 0.1, 1]}
                                scale={[1, currentValue * 0.1, 1]}
                                // onClick={e => console.log()}
                                // onPointerOver={e => setHover(true)}
                                // onPointerOut={e => setHover(false)}>
                                >
                                <Dom>
                                <div className="caption">{`${props.description } (${props.value})`}</div>        
                                </Dom>                                        
                                <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
                                </boxBufferGeometry>
                                <meshStandardMaterial attach={"material"} color={hovered ? "red" : props.index % 2 === 0 ? "green" : "white" } emissiveIntensity={10000}></meshStandardMaterial>
                        </mesh>
                </group>
        )
}

function Graph(props) {
        let [myMouseX, setMyMouseX] = useState(0)
        let [myMouseY, setMyMouseY] = useState(0)

        const question = data.filter(item => item.id === props.id)[0]
        const values = question.options.map(item => (
                <Bar index={question.options.indexOf(item)} value={item.number} description={item.description}/>
        ))

        const {
                camera
        } = useThree()

        useEffect(() => {
                camera.position.set(20, 20, 20);
                camera.lookAt(0, 0, 0.5);
                // camera.rotation.order = 'YXZ';
                // camera.rotation.y = - Math.PI / 4;
                // camera.rotation.x = Math.atan(- 1 / Math.sqrt(2));
        }, [])


        return (
                <group>
                        
                        {values}
                </group>


        )

}

export default Graph