export const util = {
  clearPath: (text)=>{
    return text.replace(/[^a-zA-Z0-9]/g,'_');
  },
  secToTime: (secs)=>{
    function addZero(time){
        return time >= 10 ? `${time}` : `0${time}`
    }
    
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
        "h": addZero(hours),
        "m": addZero(minutes),
        "s": addZero(seconds)
    };           

    return Number(obj.h)>0 ? `${obj.h}:${obj.m}:${obj.s}` : `${obj.m}:${obj.s}`
  }
}