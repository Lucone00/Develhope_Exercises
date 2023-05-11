import React from "react";

function UncontrolledLogin() {
  const handleFormChanges = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log({
      username,
      password,
    });

  };

  return (

    <>
      <h2> UncontrolledLogin </h2>
      <form onSubmit={handleFormChanges}>
        <input type="text" name="username" autoFocus/>
        <input type="password" name="password" />
        <button type="submit"> Login </button>
      </form>
    </>
    
  );
}

export default UncontrolledLogin;
