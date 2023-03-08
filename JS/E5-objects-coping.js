const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person1.firstName = "Simon";

console.log(person1);
console.log(person2);

/* assegnando l'oggetto 'person1' alla variabile 'person2' stiamo assegnando 
lo stesso oggetto alla variabile piuttosto che creandone uno nuovo, per questo 
modificando il nome, questo verrà modificato all'unico oggetto presente */
