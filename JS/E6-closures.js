function printName() {
  const helloName = "Hello Jhon";

  function inner() {
    console.log(helloName);
  }
  return inner;
}

const helloName = printName();
helloName();