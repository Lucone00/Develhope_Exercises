import Welcome from "./components/welcome";
import Counter from "./components/counter";
import React from "react";

function App() {
  return (
    <div>
      <Welcome name="Luca" />
      <Counter increment={1} interval={1000} />
    </div>
  );
}

export default App;
