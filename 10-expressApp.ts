const express = require("express");
const morgan = require("morgan");
const app = express();

app.use().json();

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (res: any, req: any) => {
  res.json(planets);
});

app.listen(3000, () => {
  console.log("Server listening on port http:/localhost:3000");
});
