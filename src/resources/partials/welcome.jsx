import { Fragment, useEffect, useState } from "react"
import {onAuthStateChanged} from "firebase/auth"
import { onValue, set, update } from "@firebase/database";

import {Error404} from "./error404.jsx"
import {Loading} from "./loading.jsx"

import "../css/root.css"
import "../css/welcome.css"

import { authWithGoogle, auth, database, getUserInfos } from "../services/firebase.js"

//const uDB = database()
export const Welcome = (prop)=>{
  const [page, newPage] = useState(0)
  const [user, getUser] = useState(null)

  const getDB = (id)=>{
    id = id || user.id
    return database(id, "/info")
  }

  useEffect(()=>onAuthStateChanged(auth, (user)=>{
    if (user !== null)onValue(getDB(user.uid), (snapshot) => {  
      if(snapshot.exists() === false){
        set(getDB(user.uid), {
          id: user.uid,
          email: user.email,
          name: ""
        })
      }else{
        getUser(snapshot.val())
        if(snapshot.val().name === "") newPage(3) 
        else {
          getUserInfos(snapshot.val().name)
          newPage(4)
        }

      }
    });                                         
    else newPage(1)
  }),[])

  const render = {
    existAccount: ()=>{
      return (
      <section id="init-message">
        <h3>Seja muito bem vindo ao</h3>
      
        <span className="logo">
          <h3>For</h3>
          <h1 className="text-purple">(JOB)</h1>
        </span>
      
        <p>Vamos conectar na sua conta?</p>
      
        <div id="init-buttons">
          <button className="pry-button hid-button"
          onClick={act.exist.notAccountHandle}>Não tenho uma conta</button>
          
          <button className="sec-button"
          onClick={act.exist.connectHandle}>Conectar</button>
        </div>
      </section>)
    },
    selectMethod: ()=>{
      return(
        <section id="init-message">
          <h3>Escolha uma forma de se conectar</h3>

          <div id="connect-buttons">
            <button className="sec-button"
            onClick={act.method.google}>Google</button>
            <button className="hid-button"
            onClick={act.method.github}>GitHub</button>
            <button className="hid-button"
            onClick={act.method.apple}>Apple</button>
          </div>
        </section>
      )
    },
    addInformations: ()=>{
      return(
        <section id="init-message">
          <h4>Eu sou seu assistente</h4>

          <h3>
            Bartolomeu a
            <span className="text-green"
              >tartaruga {"=>"} <br />
              🐢</span
            >
          </h3>

          <h3>Qual seu nome ou apelido?</h3>

          <div id="init-input" className="form">
            <input type="text" id="add-name-input"
            placeholder="Seu nome preferido" />
            <button className="left-rounded pry-button"
            onClick={act.addInfo.name}>{">"}</button>
          </div>
        </section>
      )
    },
    welcomeAndInitLoading: ()=>{
      return (
        <section id="init-message">
          <h1>Seja bem vindo</h1>
          <h1>{user.name}</h1>
        </section>
      )
    },
  }

  function getRender(){
    switch (page) {
      case 1: case "existAccount":
        return render.existAccount()
      case 2: case "selectMethod":
        return render.selectMethod()
      case 3: case "addInformations":
        return render.addInformations()
      case 4: case "welcome":
        setTimeout(() => {
          prop.complete(true)
        }, 2500);
        return render.welcomeAndInitLoading()

      case 0: case "loading":
        return Loading()
    
      default:
        return null
    }
  }

  const act = {
    exist: {
      connectHandle: ()=> newPage(2 || "selectMethod"),
      notAccountHandle: ()=> authWithGoogle.logout() || console.log("Em manutenção")
    },
    method: {
      google: ()=> authWithGoogle.reconnect(),
      github: ()=> console.log("Em manutenção"),
      apple: ()=> console.log("Em manutenção")
    },
    addInfo: {
      name: ()=>{
        const name = document.querySelector("#add-name-input").value
        switch (name) {
          case null: case undefined: case "": case " ":
            console.log("Nome em branco")
            break;
        
          default:
            update(getDB(), {name: name})
            break;
        }
      }
    }
  }
  
  //authWithGoogle.logout()
  return (
    <Fragment>
      {getRender() || Error404()}
    </Fragment>
  )
}