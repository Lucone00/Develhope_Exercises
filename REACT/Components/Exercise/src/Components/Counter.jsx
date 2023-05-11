import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const hanldeUpCounter = () => {
    setCount(count + 1);
  };

  const handleDownCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={hanldeUpCounter}>up</button>
      <button onClick={handleDownCounter}>down</button>
    </div>
  );
}

export default Counter;
