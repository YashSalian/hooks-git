import React, { useState, useEffect } from 'react'

function useForceUpdate() {
    const [force, setForce] = useState(0)
    return () => setForce(force => force + 1)
}

function List(props) {

    const forceUpdate = useForceUpdate();

    function del() {
        props.el.show=false
        forceUpdate()
    }

    return (
    <div>
        {props.el.show && <div className="list">
            {props.el.icon}
            <span>{props.el.title}</span>
            <button onClick={() => del()}>Delete</button>
        </div>}
    </div>
    )
}

export default List