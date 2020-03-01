import React from 'react'
import { Canvas, useCanvas } from 'react-three-fiber'
import "./ModelViewer.css"

function ModelViewer(props) {

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            { props.children }
        </Canvas>
    )
}

export default ModelViewer