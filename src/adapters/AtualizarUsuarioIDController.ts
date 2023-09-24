import Elysia from "elysia";
import AtualizarUsuario from "../core/usuario/service/AtualizarUsuarioID";

export default class AtualizarUsuarioIDController {
  constructor(readonly servidor: Elysia, readonly casoDeUso: AtualizarUsuario) {
    servidor.patch('/usuarios/:id', async ({ params, body }) => {
      try {
        const id = +params.id;
        const {nome, email, senha} = body as any;
        await casoDeUso.executar({ id: id, nome, email, senha });
        
        return { status: 'success', message: 'Usuário atualizado com sucesso' };
      } catch (error: any) {
        return { status: 'error', message: 'Erro interno do servidor', error: error.message };
      }
    });
  }
}
