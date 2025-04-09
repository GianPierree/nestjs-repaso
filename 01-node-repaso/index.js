const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [
  "Gian Munoz",
  "José Perez",
  "Pablo Vazques"
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/user", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(users)
})

app.listen(3000, () => {
  console.log("🚀 API corriendo en http://localhost:3000");
});