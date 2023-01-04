import React, { useState } from 'react'

function List(props) {

    return (
    <div className="list">
        {props.el.icon}
        <span>{props.el.title}</span>
    </div>
    )
}

export default List