import { Fragment, useState } from "react"
import "../../css/root.css"
import "../../css/switch.css"

export const Switch = (props)=>{
  const [status, newStatus] = useState(false)

  //props.state(status)

  const render = {
    checked: ()=>{
      return (
        <section className={`switch ${status}`} onClick={act.toggle}>
          <div className="content-switch"/>
        </section> )
    }      
  }

  const act = {
    toggle: ()=>{
      status === "checked" ? newStatus("") : newStatus("checked")
      status === "checked" ? props.status(false) : props.status(true)
    }
  }

  return (
    <Fragment>
      {render.checked()}
    </Fragment>
  ) 
}