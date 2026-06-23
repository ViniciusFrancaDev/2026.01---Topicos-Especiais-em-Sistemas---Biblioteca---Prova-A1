import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastrarLivro from './components/pages/livros/CadastrarLivro';
import ListarLivros from './components/pages/livros/ListarLivro';
import ListarLivrosDisponiveis from './components/pages/livros/ListarLivroDisponivel';
import ListarLivrosEmprestados from './components/pages/livros/ListarLivroEmprestado';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/livro/cadastrar">Cadastrar Livro</Link>
            </li>
            <li>
              <Link to="pages/livro/disponiveis">Listar Livros Disponiveis</Link>
            </li>
            <li>
              <Link to="pages/livro/emprestados">Listar Livros Emprestados</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
              <>
                <ListarLivros/>
              </>
            } />
            <Route path="/pages/livro/cadastrar" element={<CadastrarLivro/>} />
            <Route path="/pages/livro/disponiveis" element={<ListarLivrosDisponiveis/>} />
            <Route path="pages/livro/emprestados" element={<ListarLivrosEmprestados/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
