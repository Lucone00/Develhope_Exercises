import React from "react";
import Age from "./age";

export function Welcome(props) {
  return (
    <>
      <p>Welcome {props.name}!</p>
      {props.age > 18 && props.age < 65 ? <p>Your age is {props.age}</p> : <p>age must be greater than 18 and less than 65 </p>}
      <Age />
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age",
};

export default Welcome;
