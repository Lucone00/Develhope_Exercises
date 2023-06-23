const express = require("express");
const app = express();
const pgPromise = require("pg-promise");

const db = pgPromise()("postgresql://AlfioPaffo30@host:5432/mydatabase");

const createTable = async () => {
  await db.none(`DROP TABLE IF EXISTS mydatabase;
  CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
  )`);
  await db.none(`INSERT INTO users(name) VALUES('Manfredi)`);
  await db.none(`INSERT INTO users(name) VALUES('Luca)`);
  await db.none(`INSERT INTO users(name) VALUES('Pietro)`);
};

createTable();

const getAllPlanets = async (req, res) => {
  const planets = await db.many("SELECT * FROM planet;");
  res.status(200).send(planets);
};

const getSinglePlanet = async (req, res) => {
  const { id } = req.params;
  const planet = await db.one(`SELECT * id WHERE ID = ${id}`);
  res.send(planet);
};

const createPlanet = async (req, res) => {
  const name = req.body.name;
  await db.none(`INSERT INTO planets (name) VALUES ($1) ($2)`, [name]);
  res.status(201).send("Planet creation successfully");
};
app.listen(3000, () => {
  console.log("listening");
});

module.exports = {getAllPlanets, getSinglePlanet, createPlanet}