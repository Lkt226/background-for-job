import "../css/root.css"
import "../css/modules.css"

import { Timer } from "../components/modules/timer"
import { TodoList } from "./modules/todoList"
import { useEffect, useState } from "react"
import { database, userinfo } from "../services/firebase"
import { onValue, update } from "@firebase/database"

import add from "../../icons/Add.svg"

export const Grid = ()=>{
  const [user, getUser] = useState()

  const db = (id,_user,path,)=>{
    id = id || ""
    _user = _user || user.id
    path = path || `/modules${id}`
    return database(_user, path)
  }

  const types = {
    row: (inner)=>{
      return <div id="grid" className="inline large">{inner}</div>
    },
    emp: <div className="module"><button className="circle"><img src={add} alt="Add modulo" /></button></div>,
    timer: <Timer/>,
    todoList: <TodoList/>,
  }

  useEffect(()=>{
    const id = userinfo[0], email = userinfo[1], name = userinfo[2]
    getUser({id: id, email: email, name: name })
    
    onValue(db("",id), (snap)=>{
      if(snap.exists()) console.log(snap.val())
      else {
        update(db("/shop",id), {
          myModules: ["todoList"]
        })
      }      
    })

  },[])

  const render = {
    job:()=>{
      const row = types.row
      const m0 = types.emp
      const m1 = types.timer
      const m2 = types.todoList

      const matriz = 
      [
        row([m2, m1, m0]),
        
      ]


      return matriz
    },

    get: ()=>{
      return  render.job()
    }
  }

  return (
    <main>
      {render.get()}
    </main>
  )
}