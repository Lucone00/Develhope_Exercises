import React from "react";
import useCounter from "./UseCounter";

function Counter() {
  const { counter, onIncrement, onDecrement, onReset } = useCounter();

  return (
    <div>
      <h2> Counter : {counter}</h2>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
      <button onClick={onReset}>Resetta</button>
    </div>
  );
}

export default Counter;
