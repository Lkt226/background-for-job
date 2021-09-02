import { Fragment, useState } from "react"

import "../root.css"

import power from "../../icons/Power.svg"

export const Timer = ()=>{

    const [getTime, setTime] = useState("10:23")

    const render = {
        get: 
        <section id="timer" className="center-t">
            <h4>Timer</h4>
            <h1>{getTime}</h1>
            <img className="icon" src={power} alt="Start timer" />
        </section>
    }

    return (
    <Fragment>
        {render.get}
    </Fragment>
    )
}