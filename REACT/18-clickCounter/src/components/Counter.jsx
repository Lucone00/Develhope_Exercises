import React, { useState } from "react";


function Counter() {
  const [counter, setCount] = useState(0);

  const click = () => {
    setCount(counter + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={click}>+1</button>
    </>
  );
}

export default Counter;
