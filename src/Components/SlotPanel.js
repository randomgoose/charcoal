import React, { useState, useContext } from 'react'
import Slot from './Slot'
import Badge from './Badge'
import './SlotPanel.scss'
import { BadgeContext } from './Context/BadgeContext'
import { Menu } from './Menu'

const SlotPanel = React.forwardRef((props, ref) => {

    const context = useContext(BadgeContext)

    const [show, setShow] = useState(false)

    console.log("great", props.clickable)

    return (
        <div className="SlotPanel" ref={ref}>
            <Badge />
            <Slot clickable={props.clickable} position="top"></Slot>
            <Slot clickable={props.clickable} position="bottom"></Slot>
            <Slot clickable={props.clickable} position="left"></Slot>
            <Slot clickable={props.clickable} position="right"></Slot>
        </div>  
    )

})

export default SlotPanel