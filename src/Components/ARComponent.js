import React, {useRef, useState, useEffect} from 'react'
import Draggable from  'react-draggable'
import './ARComponent.scss'

function ARComponent(props) {

        let Slots;

        let [position, setPosition] = useState({x: 200, y: 200})
        let [content, setContent] = useState("")

        useEffect(() => {
                Slots = Array.from(document.getElementsByClassName('Slot'))
                content = props.content
        })

        const onControlledDrag = (e, position) => {
                const {x, y} = position
                setPosition({x, y})

                let componentClientRect = e.target.getBoundingClientRect()

                Slots.forEach(slot => {
                     let slotClientRect = slot.getBoundingClientRect()
                     let nonIntersect = (slotClientRect.right < componentClientRect.left) || (slotClientRect.bottom < componentClientRect.top) || (componentClientRect.right < slotClientRect.left) || (componentClientRect.bottom < slotClientRect.top) 

                     if (!nonIntersect)  {
                             slot.style.width = "11rem"
                             slot.style.height = "11rem"
                                // slot.style.transform = slot.style.transform.replace("scale(1)", "scale(1.1)")
                     } else {
                                slot.style.width = "10rem"
                                slot.style.height = "10rem"
                        // slot.style.transform = "scale(1)"
                            
                                // slot.style.transform = slot.style.transform.replace("scale(1.1)", "scale(1)")
                     }
                });

              };
        
        const onStop = (e, position) => {
                let componentClientRect = e.target.getBoundingClientRect()

                Slots.forEach(slot => {
                     let slotClientRect = slot.getBoundingClientRect()
                     let nonIntersect = (slotClientRect.right < componentClientRect.left) || (slotClientRect.bottom < componentClientRect.top) || (componentClientRect.right < slotClientRect.left) || (componentClientRect.bottom < slotClientRect.top) 

                     if (!nonIntersect)  {
                             switch(slot.id) {
                                     case "bottom":
                                        props.setBottomSlot('bottom: ' + content)
                                        break;
                                     case "top":
                                        props.setTopSlot('top: ' + content)
                                        break;
                                     case "left":
                                        props.setLeftSlot('left: ' + content)
                                        break;
                                     case "right":
                                        props.setRightSlot('right: ' + content)
                                        break;
                                     default:
                                        console.log("Don't know!")

                             }
                     } else {
                                
                     }
                });
        }

        return (
                <Draggable position={position} onDrag={onControlledDrag} onStop={onStop}>
                        <div className="ARComponent" style={{"backgroundColor": props.color}} >
                                <p>{props.content}</p>
                                <p>{"posX" + position.x}</p>
                                <p>{"posY" + position.y}</p>
                        </div>
                </Draggable>
        )
}

export default ARComponent