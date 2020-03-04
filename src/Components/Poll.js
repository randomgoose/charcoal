import React, {useState} from 'react'
import data from './PollData'
import './Poll.scss'

function Poll(props) {
        let [answered, setAnswered] = useState(false);

        let question = data.filter(item => item.id === props.id)

        const options = question[0].options.map(option => (
                <div key={question[0].options.indexOf(option)} className="Poll__option">
                        <input className="Poll__radio" key={question[0].options.indexOf(option)}
                                id={option.description} type="radio"
                                name="option"
                                value={option.description}></input>
                        <label className="Poll__label" htmlFor={option.description} value={option.description}></label>
                        <br />
                </div>
        ))

        return ( 
                <div className="Poll__card">
                        <h3 className="Poll__title">{question[0].title}</h3>
                        {options}
                        <button>Submit</button>
                </div>
        )
}

export default Poll