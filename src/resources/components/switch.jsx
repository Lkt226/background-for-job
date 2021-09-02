import { useState } from "react"
import "../root.css"
import "../css/switch.css"

export const Switch = (props)=>{

    props = {
        width: props.width || "60px",
        height: props.height || "34px",

        c_width: props.c_width || "30px",
        c_height: props.c_height || "30px",
        content: props.content || "var(--color-pr)",     
    }

    const style = {
        switch: {
            width: props.width,
            height: props.height,
        },

        content_switch: {
            width: props.c_width,
            height: props.c_height,

            background: props.content,
        }
    }

    const render = {
        checked: 
        <section  className="switch checked" style={style.switch}>
            <div className="content-switch" style={style.content_switch}></div>
        </section>,
        
        unChecked: 
        <section  className="switch unChecked" style={style.switch}>
            <div className="content-switch" style={style.content_switch}></div>
        </section>   
        
    }

    const [checked, setChecked] = useState(true)

    const getRender = (state)=> state === true ? render.checked : render.unChecked
    
    const handleOnClick = ()=>{
        checked === true ? setChecked(false) : setChecked(true)     
    }

    return (
        <section onClick={handleOnClick}>
            {getRender(checked)}
        </section>
    ) 
}