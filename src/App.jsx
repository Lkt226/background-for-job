import "./resources/css/body.css"

import { Fragment, useState } from "react";

import {Header} from "./resources/partials/header"
import {Main} from "./resources/partials/main"
import {Footer} from "./resources/partials/footer"
import {Connect} from "./resources/partials/connection"

import {auth, getUser} from "./resources/services/firebase"
import {onAuthStateChanged} from "firebase/auth"

function App(props) {

  const [connection, setConnection] = useState(null)

  props = {
    page: "content"
  }


  const configs = {
    checkConnection: ()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setConnection(true)
          getUser.push(user.displayName.replace(" ",""))
        } else {
          setConnection(false)
        }
      });
      if(connection === true) props.page = props.page
      else if (connection === false) props.page = "connect"
      else props.page = "loading"
    }
  }

  const render = {  
    content: ()=>{
      return (
        <Fragment>
          <Header/>
          <Main/>
          <Footer/>
        </Fragment>
      )
    },

    connect: ()=>{
      return (<Connect page="register"/>)
    },

    loading: ()=>{
      return (
        <Fragment>
          <Header/>
          <h1 className="c-purple center-t"> Loading...</h1>
          <Footer/>
        </Fragment>
      ) 
    },

    get: ()=>{
      switch (props.page) {
        case "content":
          return render.content()
        case "connect":
          return render.connect()
        case "loading":
          return render.loading()
        default:
          console.log("error page sem valor: 404")
          break;
      }
    }
  }
  
  configs.checkConnection()
  return (
    <Fragment>
      {render.get()}  
    </Fragment>
  )
}

export default App;
