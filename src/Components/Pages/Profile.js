import React, {useRef, useEffect, Suspense} from 'react'
import SlotPanel from '../SlotPanel'
import StatusBar from "../Layout/StatusBar";
import Badge from "../Badge";
import { Link } from 'react-router-dom'

const Profile = (props) => {
    const slotPanel = useRef(null)

    return (
        <>
            <StatusBar rightIcon={"reset"}/>
            <div className="Profile">

                <div className={"Profile__code"}>Badge #282020</div>
ev
                <div className={"Profile__Badge-group"}>
                    <SlotPanel ref={slotPanel} clickable={true} special/>
                    <Badge/>
                </div>

                <button className={"Poll__submission"} id={"preview"}>
                    <Link to={"/preview"} >
                    Preview AR
                    </Link>
                </button>
            </div>
        </>
    )
}

export default Profile