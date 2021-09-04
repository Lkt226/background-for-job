import { Fragment, useState } from "react"

import "../root.css"
import "../css/modules.css"

import power from "../../icons/Power.svg"

export const Timer = ()=>{

    const [getTime, setTime] = useState(120)

    const [active, setActive] = useState(true)

    const time = {
        secondsToTime: (secs)=>{
            function addZero(time){
                return time > 10 ? `${time}` : `0${time}`
            }
            
            let hours = Math.floor(secs / (60 * 60));

            let divisor_for_minutes = secs % (60 * 60);
            let minutes = Math.floor(divisor_for_minutes / 60);
        
            let divisor_for_seconds = divisor_for_minutes % 60;
            let seconds = Math.ceil(divisor_for_seconds);
        
            let obj = {
                "h": addZero(hours),
                "m": addZero(minutes),
                "s": addZero(seconds)
            };           

            let format = Number(obj.h)>0 ? `${obj.h}:${obj.m}:${obj.s}` : `${obj.m}:${obj.s}`
            
            return format
            
        },count: active === true ? setInterval(() => {
            getTime >= 1 ? setTime(getTime -1) : setActive(false)
            clearInterval(time.count)
        }, 1000) : false 
   
    }

    const currentTime = time.secondsToTime(getTime)

    function onClickHandle (){
        active === true ? setActive(false) : setActive(true)
    }

    const render = {
        get: 
        <section id="timer" className="center-t">
            <h4>Timer</h4>
            <h1>{currentTime}</h1>
            <img onClick={()=>{onClickHandle()}} className="icon" src={power} alt="Start timer" />
        </section>
    }

    return (
    <Fragment>
        {render.get}
    </Fragment>
    )
}

export const ToDO = () =>{
    const DataBaseJson = {
        user: "lkt",
        list: [{
             id: Math.random(0,9999)*10,
             message: "",
             status: false
            }
        ]
    }


    const list = {
        createItem: (Json)=>{
            return Json.list


        }
    }

    const render = {
        input: <div>a</div>,
        list: <div>b</div>
    }
    
    console.log(list.createItem(DataBaseJson))

    return ( 
    <section id="ToDO">
        {render.input}
        {render.list}
    </section> 
    )
}