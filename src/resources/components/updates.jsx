import { Fragment } from "react"

import { CircleButton } from "./modules/base/circleButton"
import { DinamicButton } from "./modules/base/dinamicButton"
import { SimpleButton } from "./modules/base/simpleButton"
import { SimpleSwitch } from "./modules/base/simpleSwitch"

export const Updates = ()=>{

  return (
    <Fragment>
      
      <CircleButton 
        img={require("../../icons/Add.svg")} 
        alt="Adicionar novo modulo"
        hImg={require("../../icons/Gear.svg")}/>

      <DinamicButton on
        img={require("../../icons/Add.svg")} 
        alt="Adicionar novo modulo"
        hImg={require("../../icons/Gear.svg")}/>

      <SimpleButton txt="Conectar"/>
      <SimpleSwitch/>
    </Fragment>
  )
}