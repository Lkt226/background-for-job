import { Fragment } from "react"


export const Welcome = ()=>{
  
  const render = {
    //
    start: ()=>{
      return (
        <section id="init-message" className="f-bg-center"> 
          <div>
            <h3>Seja muito bem vindo ao</h3>
            <span className="r-bg">
              <h3>For</h3> 
              <h1 className="c-purple">(JOB)</h1>
            </span>

            <p>Vamos conectar na sua conta?</p>

            <div id="init-buttons" className="r-bg between">
              <button className="c-purple w-bg">Não tenho uma conta</button>
              <button className="c-white p-bg">Conectar</button>
            </div>
          </div>

          
        </section>
      )
    }
  }

  return (
    <Fragment>
      {render.start()}
    </Fragment>
  )
}