import { Fragment } from "react"
import { Switch } from "../components/switch"


//"https://www.youtube.com/embed/l0U7SxXHkPY"

export const Music = ()=>{
  const list = "https://www.youtube.com/embed/playlist?list=PLYfVcd9wMc0XRlb3q6wCUUKmrQoIK32li"

  function invisible(){
    return <div dangerouslySetInnerHTML={{ __html: `<iframe id="play-music" src=${list} />`}}/>;
    
  }

  return (
    <Fragment>
      <section id="music">
          {invisible()}
          <span>
              <h3 className="c-purple">
                  PlayList:
              </h3>
              <p>#Nome da playlist</p>
          </span>
          <p className="upper-c end-t"> #Nome da Musica</p>
      </section>
      <Switch id="music-player"/>
    </Fragment>
  )
}