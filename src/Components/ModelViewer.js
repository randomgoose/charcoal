import React from 'react'
import { Canvas, useCanvas } from 'react-three-fiber'
import "./ModelViewer.css"
import Draggable  from 'react-draggable'

function ModelViewer(props) {

    return (
        <div className="ModelViewer">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                { props.children }
            </Canvas>
            <Draggable><div>Sam</div></Draggable>
        </div>
    )
}

export default ModelViewer