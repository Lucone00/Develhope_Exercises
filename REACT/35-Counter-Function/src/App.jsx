import Counter from "./Counter";
import { useState } from "react";

function App() {

  const [showCounter, setShowCounter] = useState();

  function handleShowCounter() {
    setShowCounter((value) => !value);
  }

  return (
    <>
      {showCounter ? <Counter/> : null}
      <button onClick={handleShowCounter}>Counter</button>
    </>
  );
}

export default App;
