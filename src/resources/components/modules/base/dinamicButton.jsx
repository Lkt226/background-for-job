import { Fragment, useState } from "react"

import { img } from "../../javascript/srcHelper"


export const DinamicButton = (props)=>{

  const [actived, active] = useState(false)

  const scaffold = {
    size: props.size || 2.5,
    scale: props.scale || "rem",
    background: "var(--color-se)",
  }

  const style = {
    button: {
      on:{
        width: scaffold.size+scaffold.scale,
        height: scaffold.size+scaffold.scale,
        borderRadius: "100% 100% 100% 0",
      },
      off:{
        width: scaffold.size+scaffold.scale,
        height: scaffold.size+scaffold.scale,
        borderRadius: "0 100% 100% 100%",
      },
    },
    img: {
      width: scaffold.size <= 7 ? "100%" : "80%",
      padding: 0,
    }
  }

  let src = {
    img: img(props.img)
  }

  const action = {
    getActive(){
      const _actived = props.on !== undefined ? actived : !actived

      if (_actived === true){
        src.img = img(props.img)
        return style.button.on
      }else{
        src.img = img(props.hImg) || img(props.img)
        return style.button.off
      }
    },
  }

  return (
    <Fragment>
      <button style={action.getActive()} onMouseEnter={()=>{active(true)}} onMouseLeave={()=>{active(false)}}>
        <img style={style.img} src={src.img} alt={props.alt} />
      </button>
    </Fragment>
  )
}