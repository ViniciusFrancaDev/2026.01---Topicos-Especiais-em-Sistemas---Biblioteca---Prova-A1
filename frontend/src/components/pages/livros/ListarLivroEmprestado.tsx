import { useEffect, useState } from "react";
import api from "../../../services/api";
import Livro from "../../../models/Livro";
import { Link } from "react-router-dom";

function ListarLivrosEmprestados() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        carregarLivroEmprestadoAPI();
    }, [])

    async function carregarLivroEmprestadoAPI(){
        try {
            const resposta = await api.get<Livro[]>("/api/livro/emprestados");
            setLivros(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function devolverLivro(id : string){
        try {
            const resposta = await api.put(`/api/livro/devolver/${id}`);
            carregarLivroEmprestadoAPI();
        } catch(error) {
            console.log(error);
        }
    }
    
    return (
        <div className="ListarLivrosEmprestados">
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
                                <button onClick={() => devolverLivro(livro.id)}>
                                    Devolver
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarLivrosEmprestados;