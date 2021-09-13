import { Fragment, useState } from "react"

import "../css/root.css"
import "../css/content.css"

import gear from "../../icons/Gear.svg"
import { Timer } from "./modules/timer"

export const Header = (props)=>{

  const [menu, statusMenu] = useState("hidden")

  const render = {
    get: ()=>{
        return(
        <header>
          <img  src={gear} alt="configurations"
                sizes="5rem" srcset=""
                onClick={act.toggleMenu}/>

          <span className="logo">
            <h3>For</h3> <h1 className="text-purple">(JOB)</h1>
          </span>
        </header>
      )
    },
    menu: ()=>{
      return (
        <menu id="config" className={`config ${menu}`}>
          <section className="header inline">
            <img  src={gear} alt="configurations"
                  className="icon" srcSet=""
                  onClick={act.toggleMenu}/>

            <h5>Configurações</h5>
          </section>

          <section className="main">
            {render.configList()}
          </section>
        </menu>
      )
    },
    configList: ()=>{
      return configs.map((item, id)=>{
        const large = item.isLarge === true ? "large" : ""
        const special = item.special !== null ?
        <p className="text-purple">{item.special}</p> : ""

        return <span key={id} className={`inline ${large}`} id="Pomorodo">
            <p>{item.name}:</p>
            {special}
            <h5 className="text-purple editable" 
            contentEditable="true">{item.edit}</h5>
          </span>
      })
      
    }
  }

  const configs = [
    {
      name: "Pomodoro",
      edit: "20:5",
      special: null,
      isLarge: false,
    },
    {
      name: "Playlist",
      edit: "PLYfVcd9wMc0XRlb3q6wCUUKmrQoIK32li",
      special: "=",
      isLarge: true,
    }
  ]

  const act = {
    toggleMenu: ()=>{
      if(menu === "hidden") statusMenu("")
      else statusMenu("hidden")
    }
  }

  return (
    <Fragment>
      {render.get()}
      {render.menu()}
    </Fragment>
  )
}