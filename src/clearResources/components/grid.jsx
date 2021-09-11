import "../css/root.css"
import "../css/modules.css"

export const Grid = ()=>{
  const types = {
    row: (inner)=>{
      return <div className="inline">{inner}</div>
    },
    emp: <div className="module">1</div>,
  }
  

  const render = {
    get: ()=>{
      const row = types.row
      const m0 = types.emp

      const matriz = 
      [
        row([m0, m0, m0]),
        
      ]


      return matriz
    }
  }

  return (
    <main>
      {render.get()}
    </main>
  )
}