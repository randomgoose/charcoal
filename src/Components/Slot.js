import React, {useRef, useState, useEffect, useContext} from 'react'
import Draggable from  'react-draggable'
import './Slot.scss'
import { BadgeContext } from './Context/BadgeContext'

const Slot = (props) => {
        const slot = useRef(null) 

        let context = useContext(BadgeContext)

        const updateContent = () => {
                
        }

        return (
            <div onClick={ e => alert('s') } id={props.position} className={`Slot ${props.position} ${context.slots[props.position].type}`} ref={slot} onClick={e => console.log(e.target.getBoundingClientRect().bottom) }> 
            </div>
        )
}

export default Slot