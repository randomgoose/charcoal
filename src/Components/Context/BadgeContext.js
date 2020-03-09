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
                })
                console.log(this.state.position)
        }

        setSlot = (which, data) => {
                const slotData = JSON.stringify({
                        "which": which,
                        "data": data
                })
                
                console.log(slotData)

                const headers = new Headers()
                headers.append("Content-Type", "application/json")

                const requestOptions = {
                        method: 'POST',
                        headers: headers,
                        body: slotData,
                        redirect: 'follow'
                }

                fetch("http://t-9.tools:5000/slots", requestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                return () => {
                };
        }

        render() {
                return (
                        <BadgeContext.Provider value={{
                                position: this.state.position,
                                updatePosition: this.updatePosition,
                                setSlot: this.setSlot
                        }}>
                                {this.props.children}
                        </BadgeContext.Provider>
                )
        }
}

export { BadgeContext, BadgeContextProvider }