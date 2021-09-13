import {authWithGoogle, auth} from "../services/firebase"

import "../css/connect.css"
import { useState } from "react"

export const Connect = (props)=>{

  const [page, setPage] = useState(props.page)

  const action = {
    register: ()=>{
      setPage("login")
    },
    login: ()=>{
      setPage("register")
    },
    withGoogle: ()=>{
      authWithGoogle.login()
    }
  }

  const render = {
    login: ()=>{
      return(
        <div className="cardConnect">
          <div>
            <h1 className="c-purple start-t">Login</h1>
            <h4 className="c-gray end-t" onClick={action.login}>Register</h4>
          </div>
    
          <div className="cardInput">
            <input type="email" name="Email" id="Email" placeholder="E-mail" className="w-100"/>
            <button>.+.</button>
          </div>
    
          <div className="cardInput">
            <input type="password" name="Password" id="Password" placeholder="Senha" className="w-100"/>
            <button>.+.</button>
          </div>
    
          <div id="lastDiv">
            <p className="c-gray start-t">Esqueci minha senha</p>
            <button>Conectar</button>
          </div>
    
          <div>
            <button onClick={action.withGoogle}>google</button>
            <h5 className="c-purple center-t" onClick={action.login}>Não tenho uma conta</h5>
          </div>
        </div>
      )
    },

    register: ()=>{
      return (
        <div>
          <h1 className="c-purple center-t" onClick={action.register}>Register</h1>
        </div>
      )
    },
  }

  function renderGet(){
    switch (page) {
      case "login":
        //console.log("login")
        return render.login()
      case "register":
        //console.log("registers")
        return render.register()
      default:
        console.log("error page sem valor: 404")
        break;
    }
  }

  return (
    <section id="cardConnection" className={props.page}>
      {renderGet()}
    </section>
  )
}