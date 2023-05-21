import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
}

export default Counter;
