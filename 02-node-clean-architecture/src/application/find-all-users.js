export class FindAllUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  execute() {
    return this.userRepository.findAll();
  }
}