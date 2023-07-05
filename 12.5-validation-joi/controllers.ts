import { Request, Response } from "express";
import Joi from "joi";

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

const getAll = (req, res) => {
  res.status(200).json(planets);
};
const getOneById = (req, res) => {
  const { id } = req.params;
  const planet = planets.find((item) => item.id === Number(id));
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  id: Joi.Number().integer().required(),
  name: Joi.string().required(),
});

const create = (req, res) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id, name };

  const validate = planetSchema.validate(newPlanet);
  if (validate.error) {
    return res.status(400).json({ msg: validate.error });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "New planet created" });
  }
};

const updateById = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((planet) =>
    planet.id === Number(id) ? { ...planet, name } : planet
  );
  console.log(planets);
  res.status(200).json({ msg: "Planets updated" });
};

const deleteById = (req, res) => {
  const { id } = req.params;
  planets = planets.filter((planet) => planet.id !== Number(id));
  console.log(planets);
  res.status(200).json({ msg: "Planet was deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };