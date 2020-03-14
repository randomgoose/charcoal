import React, { useRef, useEffect } from 'react'
import { Canvas, useCanvas, useThree } from 'react-three-fiber'

function ModelViewer(props) {

    const modelViewer = useRef(null)
    
    return ( 
            <div ref={modelViewer} className="ModelViewer">

            <div className="ModelViewer__title">Title</div>

            <div className="ModelViewer__iconBox">
                <img className="ModelViewer__icon" src={require("../Images/Icons/icon__highlight.svg")} alt="icon__environment" />
            </div>

                <Canvas orthographic={true} camera={{zoom: 300}}>
                    <ambientLight castShadow={true} />
                    <pointLight position={[10, 10, 10]} />
                    { props.children }
                </Canvas>
            </div> 
    )
}

export default ModelViewer

// camera={{left: -d*aspect, right: d*aspect, top: d, bottom: -d, near: 0.1, far: 1000, position: [5, 5, 5], zoom: 10, lookAt: [0, 0, 0]}}