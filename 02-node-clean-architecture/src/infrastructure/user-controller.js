import { CreateUser } from "../application/create-user.js";
import { FindAllUsers } from "../application/find-all-users.js";

export class UserController {
  constructor(userRepository) {
    this.createUserCase = new CreateUser(userRepository);
    this.findAllUsersCase = new FindAllUsers(userRepository);
  }

  createUser(req, res) {
    const { id, name, email } = req.body;
    const user = this.createUserCase.execute({ id, name, email });
    return res.status(201).json(user);
  }

  findAllUsers(req, res) {
    const users = this.findAllUsersCase.execute();
    return res.json(users);
  }
}