import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const handleCounterUp = () => {
    return setCount(count + 1);
  };

  return (
    <>
      <h2> Counter {count}</h2>
      <button onClick={handleCounterUp}>+1</button>
    </>
  );
}

export default Counter;
