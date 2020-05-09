import React, { useState, useContext } from 'react'
import Slot from './Slot'
import Badge from './Badge'
import { BadgeContext } from './Context/BadgeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faImage, faCube, faChartBar } from '@fortawesome/free-solid-svg-icons'

const SlotPanel = React.forwardRef((props, ref) => {

    const context = useContext(BadgeContext)

    const [show, setShow] = useState(false)

    console.log("great", props.clickable)

    return (
        <div className="SlotPanel" ref={ref} id={props.special ? "special" : ""}>
            {/* <Badge /> */}
            <Slot clickable={props.clickable} position="top">
                <FontAwesomeIcon icon={faFont}
                    size={"lg"} />
            </Slot>
            <Slot clickable={props.clickable} position="bottom">
                <FontAwesomeIcon icon={faImage}
                        size={"lg"} />
            </Slot>
            <Slot clickable={props.clickable} position="left">
                <FontAwesomeIcon icon={faCube}
                        size={"lg"} />
            </Slot>
            <Slot clickable={props.clickable} position="right">
                <FontAwesomeIcon icon={faChartBar}
                        size={"lg"} />
            </Slot>
        </div>
    )

})

export default SlotPanel