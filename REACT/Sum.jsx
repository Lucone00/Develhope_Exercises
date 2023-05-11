import React from "react";

function Sum({ numbers = [1,1] }) {
  return <h1> Sum : {numbers.reduce((total, num) => total + num)}</h1>;
}

export default Sum;
