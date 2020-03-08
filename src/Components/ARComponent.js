import React, {useRef, useState, useEffect, Suspense} from 'react'
import Draggable from  'react-draggable'
import ModelViewer from './ModelViewer'
import Box from './Box'
import './ARComponent.scss'

function ARComponent(props) {

        let Slots;

        let [position, setPosition] = useState({x: 200, y: 200})
        let [content, setContent] = useState("")
        let [data, setData] = useState("")

        let component = useRef(null);

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

                             console.log(component.current)

                     } else {
                                
                     }
                });
        }

        return (
                <Draggable position={position} onDrag={onControlledDrag} onStop={onStop} ref={component}>
                        <div className="ARComponent">
                                <ModelViewer>
                                        <Suspense fallback={<Box position={[1, 1, 1]} />}>
                                                {props.children}
                                        {/* <Card /> */}
                                        </Suspense>
                                </ModelViewer>
                        </div>
                        
                </Draggable>
        )
}

export default ARComponent