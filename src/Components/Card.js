import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useThree } from 'react-three-fiber'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import env from './env.hdr'

function Card() {

        const front = useRef(null)
        const back = useRef(null)
        const background = useRef(null)

        const rgbe = useLoader(RGBELoader, env)


        return(
                <group>
                        {/* <mesh ref={background} scale={[10, 10, 1]} position={[0, 0, -100]}>
                                <planeBufferGeometry attach="geometry" args={[.8, 1, 1]} />
                                <meshBasicMaterial attach="material" map={rgbe} depthTest={false}></meshBasicMaterial>
                        </mesh> */}
                        <mesh ref={front} position={[-.3, 0, .3]}>
                                <boxBufferGeometry attach="geometry" args={[1, 1, 0.01]}/>
                                <meshPhysicalMaterial attach="material" metalness={0} transparent={true} opacity={.5}></meshPhysicalMaterial>
                        </mesh>
                        <mesh ref={back} position={[-.25, 0, .25 ]}>
                                <boxBufferGeometry attach="geometry" args={[1, 1, 0.01]}/>
                                <meshBasicMaterial attach="material" color={"blue"} ></meshBasicMaterial>
                        </mesh>
                </group>
        )
}

export default Card
