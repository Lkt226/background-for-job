import { Fragment } from "react"

import "../css/root.css"
import "../css/content.css"

import {Switch} from "./sub-components/switch"

export const Footer = ()=>{

  function getSwitch(status){
    console.log(status)
  }

  const render = {
    get: ()=>{
      return(
        <footer>
          <div>
            <span className="inline">
              <h3 className="text-purple">Playlist:</h3>
              <h5>#Musicas para acostumar</h5>
            </span>

            <p>#MIYACHI - MAINICHI 毎日(OFFICIAL VIDEO)</p>
          </div>

          {<Switch status={getSwitch}/>}
        </footer>
      )
    }
  }

  return (
    <Fragment>
      {render.get()}
    </Fragment>
  )
}