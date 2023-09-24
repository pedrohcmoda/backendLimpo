import { usuario } from "@prisma/client";
import CasoDeUso from "../../shared/CasoDeUso";
import Usuario from "../model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default class deletarID implements CasoDeUso<number, Usuario | null>{
    
    constructor(private readonly repositorio: RepositorioUsuario){}

    executar(id: number): Promise<Usuario | null> {
        return this.repositorio.deletarID(id);
    }

}