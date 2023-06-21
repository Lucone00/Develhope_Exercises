const express = require("express");
const app = express();
const pgPromise = require("pg-promise");

const db = pgPromise()("postgresql://AlfioPaffo30@host:5432/mydatabase");

const createTable = async () => {
  await db.none(`DROP TABLE IF EXISTS mydatabase;
  CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  )`);
  await db.none(`INSERT INTO users(name) VALUES('Manfredi)`);
  await db.none(`INSERT INTO users(name) VALUES('Luca)`);
  await db.none(`INSERT INTO users(name) VALUES('Pietro)`);
};

createTable();
app.listen(3000, () => {
  console.log("listening");
});
