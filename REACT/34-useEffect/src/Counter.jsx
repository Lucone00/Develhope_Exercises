import React, { useState, useEffect } from "react";

function Counter(props) {

  const [count, setCount] = useState(0);

  const handleCounterUp = () => {
    return setCount(count + 1);
  };

  useEffect(() => {
    props.onCounterChange(count);
  }, [count, props.onCounterChange]);

  return (
    <>
      <h2> Counter {count}</h2>
      <button onClick={handleCounterUp}>+1</button>
    </>
  );
}

export default Counter;
