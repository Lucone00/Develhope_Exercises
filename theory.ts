let persona: {
  nome: string;
  cognome: string;
  eta: number;
  indirizzo: {
    via: string;
    civico: number;
    città: string;
  };
};

persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 19,
  indirizzo: { via: "", civico: 0, città: "" },
};

function getData(data: { id: number; username: string; password: string }) {
  return console.log(data.id);
}
getData({ id: 1, username: "", password: "" });

const arrgh: number[] = [1, 2, 3];
const arrghh: string[] = ["", ""];
const arghhh: any[] = [{}, 45, "", false];

const game = {
  id: "",
  accesCode: "",
  players: ["bobby", "luca"],
};

const tupla: [number, number] = [1, 2]; //un array di valori limitati e ben definiti

// Typescript 06 enum, any, union e custom type (alias)

//any
let prova: {
  nome: any;
};
// union
let union: string | number = 1;
const arrgghh: (string | number)[] = ["", 45, "", 34, ""];

// custom type

type Person = {
  nome: string;
  cognome: string;
  eta: number;
};
let person: Person;
person = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 19,
};
function findPerson(person: Person) {}

//enum

/* enum Ruolo {
  admin,
  user,
  guest,
} */
enum Ruolo {
  admin = "admin",
  user = "user",
  guest = "guest",
}

const user = {
  nome: "luca",
  cognome: "rossi",
  ruolo: Ruolo.admin,
};
if (user.ruolo == Ruolo.admin) {
}

//Interface

interface Prova {
  nome: string;
  saluta(): void;
}

type Provaa = {
  nome: string;
  saluta();
};

// Generics

const arr: Array<string> = ["ecrv", "dev"];

function creaArray<T extends string | number>(items: T[]): T[] {
  return new Array().concat(items);
}
const arr1 = creaArray<string | number>(["q", "e", "r", 9]);
