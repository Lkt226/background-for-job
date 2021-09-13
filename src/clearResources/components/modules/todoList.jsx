import { Fragment, useState } from "react"

import "../../css/modules.css"
import "../../css/root.css"

import trash from "../../../icons/Trash.svg"
import accept from "../../../icons/Accept.svg"
import add from "../../../icons/Add.svg"

export const TodoList = ()=>{

  const [hover, setHover] = useState(null)
  
  const render = {
    get: ()=>{
      return (
        <Fragment>
          <h3 className="text-purple">To do</h3>
          <ul className="w-100">
            {render.item()}
            {render.item()}
          </ul>
          {render.input()}
        </Fragment>
      )
    },
    item: ()=>{
      let checked = true
      const hidden = checked === true ? "" : "hidden"
      const check = checked === true ? "checked-todo" : ""

      return ( //// Transformar em um subcomponent com todo em props
        <li className={`inline todo-item}`}>
          <button onClick={()=>{checked = act.check(check)}} className={`todo-button check-todo ${hidden}`}>
            <img className="l-icon" src={accept} alt="check todo" />
          </button>

          <h5 onClick={()=>{checked = act.check(checked)}} className={`todo-item-text ${check}`}>Todo</h5>
          
          <button onClick={()=>{act.delete()}} className="todo-button">
            <img onMouseEnter={(e)=>{getHover.delete(e)}} onMouseOut={(e)=>{getHover.noDelete(e)}}
            className="l-icon" src={trash} alt="delete todo" />
          </button>
        </li>
      )
    },
    input: ()=>{
      const addHover = hover === "add" ? "hoverAdd" : ""
      return (
        <div className={`inline todo-item ${addHover}`}>
          <input type="text" />
          <button onMouseOver={()=>{setHover("add")}} onMouseLeave={()=>{setHover(null)}}
           className={`todo-button add-todo`}>
            <img className="l-icon" src={accept} alt="check todo" />
          </button>
        </div>
      )
    }
  }

  const getHover = {
    delete: (e)=>{
      const item = e.target.parentElement.parentElement
      item.classList.add("hoverDelete")
    },
    noDelete: (e)=>{
      const item = e.target.parentElement.parentElement
      item.classList.remove("hoverDelete")
    },
  }

  const act = {
    check: (checked)=>{
      checked === false ? checked = true : checked = false
      console.log(checked)
      return checked
    },
    delete: ()=>{
      console.log("delete")
    }
  }
  
  return (
    <section className="module" id="todo-list">
      {render.get()}
    </section>
  )
}