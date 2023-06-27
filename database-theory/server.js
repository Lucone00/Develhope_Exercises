const express = require("express");
const app = express();
const {getAllPlanets, getSinglePlanet, createPlanet, updatePlanet} = require('./controllers.ts')
app.use(express.json())

app.get('/', getAllPlanets)


app.listen(3000, () =>{
    console.log('listening')
})