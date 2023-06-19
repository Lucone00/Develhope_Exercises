const express = require("express");
const app = express();


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

app.get("/user/:id", (req, res) =>{
    const {id} = req.params
    console.log(req.params)
    const userID = users.find((e) =>{
        return e.id === parseInt(id)
    })
    res.status(200).json(userID)
})

app.post("/user/newuser", (req, res) =>{
    const bodyUser = req.body;
    users = [...users, bodyUser];
    res.status(201).send('new user created')
})

app.listen(3000, () =>{
    console.log('Server is running on port: http://localhost:3000');
})

