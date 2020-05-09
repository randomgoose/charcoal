import React, {useState, Suspense, useContext} from 'react'
import data from './PollData'
import Graph from './Graph'
import { BadgeContext } from './Context/BadgeContext'
import ARComponent from './ARComponent';

function Poll(props) {
    const context = useContext( BadgeContext )

    let [answered, setAnswered] = useState(false);

    let question = data.filter(item => item.id === props.id)

    const options = answered === false ? question[0].options.map(option => (
        <div key={question[0].options.indexOf(option)} className="Poll__option">
            <input className="Poll__radio" key={question[0].options.indexOf(option)}
                   id={option.description} type="radio"
                   name="option"
                   value={option.description}></input>
            <label className="Poll__label" htmlFor={option.description} value={option.description}></label>
            <br/>
        </div>
    )) : (
        <ARComponent data={{type: "poll", content: question}}><Graph id={props.id}/></ARComponent>

    )

    const button = answered === false ? <button className="Poll__submission" onClick={() => setAnswered(true)}>Submit</button> : <button className="Poll__submission" onClick={() => context.setSlot("left", {type: "poll", content: "test"})}>Add</button>

    return (
        <div className="Poll__card">
            <h3 className="Poll__title">{question[0].title}</h3>
            { options }
            { button }
        </div>
    )
}

export default Poll