import React from "react";
import { useState } from "react";
import GithubUser from "./GithubUser";


// ALL'ATTENZIONE DI MANFREDI
// Adesso non funziona, ma prima funzionava seppur io non abbia modificato niente, non capisco perchè, il codice mi sembra giusto 

function GithubUserList() {
  const [user, setUser] = useState('');
  const [input, setInput] = useState([]);

  const handleChangeInput = () => {
    setInput([...input, user]);
    setUser("");
  };

  return (
    <div>
      <h2>Github find users</h2>
      <input onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleChangeInput}>Search</button>
      {input.map((newUser, index) => {
        return (
          <ul>
            <li index={index}>
              <GithubUser username={newUser} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default GithubUserList;
