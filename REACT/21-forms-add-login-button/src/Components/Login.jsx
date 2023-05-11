import React from "react";

function Login(props) {
  const onLogin = (event) => {
    event.preventDefault();
  };
  let values = {
    username: props.name,
    password: props.password,
  };
  return (
    <button disabled={!props.name || !props.password} onClick={onLogin}>
      Login
    </button>
  );
}

export default Login;
