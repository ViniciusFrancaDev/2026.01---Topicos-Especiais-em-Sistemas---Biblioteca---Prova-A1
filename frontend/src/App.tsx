import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListarLivros from './components/pages/livros/ListarLivro';
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
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
              <>
                <ListarLivros/>
              </>
            } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
