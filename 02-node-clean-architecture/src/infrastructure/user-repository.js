import { IUserRepository } from "../interfaces/user-repository.interface.js";

export class UserRepository extends IUserRepository {
  constructor() {
    super();
    this.users = [];
  }

  create(user) {
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }
}