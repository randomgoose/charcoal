import React, {useRef, useState, useEffect, Suspense, useContext} from 'react'
import Draggable, { DraggableCore } from  'react-draggable'
import ModelViewer from './ModelViewer'
import Box from './Box'
import './ARComponent.scss'
import { BadgeContext } from './Context/BadgeContext'

function ARComponent(props) {
        let context = useContext(BadgeContext)

        let Slots

        let [position, setPosition] = useState({
                x: props.x,
                y: props.y
        })

        let [data, setData] = useState(props.data)

        let component = useRef(null);
        let draggable = useRef(null);
        let clone = useRef(null);

        useEffect(() => {
                Slots = Array.from(document.getElementsByClassName('Slot'))
        })

        useEffect(() => {
                setPosition({x: props.x, y: props.y})
        }, [props.x, props.y])

        useEffect(() => {
                setData(props.data)
        }, [props.data])

        const onControlledDrag = (e, position) => {
                const {x, y} = position
                setPosition({x, y})

                let componentClientRect = e.target.getBoundingClientRect()

                document.getElementsByClassName("clone")[0].style.top = componentClientRect.top + "px";
                document.getElementsByClassName("clone")[0].style.left = componentClientRect.left + "px";

                let cloneClientRect = document.getElementsByClassName("clone")[0].getBoundingClientRect()

                Slots.forEach(slot => {
                     let slotClientRect = slot.getBoundingClientRect()
                     let nonIntersect = (slotClientRect.right < cloneClientRect.left) || (slotClientRect.bottom < cloneClientRect.top) || (cloneClientRect.right < slotClientRect.left) || (cloneClientRect.bottom < slotClientRect.top) 

                     if (!nonIntersect)  {
                             slot.style.width = "5.5rem"
                             slot.style.height = "5.5rem"
                                // slot.style.transform = slot.style.transform.replace("scale(1)", "scale(1.1)")
                     } else {
                                slot.style.width = "5rem"
                                slot.style.height = "5rem"
                        // slot.style.transform = "scale(1)"
                            
                                // slot.style.transform = slot.style.transform.replace("scale(1.1)", "scale(1)")
                     }
                });


               
                console.log(componentClientRect.left, componentClientRect.top)
              };
        
        const onStop = (e, position) => {
                // let componentClientRect = e.target.getBoundingClientRect()
                let componentClientRect = document.getElementsByClassName("clone")[0].getBoundingClientRect()
                console.log(componentClientRect)

                Slots.forEach(slot => {
                     let slotClientRect = slot.getBoundingClientRect()
                     let nonIntersect = (slotClientRect.right < componentClientRect.left) || (slotClientRect.bottom < componentClientRect.top) || (componentClientRect.right < slotClientRect.left) || (componentClientRect.bottom < slotClientRect.top) 

                     if (!nonIntersect)  {
                             console.log(data)
                             switch(slot.id) {
                                     case "bottom":
                                        context.setSlot('bottom', data)
                                        break;
                                     case "top":
                                        context.setSlot('top', data)
                                        break;
                                     case "left":
                                        context.setSlot('left', data)
                                        break;
                                     case "right":
                                        context.setSlot('right', data)
                                        break;
                                     default:
                                        console.log("Don't know!")
                             }

                     } else {
                        document.getElementsByClassName("SlotPanel")[0].style.opacity = "0";
                     }
                });

                component.current.style.opacity = "1"; 
                document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("clone")[0])
                
                // component.current.style.transform = "translate(0, 0)"
        }

        const onStart = (e) => {
                let clone = document.createElement("div")
                clone.setAttribute("class", `clone ${props.data.type}`);
                document.getElementsByTagName('body')[0].appendChild(clone);

                let client = component.current.getBoundingClientRect()
                console.log(client)
                context.updatePosition(client.x, client.y) 
                
                document.getElementsByClassName("clone")[0].style.width = "5rem";
                document.getElementsByClassName("clone")[0].style.height = "5rem";
                component.current.style.opacity = "0";
        } 
        

        return (
                <Draggable ref={draggable} position={position} onDrag={onControlledDrag} onStart={onStart} onStop={onStop}>
                        <div ref={component} className={`ARComponent ${data.type}`}>
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

// onStop={onStop}