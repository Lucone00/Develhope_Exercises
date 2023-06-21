const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
  { id: 4, name: "Alice Lee" },
  { id: 5, name: "Mike Brown" },
];

app.get("/", (req, res) => {
  res.status(200).json(users);
});

app.get("/user/:id", (res, req) => {
  const id = req.params.id;
  const name = users.find((item) => item.id === Number(id));
  console.log("richiesta");
  res.status(200).json(user);
});

app.post("/createuser", (req, res) => {
  const user = req.body;
  console.log(user);
  users = [...users, user];
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  users.filter((item) => item.id !== Number(id));
  res.status(200).send('User deleted');
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
