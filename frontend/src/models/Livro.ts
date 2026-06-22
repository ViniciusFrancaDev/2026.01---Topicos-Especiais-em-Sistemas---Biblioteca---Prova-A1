export default interface Livro {
    id?: string;
    nome: string;
    autor: string;
    estaDisponivel: boolean;
    criadoEm: Date;
    quantidadeEmprestimos: number;
}