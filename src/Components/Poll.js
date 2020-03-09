import React, {useState, Suspense} from 'react'
import data from './PollData'
import './Poll.scss'
import Graph from './Graph'
import ModelViewer from './ModelViewer';
import Draggable from 'react-draggable';
import ARComponent from './ARComponent';

function Poll(props) {
        let [answered, setAnswered] = useState(false);

        let question = data.filter(item => item.id === props.id)

        const options = answered === false ? question[0].options.map(option => (
                <div key={question[0].options.indexOf(option)} className="Poll__option">
                        <input className="Poll__radio" key={question[0].options.indexOf(option)}
                                id={option.description} type="radio"
                                name="option"
                                value={option.description}></input>
                        <label className="Poll__label" htmlFor={option.description} value={option.description}></label>
                        <br />
                </div>
        )) : (
        <ARComponent data={{type: "poll", content: question}}><Graph id={props.id} /></ARComponent>
                
           )

        return ( 
                <div className="Poll__card">
                        <h3 className="Poll__title">{question[0].title}</h3>
                        {options}
                        <button onClick={() => setAnswered(true)}>Submit</button>
                </div>
        )
}

export default Poll