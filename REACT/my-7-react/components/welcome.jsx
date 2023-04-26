import React from "react";

export function Welcome(props, bProps) {
  return (
    <>
      <p>
        Welcome <strong> {props.name}</strong>!
      </p>
      <p>Your age is {bProps.age} </p>
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age",
};

export default Welcome;
