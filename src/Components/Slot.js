import React, {useRef, useState, useEffect} from 'react'
import Draggable from  'react-draggable'
import './Slot.scss'

const Slot = (props) => {
        const slot = useRef(null) 

        const updateContent = () => {
                
        }

        return (
            <div id={props.position} className={`Slot ${props.position}`} ref={slot} onClick={e => console.log(e.target.getBoundingClientRect().bottom) }>
                
            </div>
        )
}

export default Slot