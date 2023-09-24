import Elysia from "elysia";
import deletarUsuariosID from "../core/usuario/service/DeletarUsuarioID";

export default class ConsultarUsuarioController{
    constructor(readonly servidor: Elysia, readonly casoDeUso: deletarUsuariosID){
        servidor.delete('/usuarios/:id',async ({params}) => {
            return casoDeUso.executar(+params.id);
        })
    }
}