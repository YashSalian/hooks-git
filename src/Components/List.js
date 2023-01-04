import React, { useState } from 'react'

function List(props) {

    const name = props.name
    const icon = props.icon

    return (
    <div className="list">
        <img src={props.icon}></img>
        {props.name}
    </div>
    )
}

export default List