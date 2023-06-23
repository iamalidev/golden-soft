import React, { useReducer } from "react";
import { reducer } from "../../Reducer";

const Counter = () => {
  const initialState = localStorage.getItem("count")
    ? Number(localStorage.getItem("count"))
    : 0;

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <pre>{localStorage.getItem("count")}</pre>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DECREMENT</button>
    </div>
  );
};

export default Counter;
