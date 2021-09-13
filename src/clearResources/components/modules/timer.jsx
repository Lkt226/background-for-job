import { onAuthStateChanged } from "@firebase/auth"
import { onValue, set, update } from "@firebase/database"
import React, { Fragment, useEffect, useState } from "react"

import {auth, database} from "../../../resources/services/firebase"
import { util } from "../../../resources/services/utils"

import "../../css/root.css"
import "../../css/modules.css"

import reset from "../../../icons/Reset.svg"
import next from "../../../icons/Next.svg"

export const Timer = ()=>{
  const [time, setTime] = useState(null)
  const [timeouts, getTimeouts] = useState([])

  const [paused, setPause] = useState(false)

  const [status, newStatus] = useState("job")

  const [timer, getUser] = useState(120)

  const getDB = (id)=>{
    id = id 
    return database(id, "/configs")
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      onValue(getDB(user.uid), (snap)=>{
        if(snap.exists()) {
          getUser(snap.val().timer.split(":")); 
          setTime(snap.val().timer.split(":")[0]*60);
        }
        else {
          update(getDB(user.uid), {timer: "20:5"})
          getUser(snap.val().timer.split(":"))
          setTime(snap.val().timer.split(":")[0]*60)  
        }
      })
    })
  },[])

  const act = {
    reduceTime: ()=>{
      setTime(time -1)
    },

    timer: ()=>{
      const timer = setInterval(()=>{
        if (paused === false){  
          if (time > 0) act.reduceTime();
          else if (time === null) {}
          else act.nextTime()
          clearInterval(timer)

        }else if (paused === false){
          clearInterval(timer)
          console.log(timer)
        }
      }, 1000)

      timeouts.push(timer)
      
      if(paused === true){
        for (let i = 0; i < timeouts.length; i++) {
          clearInterval(timeouts[i])
        }
      }
    },

    reset: ()=>{
      paused === true ? setPause(false) : setPause(true)
      if(paused === true) act.setTime()  
    },

    setTime: ()=>{
      if(status === "break") setTime(timer[1]*60)
      else setTime(timer[0]*60)
    },

    nextTime: ()=>{
      setPause(true)   
      if(status === "job"){
        setTime(timer[1]*60);
        newStatus("break");
      }else{
        setTime(timer[0]*60);
        newStatus("job");
      } 
      setTimeout(()=>setPause(false),500)  
    }
  }

  const render = {
    job: ()=>{
      const textColor = paused === true ? "text-red" : "text-purple"
      return (
        <div className="module" id="timer">
          <h3>Timer</h3>
          <h1 className={textColor}>{util.secToTime(time)}</h1>
          <div className="inline">
            <button onClick={act.reset} className="only-img"><img className="icon" src={reset} alt="reset" sizes="2rem" /></button>
            <button onClick={()=>{act.nextTime()}} className="only-img"><img className="icon" src={next} alt="next"  sizes="3rem"/></button>
          </div>
        </div> 
      )
    },
    break: ()=>{
      const textColor = paused === true ? "text-red" : ""
      return (
        <div className="module" id="timer">
          <div className="inline center">
            <h2 className={textColor}>{util.secToTime(time)}</h2>
            <button onClick={act.reset} className="only-img"><img className="p-icon" src={reset} alt="reset"/></button>
            <button onClick={()=>{act.nextTime()}} className="only-img"><img className="p-icon" src={next} alt="next"/></button>
          </div>
        </div> 
      )
    },
    get: ()=>{
      return status === "job" ? render.job() : render.break()
    }
  }

  act.timer()
  
  return (
    <Fragment>
      {render.get()}
    </Fragment>  
  )
}