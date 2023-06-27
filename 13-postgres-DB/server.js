const express = require("express");
const app = express();
app.use(express.json());

const {
  getAllPlanets,
  getSinglePlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
} = require("./planets.js");

app.get("/api/planets", getAllPlanets);

app.get("/api/planets/:id", getSinglePlanet);

app.post("/api/planets", createPlanet);

app.put("/api/planets/:id", updatePlanet);

app.delete("/api/planets/:id", deletePlanet);

app.listen(3000, () => {
  console.log("Listening on port http://localhost:300");
});
