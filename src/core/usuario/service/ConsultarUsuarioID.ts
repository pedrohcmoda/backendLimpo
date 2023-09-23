import { usuario } from "@prisma/client";
import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default class ConsultarUsuariosID implements CasoDeUso<number, Usuario | null>{
    
    constructor(private readonly repositorio: RepositorioUsuario){}

    executar(id: number): Promise<Usuario | null> {
        return this.repositorio.consultarID(id);
    }

}