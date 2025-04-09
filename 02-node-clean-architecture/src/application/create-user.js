export class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute(user) {
    return this.userRepository.create(user);
  }
}