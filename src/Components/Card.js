import React, { useRef } from 'react'
import * as THREE from 'three'

function Card() {

        const front = useRef(null)
        const back = useRef(null)

        return(
                <THREE.Group>
                        <mesh ref={front}>
                                <boxBufferGeometry attach="geometry" args={[2, 2, 0.1]}/>
                                <meshPhongMaterial attach="material" color={"red"}></meshPhongMaterial>
                        </mesh>
                        <mesh ref={back} position={[-1, -1, -1 ]}>
                                <boxBufferGeometry attach="geometry" args={[2, 2, 0.1]}/>
                                <meshPhongMaterial attach="material" color={"blue"}></meshPhongMaterial>
                        </mesh>
                </THREE.Group>
        )
}

export default Card
