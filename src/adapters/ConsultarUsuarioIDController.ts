import Elysia from "elysia";
import ConsultarUsuariosID from "../core/usuario/service/ConsultarUsuarioID";

export default class ConsultarUsuarioController{
    constructor(readonly servidor: Elysia, readonly casoDeUso: ConsultarUsuariosID){
        servidor.get('/lista/:id',async ({params}) => {
            return casoDeUso.executar(+params.id);
        }) 
    }
}