import React, { useState, useContext } from 'react'
import Slot from './Slot'
import Badge from './Badge'
import './SlotPanel.scss'
import { BadgeContext } from './Context/BadgeContext'

const SlotPanel = React.forwardRef((props, ref) => {

    const context = useContext(BadgeContext)

    const [show, setShow] = useState(false)

    return (
        <div className="SlotPanel" ref={ref}>
            <Badge />
            <Slot position="top"></Slot>
            <Slot position="bottom"></Slot>
            <Slot position="left"></Slot>
            <Slot position="right"></Slot>
        </div>  
    )

})

export default SlotPanel