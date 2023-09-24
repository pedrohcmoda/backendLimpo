import { Elysia } from "elysia";

import RepositorioUsuarioPrisma from "./external/prisma/RepositorioUsuarioPrisma";

import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";

import ConsultarUsuario from "./core/usuario/service/ConsultarUsuario";
import ConsultarUsuarioController from "./adapters/ConsultarUsuarioController";

import ConsultarUsuarioID from "./core/usuario/service/ConsultarUsuarioID";
import ConsultarUsuarioIDController from "./adapters/ConsultarUsuarioIDController";

import DeletarUsuarioID from "./core/usuario/service/DeletarUsuarioID";
import DeletarUsuarioIDController from "./adapters/DeletarUsuarioIDController";

import AtualizarUsuarioID from "./core/usuario/service/AtualizarUsuarioID";
import AtualizarUsuarioIDController from "./adapters/AtualizarUsuarioIDController";



const app = new Elysia()

// -------- Registrar Rotas

const repositorioUsuario = new RepositorioUsuarioPrisma()

//Registra
const registrarUsuario = new RegistrarUsuario(repositorioUsuario)
new RegistrarUsuarioController(app, registrarUsuario)

//Consulta
const consultarUsuarios = new ConsultarUsuario(repositorioUsuario)
new ConsultarUsuarioController(app, consultarUsuarios)

//Consulta por ID
const consultarUsuarioPorID = new ConsultarUsuarioID(repositorioUsuario)
new ConsultarUsuarioIDController(app, consultarUsuarioPorID)

//Deletar por ID
const deletarUsuarioPorID = new DeletarUsuarioID(repositorioUsuario)
new DeletarUsuarioIDController(app, deletarUsuarioPorID)

//Atualizar por ID
const atualizarUsuarioPorID = new AtualizarUsuarioID(repositorioUsuario)
new AtualizarUsuarioIDController(app, atualizarUsuarioPorID)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
