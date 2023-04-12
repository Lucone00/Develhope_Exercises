/*Starting from the previous exercise, try to better handle all errors through 
the Error class and the catch method. Also add the finally method.*/

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
  .catch((error) => console.error(error))
  .finally(() => console.log('finally completed'));