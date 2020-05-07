import React from 'react'
import { data } from "../Data/StoryData.js"
import { Link } from 'react-router-dom'

const Story = (props) => {
        const storyData = data.find(item => item.id === props.id)

        const description = props.type === "headline" ? 
        (<div className="Story__headline">
                <div className="Story__category">{storyData.category}</div>
                <div className="Story__intro">{storyData.intro}</div>
                <div className="Story__date">{storyData.date}</div>
        </div>) : (
                <>
                <div className="Story__category">{storyData.category}</div>
                <div className="Story__intro">{storyData.intro}</div>
                <div className="Story__date">{storyData.date}</div>
                </>
        )

        return (
                // <div className="StoryBox">
                        <div className={`Story`}>
                                <Link onClick={e => e.preventDefault()} to="/story/1">
                                        <div className="Story__imageBox">
                                                <img className="Story__image" src={storyData.url} alt={storyData.intro}/>
                                        </div>
                                        { description }
                                </Link>
                        </div> 
                // </div>
        )

}

export default Story;