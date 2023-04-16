const user = {
  id: 1,
  name: "John",
  age: 25,
};

const userFunction = JSON.stringify(user);
localStorage.setItem("key", JSON.stringify(user));
let result = localStorage.getItem("key");
let result2 = JSON.parse(result);
console.log(result2);
