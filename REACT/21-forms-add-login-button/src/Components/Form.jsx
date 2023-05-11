import { useState } from "react";
import Login from "./Login";

function Form() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const setNameHandler = (event) => {
    setName(event.target.value);
  };

  const setPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <input type="name" name="username" onChange={setNameHandler} />
      <input type="password" name="password" onChange={setPasswordHandler} />
      <Login username={username} password={password} />
    </form>
  );
}

export default Form;