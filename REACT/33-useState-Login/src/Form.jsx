import React, { useState } from "react";
import Login from "./Login";

function Form() {

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <h2>Form</h2>
      <input
        type="text"
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        onChange={handleInput}
      />
      <Login username={data.username} password={data.password} />
    </form>
  );
}

export default Form;
