import React from 'react'

function Grid(props) {

    const name = props.name
    const icon = props.icon

    return (
    <div className="grid">
        <div className="gridItems"><img src={props.icon}></img></div>
        {props.name}
    </div>
    )
}

export default Grid