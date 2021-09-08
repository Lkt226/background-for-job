import {TodoList} from "../components/todoList"
import {Timer} from "../components/Timer"
import {Player} from "../components/player"
import "../css/main.css"

import {authWithGoogle, auth} from "../services/firebase"
import {onAuthStateChanged} from "firebase/auth"
import { util } from "../services/utils"
import { useState } from "react"

export const Main = (props)=>{

  const [connection, setConnection] = useState(null)

  props = {
    page: "job"
  }

  const configs = {
    checkConnection: ()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setConnection(true)
        } else {
          setConnection(false)
        }
      });
      if(connection === true) props.page = props.page
      else if (connection === false) props.page = "login"
      else props.page = "loading"
    }
  }

  const render = {  
    job: ()=>{
      return (
        <div className="column">
          <TodoList/>
          <Timer/>
          <div></div>
        </div> 
      )
    },
    break: ()=>{
      return (
        <Player/>
      )
    },
    loading: ()=>{
      return <h1 className="c-purple center-t"> Loading...</h1>
    },
    get: ()=>{
      switch (props.page) {
        case "job":
          return render.job()
        case "break":
          return render.break()
        case "login":
          return render.break()
        case "register":
          return render.break()
        case "loading":
          return render.loading()
        default:
          break;
      }
    }
  }


  configs.checkConnection()
  return (
      <main>
          {render.get()}
      </main>
  )
}