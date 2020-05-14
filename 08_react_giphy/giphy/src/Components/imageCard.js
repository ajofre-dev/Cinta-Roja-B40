
import React from 'react'
import './imageCard.css'

const imageCard = (props) => {
    return (
        <div className="card">
            <img src={props.img}/>
        </div>
    )
}

export default imageCard
