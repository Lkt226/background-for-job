import { Fragment } from "react"

export const SimpleButton = (props)=>{

  const scaffold = {
    size: props.size || 8,
    scale: props.scale || "rem",
    textColor: "var(--color-purple)",
    background: "var(--color-se)",
  }

  const style = {
    button:{
      background: scaffold.background,
      width: scaffold.size+scaffold.scale,
      height: scaffold.size/4+scaffold.scale,   
    },
    text:{
      padding: 0,
      color: scaffold.textColor,

      fontWeight: "bold",
    }
  }

  return (
    <Fragment>
      <button style={style.button}>
        <p style={style.text}>{props.txt}</p>
      </button>
    </Fragment>
  )
}