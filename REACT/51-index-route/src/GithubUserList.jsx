import React from "react";
import { useState } from "react";
import GithubUser from "./GithubUser";
import { Outlet } from "react-router-dom";

function GithubUserList() {
  const [user, setUser] = useState("");
  const [input, setInput] = useState([]);

  const handleChangeInput = (e) => {
    e.preventDefault()
    setInput([...input, user]);
    setUser("");
  };

  return (
    <div>
      <h2>Github find users</h2>
      <input onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleChangeInput}>Search</button>
      {input.map((element, index) => {
        return (
          <ul>
            <li key={index}>
              <Link to={element}>{element}</Link>
            </li>
          </ul>
        );
      })}
      <Outlet />
    </div>
  );
}

export default GithubUserList;
