export const Button = ({msg,cssclass, fn})=>{
  return (<button onClick={fn} className={cssclass}>{msg}</button>)
}