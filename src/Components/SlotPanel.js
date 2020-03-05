import React from 'react'
import Slot from './Slot'
import Badge from './Badge'
import './SlotPanel.scss'

const SlotPanel = (props) => {

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