/* Starting from the previous exercise, we want to add to our function repeatHello, 
a clearInterval after 5 seconds, could you do that?

The callback function must be an arrow function, can you also explain why? */

function repeatHello(callback) {
  const intervalID = setInterval(callback, 1000);
  setTimeout(() => {
    clearInterval(intervalID)
  },5000)
}

repeatHello(() => {
  console.log("hello");
});
