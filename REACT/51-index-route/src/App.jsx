import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <>
        <Link to="username">Go to Users</Link>
        <Routes>
          <Route path="/:username" element={<ShowGithubUser />} />
          <Route path="/" element={<GithubUserList />}>
            <Route index element={<p>Add a user and select it</p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
