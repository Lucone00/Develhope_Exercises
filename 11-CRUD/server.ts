import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express()
const port = 3000;
app.use(express.json());

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth"
    },
    {
      id: 2,
      name: "Mars"
    },
  ];

app.get('/api/planets', (req, res) => {
  res.status(200).json(planets)
})

app.get('/api/planets/:id', (req, res) => {
  const {id} = req.params;
  const planet = planets.find(item => item.id === Number(id))
  res.status(200).json(planet)
})

app.post('/api/planets', (req, res) => {
  const { id, name } = req.body;
  const newPlanet = { id, name }
  planets = [...planets, newPlanet]
  res.status(201).json({msg: "New planet created"})
})

app.put('/api/planets/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((planet) => planet.id === Number(id) ? {...planet, name} : planet)
  console.log(planets)
  res.status(200).json({msg: 'Planets updated'})
})

app.delete('/api/planets/:id', (req, res) => {
  const { id } = req.params;
  planets = planets.filter(planet => planet.id !== Number(id));
  console.log(planets)
  res.status(200).json({msg: 'Planet was deleted'})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})