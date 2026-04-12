
export const formatTimer = (second:number)=>{
  const min = Math.floor(second / 60);
  const sec =  second % 60
  return `${min}:${sec <10 ? "0" : ""}${sec}`
}