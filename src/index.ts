import { Elysia } from "elysia";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RepositorioUsuarioPrisma from "./external/prisma/RepositorioUsuarioPrisma";
import ConsultarUsuarioController from "./adapters/ConsultarUsuarioController";
import ConsultarUsuario from "./core/usuario/service/ConsultarUsuario";
import ConsultarUsuarioID from "./core/usuario/service/ConsultarUsuarioID";
import ConsultarUsuarioIDController from "./adapters/ConsultarUsuarioIDController";

const app = new Elysia()

const RepositorioUsuario = new RepositorioUsuarioPrisma()

// -------- Registrar Rotas

const repositorioUsuario = new RepositorioUsuarioPrisma()
const registrarUsuario = new RegistrarUsuario(repositorioUsuario)
new RegistrarUsuarioController(app, registrarUsuario)
const consultarUsuarios = new ConsultarUsuario(repositorioUsuario)
new ConsultarUsuarioController(app, consultarUsuarios)

const consultarUsuarioPorID = new ConsultarUsuarioID(RepositorioUsuario)
new ConsultarUsuarioIDController(app, consultarUsuarioPorID)


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
