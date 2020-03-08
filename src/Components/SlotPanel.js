import React, { useState, useContext } from 'react'
import Slot from './Slot'
import Badge from './Badge'
import './SlotPanel.scss'
import { BadgeContext } from './Context/BadgeContext'

const SlotPanel = (props) => {

    const context = useContext(BadgeContext)

    const [show, setShow] = useState(false)

    return (
        <div className="SlotPanel">
            <Badge />
            <Slot position="top"></Slot>
            <Slot position="bottom"></Slot>
            <Slot position="left"></Slot>
            <Slot position="right"></Slot>
        </div>  
    )

}

export default SlotPanel