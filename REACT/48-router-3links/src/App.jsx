import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <Router>
      <>
        <p>
          <Link to="/user/Lucone00">Go to user</Link>
        </p>
        <p>
          <Link to="/user/yangus98">Go to user</Link>
        </p>
        <p>
          <Link to="/user/PuglisiAlfio">Go to user</Link>
        </p>
        <Routes>
          <Route path="user/:username" element={<ShowGithubUser />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
