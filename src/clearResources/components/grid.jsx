import "../css/root.css"
import "../css/modules.css"

import { Timer } from "../components/modules/timer"
import { useState } from "react"
import { TodoList } from "./modules/todoList"

export const Grid = ()=>{

  const types = {
    row: (inner)=>{
      return <div className="inline large">{inner}</div>
    },
    emp: <div className="module">1</div>,
    timer: <Timer/>,
    todoList: <TodoList/>,
  }
  

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