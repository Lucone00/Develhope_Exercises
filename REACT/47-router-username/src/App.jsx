import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <Router>
      <>
        <Link to="/user/Lucone00">Go to User</Link>
        <Routes>
          <Route path="user/:username" element={<ShowGithubUser />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
