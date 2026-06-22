import { useEffect, useState } from "react";
import api from "../../../services/api";
import Livro from "../../../models/Livro";
import { Link } from "react-router-dom";

function ListarLivros() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        carregarLivroAPI();
    }, [])

    async function carregarLivroAPI(){
        try {
            const resposta = await api.get<Livro[]>("/api/livro/listar");
            setLivros(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="ListarLivros">
            <h1>Listar Serviços</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Autor</th>
                        <th>Esta disponivel</th>
                        <th>Criado Em</th>
                        <th>Quantidade de Emprestimos</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro : any) => (
                        <tr key={livro.id}>
                            <td>{livro.id}</td>
                            <td>{livro.nome}</td>
                            <td>{livro.autor}</td>
                            <td>{livro.estaDisponivel ? "Sim" : "Não"}</td>
                            <td>{livro.criadoEm}</td>
                            <td>{livro.quantidadeEmprestimos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarLivros;