function printName() {
  let helloName = "Hello Jhon";

  function inner() {
    console.log(helloName);
  }
  setTimeout(inner, 1000);
}

printName();

