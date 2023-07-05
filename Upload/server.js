const express = require("express");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
});

const upload = multer({ storage: "uploads/" });

app.use(express.json());

const {
  getAllPlanets,
  getSinglePlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
  createImage,
} = require("./planets.js");

app.get("/api/planets", getAllPlanets);
app.get("/api/planets/:id", getSinglePlanet);
app.post("/api/planets", createPlanet);
app.put("/api/planets/:id", updatePlanet);
app.delete("/api/planets/:id", deletePlanet);

app.post("/api/planets/:id/image", upload.single('image'), createImage);

app.listen(3000, () => {
  console.log("Listening on port http://localhost:300");
});
