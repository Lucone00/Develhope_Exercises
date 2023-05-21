import { useParams, Outlet } from "react-router-dom";
import GithubUser from "./GithubUser";

function ShowGithubUser() {
  const { username = "Lucone00" } = useParams();
  return (
    <>
      <GithubUser username={username} />
      <Outlet />
    </>
  );
}

export default ShowGithubUser;
