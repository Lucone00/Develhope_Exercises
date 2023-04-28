import React from "react";
import Age from "./age";

export function Welcome(props) {
  return (
    <>
      <p>Welcome {props.name}!</p>
      {props.age > 18 ? <p>Your age is {props.age}</p> : <p>age under 18 </p>}
      <Age />
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age",
};

export default Welcome;
