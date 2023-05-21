import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="user">
            <Route path=":username" element={<ShowGithubUser />} />
            <Route path="list" element={<GithubUserList />}>
              <Route index element={<p>Add a user and select it</p>} />
            </Route>
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
