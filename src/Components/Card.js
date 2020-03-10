import React, { useRef } from 'react'
import * as THREE from 'three'

function Card() {

        const front = useRef(null)
        const back = useRef(null)

        return(
                <group>
                        <mesh ref={front}>
                                <boxBufferGeometry attach="geometry" args={[.8, .8, 0.1]}/>
                                <meshPhysicalMaterial attach="material" metalness={0} transparent={true} opacity={.5}></meshPhysicalMaterial>
                        </mesh>
                        <mesh ref={back} position={[-.1, .05, -.1 ]}>
                                <boxBufferGeometry attach="geometry" args={[.8, .8, 0.1]}/>
                                <meshPhongMaterial attach="material" color={"blue"}></meshPhongMaterial>
                        </mesh>
                </group>
        )
}

export default Card
