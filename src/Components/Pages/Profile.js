import React, { useRef, useEffect, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { Menu, updatePosition } from '../Menu'
import SlotPanel from '../SlotPanel'
import ModelViewer from '../ModelViewer'
import Model from '../Model'

const Profile = (props) => {
        const slotPanel = useRef(null)

        useEffect(() => {
                slotPanel.current.style.opacity = 1;
                slotPanel.current.style.left = "300px";
                slotPanel.current.style.top = "300px";
        })

        return(
                <div className="Profile">
                        <SlotPanel ref={slotPanel} clickable={true}>
                        </SlotPanel>
                        <Menu />
                        <Canvas>
                                <ambientLight castShadow={true} />
                                <pointLight position={[10, 10, 10]} />
                                <Suspense fallback={null}>
                                        <Model />
                                </Suspense>
                        </Canvas>
                </div>
        )
}

export default Profile