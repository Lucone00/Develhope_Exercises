import React from "react";
import Age from "./age";

export function Welcome(props, bProps) {
  return (
    <>
      <p>
        Welcome <strong> {props.name}</strong>!
      </p>
      <Age age='115'/>
    </>
  );
}

Welcome.defaultProps = {
  name: "name here",
  age: "age",
};

export default Welcome;
