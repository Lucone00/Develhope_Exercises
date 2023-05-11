import { useRef } from "react";
import { useState } from "react";
import Login from "./Login";

function Form() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const setNameHandler = (event) => {
    setName(event.target.value);
  };

  const setPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emptyPassword = useRef("");
  const emptyUsername = useRef("");

  return (
    <form>
      <input
        type="name"
        name="name"
        onChange={setNameHandler}
        ref={emptyUsername}
      />
      <input
        type="password"
        name="password"
        onChange={setPasswordHandler}
        ref={emptyPassword}
      />
      <Login
        name={name}
        password={password}
        emptyPassword={emptyPassword}
        emptyUsername={emptyUsername}
      />
    </form>
  );
}

export default Form;
