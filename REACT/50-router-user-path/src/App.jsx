import { BrowserRouter as Router, Link, Route, Routes, Outlet} from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <Router>
      <>
      <Routes>
            <Route path="list" element={<GithubUserList/>}>
              <Route path="/:username" element={<ShowGithubUser/>}/>
              <Outlet/>
            </Route>
          </Routes>
          <p><Link to="list">List</Link></p>
          <p><Link to="list/Lucone00">My Github profile</Link></p>
      </>
    </Router>
  );
}

export default App;
