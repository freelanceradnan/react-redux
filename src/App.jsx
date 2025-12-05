import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./store/action-creator/counter";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <>
      <div className="total-section" style={{backgroundColor:theme.bgColor,color:theme.textColor}}>
        <div className="counter-app">
          <h2>you value is {counter}</h2>
          <button
            onClick={() => dispatch(increase(1))}
          >
            increase +1
          </button>
          <button
            onClick={() => dispatch(decrease(1))}
          >
            decrease -1
          </button>
        </div>
        <hr/>
        <div className="coustomized-app">
            <button onClick={()=>dispatch({type:"theme/CHANGE_BG",payload:"blue"})}>change red color</button>
           <button onClick={()=>dispatch({type:"theme/CHANGE_BG",payload:"yellow"})}>change yellow color</button>
           <hr/>
           <button onClick={()=>dispatch({type:"theme/reset"})}>RESET</button>
           <button onClick={()=>dispatch({type:"theme/CHANGE_TEXT",payload:"pink"})}>change text</button>
        </div>
      </div>
    </>
  );
};
export default App;
