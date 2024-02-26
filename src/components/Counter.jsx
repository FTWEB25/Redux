import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCounter, incCounter } from "../store/actions";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const handleInc = () => {
    dispatch(incCounter(1));
  };
  const handleDec = () => {
    dispatch(decCounter(1));
  };
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default Counter;
