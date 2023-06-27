const pgPromise = require("pg-promise");
const express = require("express");
const app = express();
const db = pgPromise()("psql://postgres:postgres@localhost:5432/postgres");
app.use(express.json());

const setupDB = async () => {
  await db.none(`
  DROP TABLE IF EXISTS planets;

  CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL 
  )`);

  await db.none(`INSERT INTO planets (name) VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);

  const planets = await db.many(`SELECT * FROM planets;`);
  console.log(planets);
};

setupDB();

const getAllPlanets = async (req, res) => {
  const planets = await db.many("SELECT * FROM planet;");
  res.status(200).json(planets);
};

const getSinglePlanet = async (req, res) => {
  const { id } = req.params;
  const planet = await db.one(`SELECT * FROM planets WHERE id = ${id}`);
  res.send(planet);
};

const createPlanet = async (req, res) => {
  const name = req.body.name;
  await db.none(`INSERT INTO planets (name) VALUES ($1) ($2)`, [name]);
  res.status(201).send("Planet creation successfully");
};

const updatePlanet = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).send("Update successful");
};

const deletePlanet = async (req, res) => {
  const { id } = req.params;
  await db.result(`DELETE from planets where id=$1`, id);
  res.status(200).send("planet deleted");
};

app.listen(3000, () => {
  console.log("listening");
});
