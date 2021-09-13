import { onValue, remove, set } from "@firebase/database";
import {useEffect, useState} from "react"
import {database} from "../../src/resources/services/firebase"

import { util } from "../../src/resources/services/utils";

import "../root.css"
import "../css/modules.css"

export function TodoList (){
    //Get input for add to do
    const input = document.querySelector("#inputTodo")

    //Contain list to do
    const [data, setData] = useState()

    //Get list to do in firebase
    useEffect(()=>{
        onValue(database("/list"), (snapshot) => {
          setData(
            snapshot.val() !== null ?
              Object.values(snapshot.val()) :
              null
          )
        });
    },[])

    //Contain all actions
    const action = {
      //Add to do on firebase
      addTodo: ()=>{
        const messages = input.value.split(", ") || input.value.split(",")

        messages.forEach(message => {
          const id = `todo-${(new Date()).getTime()}-${util.clearPath(message)}`;
        
          const permission = message !== "" ? true : false;

          permission === true ?
          set(database(`list/${id}`), {
            id: id,
            message: message,
            status: false  
          }) : console.log("Aconteceu algum erro!")
        });        
        
        input.value = ""
      },

      //Remove to do on firebase
      removeTodo: (id)=>{
        remove(database(`/list/${id}`))
      },

      //Update to do in firebase. on or off
      checkedTodo: (item)=>{
        set(database(`/list/${item.id}`), {
          id: item.id,
          message: item.message,
          status: item.status === false ? true : false  
        })
      }
    }

    //Create elements for put on screen
    const render = {
        //Input and button elements
        input: ()=>{return(
          <div className="todoItem">
              <input className="w-100" type="text" placeholder="adicione seu to do" 
              name="inputTodo" id="inputTodo"/>
              <button onClick={action.addTodo}>.+.</button>
          </div>
          )
        },

        //List to do elements
        list: ()=>{
          switch (data) {
            case undefined:
              return <h3 className="center-t"> carregando ...</h3>
          
            case null:
              return <h3 className="center-t c-error"> nenhum item encontrado!</h3>
            
              default:
              return data.map((item)=>{ 
                return (
                  <div key={item.id} className="todoItem">
                    <input onClick={()=>{action.checkedTodo(item)}} type="checkbox" defaultChecked={item.status}/>
                    {item.message}
                    <button onClick={()=>{action.removeTodo(item.id)}}>.x.</button>
                  </div>
                )})
          }       
        }
    }
    
    //Put elements in screen
    return ( 
      <section id="ToDO" className="module">
        <h2 className="c-purple bold">to do</h2>
        {render.input()}
        {render.list()}
      </section> 
    )
}