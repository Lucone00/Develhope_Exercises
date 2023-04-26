import React from "react";

export function Welcome(props) {
  return <p>Welcome {props.name}!</p>;
}

Welcome.defaultProps = {
  name : 'name here'
}

export default Welcome