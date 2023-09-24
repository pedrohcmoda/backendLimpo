import CasoDeUso from "../../shared/CasoDeUso";
import RepositorioUsuario from "./RepositorioUsuario";

type Entrada = {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export default class AtualizarUsuario implements CasoDeUso<Entrada, void> {
    constructor(private readonly repositorio: RepositorioUsuario) {}

    async executar(dados: Entrada): Promise<void> {
        const { id, nome, email, senha } = dados;

        await this.repositorio.atualizarID(id, { nome, email, senha });
    }
}
