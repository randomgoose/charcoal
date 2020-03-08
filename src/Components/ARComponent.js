import React, {useRef, useState, useEffect, Suspense, useContext} from 'react'
import Draggable from  'react-draggable'
import ModelViewer from './ModelViewer'
import Box from './Box'
import './ARComponent.scss'
import { BadgeContext } from './Context/BadgeContext'

function ARComponent(props) {
        let context = useContext(BadgeContext)

        let Slots

        let [position, setPosition] = useState({x: 0, y: 0})
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

                component.current.style.opacity = "0";
                document.getElementsByClassName("clone")[0].style.top = componentClientRect.top + "px";
                document.getElementsByClassName("clone")[0].style.left = componentClientRect.left + "px";
                document.getElementsByClassName("clone")[0].style.width = "5rem";
                document.getElementsByClassName("clone")[0].style.height = "5rem";

              };
        
        const onStop = (e, position) => {
                let componentClientRect = e.target.getBoundingClientRect()

                // Slots.forEach(slot => {
                //      let slotClientRect = slot.getBoundingClientRect()
                //      let nonIntersect = (slotClientRect.right < componentClientRect.left) || (slotClientRect.bottom < componentClientRect.top) || (componentClientRect.right < slotClientRect.left) || (componentClientRect.bottom < slotClientRect.top) 

                //      if (!nonIntersect)  {
                //              switch(slot.id) {
                //                      case "bottom":
                //                         props.setBottomSlot('bottom: ' + content)
                //                         break;
                //                      case "top":
                //                         props.setTopSlot('top: ' + content)
                //                         break;
                //                      case "left":
                //                         props.setLeftSlot('left: ' + content)
                //                         break;
                //                      case "right":
                //                         props.setRightSlot('right: ' + content)
                //                         break;
                //                      default:
                //                         console.log("Don't know!")
                //              }

                //      } else {
                                
                //      }
                // });

                component.current.style.opacity = "1"; 
                document.getElementsByTagName("body")[0].removeChild(document.getElementsByClassName("clone")[0])
        }

        const onStart = (e) => {
                let clone = document.createElement("div")
                clone.setAttribute("class", "clone");
                document.getElementsByTagName('body')[0].appendChild(clone);
                console.log(clone)
                let client = component.current.getBoundingClientRect()
                context.updatePosition(client.x, client.y) 
        } 
        

        return (
                <Draggable position={position} onDrag={onControlledDrag} onStart={onStart} onStop={onStop}>
                        <div ref={component} className="ARComponent">
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