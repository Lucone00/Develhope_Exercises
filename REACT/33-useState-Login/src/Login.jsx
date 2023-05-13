import React from "react";

function Login(props) {
  const onLogin = (event) => {
    event.preventDefault();
  };

  return (
    <button disabled={!props.username || !props.password} onClick={onLogin}>
      Login
    </button>
  );
}

export default Login;
