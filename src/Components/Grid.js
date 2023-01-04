import React from 'react'

function Grid(props) {

    return (
    <div className="grid">
        <div className="gridItems">{props.el.icon}</div>
        {props.el.title}
    </div>
    )
}

export default Grid