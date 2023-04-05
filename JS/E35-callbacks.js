/* Write a function called repeatHello which takes a callback as it's parameter. 
The callback function will simply print "Hello". The repeatHello function will have to 
execute the callback function with an interval of 1 second. The callback function must 
be an arrow function, can you also explain why? */

function repeatHello(callback) {
    setTimeout(callback, 1000)
}

repeatHello(() => {
  console.log('hello')
});

/*
Le arrow functions hanno alcuni vantaggi rispetto alle funzioni regolari, 
come il collegamento automatico allo scope genitore e un return 
implicito se il corpo della funzione è una singola espressione. */