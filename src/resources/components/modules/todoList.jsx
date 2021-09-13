import { Fragment, useEffect, useState } from "react"
import { onAuthStateChanged } from "@firebase/auth"
import { onValue, remove, update } from "@firebase/database"

import {auth ,database} from "../../services/firebase"
import { TodoItem } from "../sub-components/todoItem"

import "../../css/modules.css"
import "../../css/root.css"

import add from "../../../icons/Add.svg"
import { util } from "../../services/utils"



export const TodoList = ()=>{
  const [user, getUser] = useState(null)
  const [list, getList] = useState([])
  
  const db = (id,_user,path,)=>{
    id = id || ""
    _user = _user || user.id
    path = path || `/todo-list${id}`
    return database(_user, path)
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user !== null) onValue(db("",user.uid, "/info"),(snap)=>{
        if(snap.exists()) getUser(snap.val())
        else console.log("desconectado")

        onValue(db("",user.uid), (snap)=> {
          if(snap.exists()) getList(Object.values(snap.val()))
        })
      })
      else console.log("desconectado")
    })
  },[])

  const render = {
    get: ()=>{
      return <Fragment>
        <h3 className="text-purple">To do</h3>
        <ul className="w-100">
          {render.list()}
          {render.input()}
        </ul>
      </Fragment>
    },
    list: ()=>{
      return list.map((item)=>{
        const id = item.id, message = item.message, check = item.check
        return <TodoItem key={id} message={message} check={check}
        checkHandle={()=>{todoList.check(id, check)}} deleteHandle={()=>{todoList.delete(id)}}/>
      })
    },
    input: ()=>{
      return <div className={`todo-item inline-inverted`}>
        <button className={`todo-button add-todo`} onClick={todoList.set}>
          <img className="l-icon" src={add} alt="check todo" />
        </button>
        <input type="text" id="input-todo"/>
      </div>
    }
  }
 
  const todoList = {
    get: ()=>{
      onValue(db(), (snap)=>{
        getList(Object.values(snap.val() || {}) || []) 
      })
    },
    set: ()=>{
      const messages = document.querySelector("#input-todo").value
      
      messages.split(",").forEach(message => {
        const id = `todo-${(new Date()).getTime()}-${util.clearPath(message.trim())}`;
        
        update(db(`/${id}`), {
          id: id,
          message: message.trim(),
          check: false,
        })
      });
      document.querySelector("#input-todo").value = ""
    },
    check: (id, check)=>{
      update(db(`/${id}`),{check: !check})
    },
    delete: (id)=>{
      remove(db(`/${id}`))
      todoList.get()
    },
  }

  return (
    <section className="module" id="todo-list">
      {render.get()}
    </section>
  )
}