import React, { useState } from 'react'

function useForceUpdate() {
    const [force, setForce] = useState(0)
    return () => setForce(force => force + 1)
}

function Grid(props) {

    const forceUpdate = useForceUpdate();

    function del() {
        props.el.show=false
        forceUpdate()
    }

    return (
        <span>
            {props.el.show && <div className="grid">
                    <div>{props.el.icon}</div>
                    <span>{props.el.title}</span>
                    <div><button onClick={() => del()}>Delete</button></div>
            </div>}
        </span>
    )
}

export default Grid