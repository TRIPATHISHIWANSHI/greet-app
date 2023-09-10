export const Message = ({msg, myclass})=>{
  const cssclass = `alert alert-${myclass} text-center`;
  return (<h3 className={cssclass}>{msg}</h3>)
}