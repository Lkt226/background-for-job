import { onValue, set } from "@firebase/database";
import {Fragment, useEffect, useState} from "react"
import {database} from "../services/firebase"

import {util} from "../services/utils"

import power from "../../icons/Power.svg"

import "../root.css"
import "../css/modules.css"

export const Timer = ()=>{

  //Vars, contain status, time for job and time for break
  const [jobTime, setJobTime] = useState(0)
  const [breakTime, setBreakTime] = useState(0)
  const [isJOB, setIsJOB] = useState(true)

  const [active, setActive] = useState(true)

  //Get time config on firebase
  useEffect(()=>{
     onValue(database("/timer"), (snapshot) =>{
      if (snapshot.val() !== null){
        currentTime(snapshot.val().config)

      }else{
        set(database("/timer"),{
          config: "20:5"
        })
        onValue(database("/timer"), (snapshot) =>{
          currentTime(snapshot.val().config)
        })
      }
    })   
  },[])
  
  //Translate value of config for seconds. 20:5 => 1200, 300
  function currentTime(value){
    setJobTime(value.split(":")[0]*60) 
    setBreakTime(value.split(":")[1]*60) 
    setIsJOB(true)

    setTime(value.split(":")[0]*60)
  }

  //Contain current time
  const [time, setTime] = useState(null)

  //Function for timer, count current value -1 every seconds
  function Timer(){
    if (time !== null && active === true){
      const timer = setInterval(()=>{
        if (time > 0){
          setTime(time-1)
        }else{
          setTime(isJOB === true ? breakTime : jobTime)
          setIsJOB(!isJOB)
        }
          clearInterval(timer)
        },1000)  
    }
  }

  //Calls
  Timer()

  //Create elements for screen
  const render = {
    get: ()=>{
      return(
        <Fragment>
            <h4>Timer</h4>
            <h1>{util.secToTime(time)}</h1>
            <img onClick={()=>{setActive(!active)}} className="icon" src={power} alt="Start timer" />
        </Fragment>
      )
    } 
        
  }
 
  //Get elements and put in screen
  return (
    <section id="timer" className="center-t module">
      {render.get()}
    </section>
  )
}