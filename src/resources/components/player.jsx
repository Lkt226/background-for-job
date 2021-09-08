

import {get} from "../services/youtube"

export const Player = (props)=>{
  const path = "https://www.youtube.com/embed/"

  props = {
    url: `d6cSECUay3s`,
    complete: `${path}d6cSECUay3s`
  }

  console.log(get.search("teste"))

  const action = {
    changeURL: (newUrl)=>{
      props.url = newUrl === undefined ? props.url : newUrl
      props.complete = path+props.url
    }
  }
 
  //action.changeURL("video")
  
  return(
    <iframe 
      width="100%"
      height="100%"

      src={props.complete} 
      title="YouTube video player" 
      frameBorder="0" 

      allow="accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture" 
      allowFullScreen/>
  )
}