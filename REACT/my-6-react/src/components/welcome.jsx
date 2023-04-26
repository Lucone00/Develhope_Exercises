import React from "react";

export function Welcome(props, bProps) {
  return (
    <>
      <p>Welcome {props.name}!</p>
      <p>Your age is {bProps.age} </p>
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age"
};

export default Welcome;
