import React from 'react'
import "./Badge.scss"

const Badge = (props) => {
    return (
        <div className="Badge">
            <img src={require("../Images/Badges/Badge.svg")} alt="Badge"></img>
        </div>  
    )

}

export default Badge