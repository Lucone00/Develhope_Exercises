import React from "react";

function Login(props) {
  const onLogin = (event) => {
    event.preventDefault();
  };
  let values = {
    name: props.name,
    password: props.password,
  };
  console.log(values);

  const resetFunction = (event) => {
    event.preventDefault();
    props.emptyUsername.current.value = "";
    props.emptyPassword.current.value = "";
  };

  return (
    <>
      <button disabled={!props.name || !props.password} onClick={onLogin}>
        Login
      </button>
      <button onClick={resetFunction}>Reset</button>
    </>
  );
}

export default Login;
