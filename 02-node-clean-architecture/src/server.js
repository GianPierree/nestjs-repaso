import express from 'express';
import cors from 'cors';
import { UserRepository } from './infrastructure/user-repository.js';
import { UserController } from './infrastructure/user-controller.js';

const app = express();
app.use(express.json());
app.use(cors());

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users", (req, res) => userController.findAllUsers(req, res));
// delete
// update

app.listen(3000, () => console.log("🚀 Sever running http://localhost:3000"));