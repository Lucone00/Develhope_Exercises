const express = require("express");
const app = express();
app.use(express.json());

const {
  getAllPlanets,
  getSinglePlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
  uploadImage,
} = require("./planets.js");

const {logIn, signUp, logOut} = require('./users')
const authorize = require('./authorize')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})
const upload = multer({storage})

app.get("/api/planets", getAllPlanets);

app.get("/api/planets/:id", getSinglePlanet);

app.post("/api/planets", createPlanet);

app.put("/api/planets/:id", updatePlanet);

app.delete("/api/planets/:id", deletePlanet);

app.post('/api/planets/:id/image', upload.single("image"), uploadImage)

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp);
app.get("/api/users/logout", authorize, logOut);

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});
