import React from "react";
import useGithubUser from "./useGithubUser";

function GithubUser() {
  const { user } = useGithubUser({ username: "Lucone00" });

  return (
    <>
      {user && (
        <>
          <h2>{user.login ? user.login : "username error"}</h2>
          <h3>
            {user.id ? user.id : "id error"}
            {user.name ? user.name : "username missing"}
          </h3>
        </>
      )}
    </>
  );
}

export default GithubUser;
