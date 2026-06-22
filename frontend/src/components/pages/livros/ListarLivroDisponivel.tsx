import { useEffect, useState } from "react";
import api from "../../../services/api";
import Livro from "../../../models/Livro";
import { Link } from "react-router-dom";

function ListarLivros() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        carregarLivroDisponivelAPI();
    }, [])

    async function carregarLivroDisponivelAPI(){
        try {
            const resposta = await api.get<Livro[]>("/api/livro/disponiveis");
            setLivros(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function emprestarLivro(id : string){
        try {
            const resposta = await api.put(`/api/livro/emprestar/${id}`);
            carregarLivroDisponivelAPI();
        } catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div className="ListarLivrosDisponiveis">
            <h1>Listar Livros</h1>
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
                             <td>
                                <button onClick={() => emprestarLivro(livro.id)}>
                                    Emprestar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarLivros;