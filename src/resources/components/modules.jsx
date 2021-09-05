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
        <section id="timer" className="center-t module">
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

export const ToDO = (props) =>{
    let DataBaseJson = {
        user: "lkt",
        list: [
            {
                id: Math.random(0,9999)*10,
                message: "limpar o quarto",
                status: false
            },
            {
                id: Math.random(0,9999)*10,
                message: "limpar a sala",
                status: false
            }
        ]
    }
    
    const [dbList, setDbList] = useState(DataBaseJson)

    const getList = ()=>{
        return createItem(dbList)
    }

    const createItem = (Json)=>{
        const list  = Json.list
        return list.map((item)=>{
            return (
                <div className="todoItem" key={item.id}>
                    <input type="checkbox" name="complete" id="complete" defaultChecked={item.status}/>
                    {item.message}
                    <button onClick={()=>action.deleteItem(item)}>.x.</button>
                </div>
            )
        }) 
    }

    const [state, setState] = useState(getList)

    const action = {
        saveData: ()=>{
            DataBaseJson.list = dbList
            console.log(DataBaseJson)
        },
        deleteItem: (item)=>{
            const data = dbList
            for (let i = 0; i < data.list.length; i++) {
                if(data.list[i].id === item.id) data.list.splice(i, 1)
            }
            setState(getList)
        },

        addItem: ()=>{
            const todo = {
                id: Math.random(0,9999)*10,
                message: document.getElementById("text-todo").value,
                status: false,
            }

            dbList.list.push(todo)
            
            setState(getList)

            
            document.getElementById("text-todo").value = ""
        },
    }

    const render = {
        input:  
        <div className="todoItem">
            <input className="w-100" type="text" name="text-todo" id="text-todo"/>
            <button onClick={()=>action.addItem()}>.+.</button>
        </div>
        ,

        list: 
        <section>
            {state}
        </section>
    }
    return ( 
    <section id="ToDO" className="module">
        <h2 className="c-purple bold">to do</h2>
        {render.input}
        {render.list}
    </section> 
    )
}