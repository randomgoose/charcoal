import React from 'react'
import { Canvas, useCanvas, useThree } from 'react-three-fiber'
import "./ModelViewer.css"
import Draggable  from 'react-draggable'

function ModelViewer(props) {
    let aspect = window.innerWidth / window.innerHeight;
    let d = 20;

    return (
        <div className="ModelViewer">
            <Canvas orthographic={true} camera={{zoom: 300}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                { props.children }
            </Canvas>
        </div>
    )
}

export default ModelViewer

// camera={{left: -d*aspect, right: d*aspect, top: d, bottom: -d, near: 0.1, far: 1000, position: [5, 5, 5], zoom: 10, lookAt: [0, 0, 0]}}