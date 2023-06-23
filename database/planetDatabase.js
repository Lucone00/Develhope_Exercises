const express = require("express");
const app = express();
const {getAllPlanets} = require('./controllers/newController')

app.get('/', getAllPlanets)


app.listen(port, () =>{
    console.log('listening')
})