import React, { useState, useRef, useContext, useEffect } from 'react'
import "./Menu.scss"
import { BadgeContext } from './Context/BadgeContext'

let updatePosition;
let setWhichFromSlot;

const Menu = (props) => {

        const context = useContext(BadgeContext)

        const [on, setOn] = useState(false);
        const [which, setWhich] = useState("");

        setWhichFromSlot = setWhich;
        
        const menu = useRef(null)

        let timer;

        updatePosition = (which, x, y) => {
                clearTimeout(timer)

                console.log("x", x, "y", y)
                menu.current.style.top = y + "px";
                menu.current.style.left = x + "px";
                menu.current.style.opacity = 1;

                setWhich(which)

                timer = setTimeout(() => {
                       menu.current.style.opacity = 0;
                       menu.current.style.top = -9999; 
                       menu.current.style.left = -9999; 
                }, 3000);
        }

        const disableSlot = () => {
                let data = {
                        type: "",
                        content: ""
                }

                context.setSlot(which, data)
        }

        return (
                <div ref={menu} className="Menu on">
                        <a href="#" onClick={disableSlot}>Disable</a>
                </div>
                
        )
}

export { Menu, updatePosition, setWhichFromSlot }