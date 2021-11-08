export function img (img){

  switch (typeof img) {
    case "object": 
    console.log(img.default)
    return img.default;

    default: return img;
  }
}