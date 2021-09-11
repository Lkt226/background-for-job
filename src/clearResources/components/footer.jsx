import { Fragment } from "react"

import "../css/root.css"
import "../css/content.css"

import {Switch} from "./sub-components/switch"

export const Footer = ()=>{

  const render = {
    get: ()=>{
      return(
        <footer>
          <div>
            <span class="inline">
              <h3 class="text-purple">Playlist:</h3>
              <h5>#Musicas para acostumar</h5>
            </span>

            <p>#MIYACHI - MAINICHI 毎日(OFFICIAL VIDEO)</p>
          </div>

          {<Switch/>}
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