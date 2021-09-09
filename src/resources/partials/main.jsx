import {TodoList} from "../components/todoList"
import {Timer} from "../components/Timer"
import {Player} from "../components/player"
import "../css/main.css"

import {authWithGoogle} from "../services/firebase"

export const Main = (props)=>{

  props = {
    page: "job"
  }

  const render = {  
    job: ()=>{
      return (
        <div className="column">
          <TodoList/>
          <Timer/>
          <div onClick={()=>{authWithGoogle.logout()}}>quit</div>
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
        case "loading":
          return render.loading()
        default:
          console.log("error page sem valor: 404")
          break;
      }
    }
  }

  return (
      <main>
          {render.get()}
      </main>
  )
}