import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCount] = useState(0);

  const handleIncrease = useCallback(function handleIncrease() {
    setCount((count) => count + 1);
    console.log("increment");
  }, []);

  const handleDecrease = useCallback(function handleDecrease() {
    setCount((count) => count - 1);
  }, []);

  const handleReset = useCallback(function handleReset() {
    setCount(initialValue);
  }, []);

  return {
    counter: counter,
    increment: handleIncrease,
    decrement: handleDecrease,
    reset: handleReset,
  };
}
