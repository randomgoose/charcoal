import React, {useRef, useState, useEffect, useContext} from 'react'
import Draggable from  'react-draggable'
import { BadgeContext } from './Context/BadgeContext'
import { Menu, updatePosition } from './Menu'

const Slot = (props) => {
        const slot = useRef(null) 

        let context = useContext(BadgeContext)

        const removeContent = () => {
                slot.current.classList.remove('poll')
        }

        return (
            <div
                id={props.position}
                className={`Slot ${props.position} ${context.slots[props.position].type}`}
                ref={slot}
                onMouseEnter={ e => {console.log(context.slots[props.position])}}
                onClick={
                    removeContent
                }
            > 
            { props.children }
            </div>
        )
}

export default Slot