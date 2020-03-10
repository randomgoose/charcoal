import React, { useRef, useEffect } from 'react'
// import { Menu, updatePosition } from '../Menu'
import SlotPanel from '../SlotPanel'

const Profile = (props) => {
        const slotPanel = useRef(null)

        useEffect(() => {
                slotPanel.current.style.opacity = 1;
                slotPanel.current.style.left = "300px";
                slotPanel.current.style.top = "300px";
        })

        return(
                <div className="Profile">
                        <SlotPanel ref={slotPanel}>
                                
                        </SlotPanel>
                        {/* <Menu /> */}
                </div>
        )
}

export default Profile