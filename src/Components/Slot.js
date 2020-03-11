import React, {useRef, useState, useEffect, useContext} from 'react'
import Draggable from  'react-draggable'
import './Slot.scss'
import { BadgeContext } from './Context/BadgeContext'
import { Menu, updatePosition } from './Menu'

const Slot = (props) => {
        const slot = useRef(null) 

        let context = useContext(BadgeContext)

        const updateContent = () => {
                
        }

        return (
            <div
                id={props.position}
                className={`Slot ${props.position} ${context.slots[props.position].type}`}
                ref={slot}
                onMouseEnter={ e => {console.log(context.slots[props.position])}}
                onClick={props.clickable === true ? e=> {
                    updatePosition(props.position, e.target.getBoundingClientRect().right, e.target.getBoundingClientRect().bottom)
                } : e => {}}
            > 
            </div>
        )
}

export default Slot