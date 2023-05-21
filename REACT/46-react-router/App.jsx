import Counter from "./components/Counter";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/counter">Counter</Link>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
