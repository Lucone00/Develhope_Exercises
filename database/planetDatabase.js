const express = require("express");
const app = express();

const { getAllPlanets, getSinglePlanet, createPlanet } = require("./server");

app.get("/", getAllPlanets);

app.listen(3000, () => {
  console.log("listening on 3000");
});
