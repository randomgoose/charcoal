import React from 'react'
import { Canvas, useCanvas, useThree } from 'react-three-fiber'
import "./ModelViewer.css"
import Draggable  from 'react-draggable'

function ModelViewer(props) {
    let aspect = window.innerWidth / window.innerHeight;
    let d = 20;

    return (
        <div className="ModelViewer">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                { props.children }
            </Canvas>
        </div>
    )
}

export default ModelViewer