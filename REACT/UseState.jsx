import React from "react";
import { useState } from "react";

function State({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = () => {
    setCounter((c) => c + 1);
  };
  const handleCounterReset = () => {
    setCounter(initialValue);
  };

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>reset</button>
    </>
  );
  
}

export default State;
