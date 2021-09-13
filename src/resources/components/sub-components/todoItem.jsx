import { Fragment, useState } from "react"

import trash from "../../../icons/Trash.svg"
import accept from "../../../icons/Accept.svg"

import {auth ,database} from "../../services/firebase"

export const TodoItem = (props)=>{

  const render = {
    get: ()=>{

      const checked = props.check === true ? "todo-checked" : ""

      return (
        <Fragment>
          
          <button onClick={()=>{props.deleteHandle()}} className="todo-button">
            <img className="l-icon" src={trash} alt="delete todo" />
          </button>

          <h5 onClick={()=>{props.checkHandle()}} className={`todo-item-text ${checked}`}>{props.message}</h5>

        </Fragment>
      )
    }
  }

  return (
    <li className="todo-item" key={props.id}>
      {render.get()}
    </li>
  )
}