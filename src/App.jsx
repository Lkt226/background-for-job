import { Fragment, useState } from "react";

import {Welcome} from "./resources/partials/welcome"
import {Content} from "./resources/partials/content"
import { Error404 } from "./resources/partials/error404";

import "./resources/css/mobile.css"

function App(props) {
  const [page, newPage] = useState(0)

  const getComplete = (get)=>{
    newPage(1)
  }

  const render = {
    noConnected: ()=> <Welcome complete={(e)=>getComplete(e)}/>,
    connected: ()=> <Content/>
  }

  function getRender() { 
    switch (page) {
      case 0: case "noConnected":
        return render.noConnected()
      case 1: case "connected":
        return render.connected()
    
      default:
        return null
    }
  }

  return (
    <Fragment>
      {getRender() || Error404()}
    </Fragment>
  )
}

export default App;
