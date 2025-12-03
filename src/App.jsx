import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your value is {counter}</h2>

      <button
        onClick={() =>
          dispatch({ type: "counter/increase", payload: 1 })
        }
      >
        Increase +1
      </button>

      <button
        onClick={() =>
          dispatch({ type: "counter/decrease", payload: 1 })
        }
      >
        Decrease -1
      </button>
    </div>
  );
};

export default App;
