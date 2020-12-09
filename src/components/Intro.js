import React from 'react'

function Intro(props) {

    return (
        <div className="intro">
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>
    )
}

export default Intro
