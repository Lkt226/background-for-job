const config = {
  API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY
}

const path = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${config.API_KEY}`

function getPath (service, q){
  //Obrigatorio
  const part = "part=snippet"
  q = "&q="+q
  //Opcional
  const type = "&type=video"
  const content = "pesada"
  return `https://youtube.googleapis.com/youtube/v3/${service}?${part}${q}${type}&key=${config.API_KEY}`
}

const youtubeAPI = {
  auth: ()=>{

  },

  get: (service, q)=>{
    return fetch(getPath(service, q), {method: "GET"})
    .then(res => {
      if (!res.ok) return new Error (`error:${res.status} ${res.statusText}`)
      else if (res.status === 404) return new Error (`fail request: ${res}`)
      else return res.json()
    })
  }
}

export const get = {
  search: (content)=>{
    const items = []
    youtubeAPI.get("search", content)
    .then(res =>{
      items.push(Object.values(res))
      return res
    })
    return items
  }
}

//&order=viewCount&type=video&videoDefinition=high