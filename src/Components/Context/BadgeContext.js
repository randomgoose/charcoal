import React from 'react'

const BadgeContext = React.createContext()


class BadgeContextProvider extends React.Component {
        state = {
                position: { x: 0, y: 0 }
        }

        updatePosition = (x, y) => {
                this.setState({
                        x, y
                }, () => {
                        console.log(x, y)
                        document.getElementsByClassName("SlotPanel")[0].style.left = x - 200 + "px"
                        document.getElementsByClassName("SlotPanel")[0].style.top = y - 200 + "px"
                        document.getElementsByClassName("SlotPanel")[0].style.opacity = "1";
                        // setTimeout(() => { document.getElementsByClassName("SlotPanel")[0].style.opacity = "0" }, 1000)
                })
        }

        // updateSlot = (slotName, content) => {
        //         var myHeaders = new Headers();
        //         myHeaders.append("Content-Type", "application/json");

        //         var raw = JSON.stringify({ "TOP": topSlot, "BOTTOM": bottomSlot, "LEFT": leftSlot, "RIGHT": rightSlot });

        //         var requestOptions = {
        //                 method: 'POST',
        //                 headers: myHeaders,
        //                 body: raw,
        //                 redirect: 'follow'
        //         };

        //         fetch("http://t-9.tools:5000/slots", requestOptions)
        //                 .then(response => response.text())
        //                 .then(result => console.log(result))
        //                 .catch(error => console.log('error', error));
        //         return () => {
        //         };
        // }

        render() {
                return (
                        <BadgeContext.Provider value={{
                                position: this.state.position,
                                updatePosition: this.updatePosition
                        }}>
                                {this.props.children}
                        </BadgeContext.Provider>
                )
        }
}

export { BadgeContext, BadgeContextProvider }