/*Write a first promise that takes as parameter the variable isLogged . If the variable is true,
 then we return a random number from the resolve, otherwise we dispatch an error.
  We write a second promise that takes a variable of type number as a parameter.
   If the input parameter is greater than 0.5, in the resolve we must return the 
   following data: {name: "John", age: 24}, otherwise we must dispatch an error. 
   Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

const isLogged = true; */

const isLogged = true;

function myPromise() {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject(new Error("sorry, error"));
    }
  });
}

function findNumber(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Number parameter must be greater than 0.5"));
    }
  });
}

myPromise()
  .then((randomNumber) => findNumber(randomNumber))
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
