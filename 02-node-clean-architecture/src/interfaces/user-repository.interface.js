export class IUserRepository {
  findAll() { throw new Error("no se encontró usuarios."); }
  create(user) { throw new Error("No se creó el usuario."); }
}