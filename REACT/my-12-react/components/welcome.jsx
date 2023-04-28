import React from "react";
import Age from "./age";

export function Welcome(props) {
  return (
    <>
      <p>Welcome {props.name}!</p>
      {props.name === "Jhon" && props.age > 18 && props.age < 65 ? (
        <p>Your age is {props.age}</p>
      ) : (
        <p>Error: name, age</p>
      )}
      <Age />
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age",
};

export default Welcome;
