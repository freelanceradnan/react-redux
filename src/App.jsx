import { useDispatch, useSelector } from "react-redux"

const App=()=>{
   const counter = useSelector((store) => store.counter);
const theme = useSelector((store) => store.theme);

    const dispatch=useDispatch()
    return(
        <>
        <h1>your value is:{counter}</h1>
        <button onClick={()=>dispatch({type:"counter/increase",payload:1})}>increase +1</button>
        <button onClick={()=>dispatch({type:"counter/decrease",payload:1})}>decrease -1</button>
        <div className="all-colors">
            <button onClick={()=>dispatch({type:"CHANGE_BD",payload:'orange'})}>Change orange color</button>
            <div style={{ backgroundColor: theme.bgColor}}>
    <h2>Current Theme: {theme.bgColor}</h2>
</div>

        </div>
        </>
    )
}
export default App