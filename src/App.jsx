import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './assets/components/Header/Header.jsx'
import QuadroMostrar from './assets/components/Quadros/QuadroMostrar.jsx'
import QuadroOpcoes from './assets/components/Quadros/QuadroOpcoes.jsx'
import Footer from './assets/components/Footer/Footer.jsx'

function App() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [projetoSelecionado, setProjetoSelecionado] = useState('');

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <QuadroOpcoes
          setOpcaoSelecionada={setOpcaoSelecionada}
          setProjetoSelecionado={setProjetoSelecionado}
        />

        <Routes>
          <Route
            path='/'
            element={
              <QuadroMostrar
                opcaoSelecionada={opcaoSelecionada}
              />
            }
          />

          <Route
            path='/projetos'
            element={
              <QuadroMostrar
                opcaoSelecionada='projetos'
                projetoSelecionado={projetoSelecionado}
              />
            }
          />

          <Route
            path='/projetos/java'
            element={
              <QuadroMostrar
                opcaoSelecionada='projetos/java'
                projetoSelecionado={projetoSelecionado}
              />
            }
          />

        </Routes>
          
      </div>
    </div>
  )
}

export default App
