import React from "react";
import Age from "./age";

export function Welcome(props) {
  return (
    <>
      <p>Welcome {props.name}!</p>
      <Age age = {18}/>
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age",
};

export default Welcome;
