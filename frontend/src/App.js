import React from 'react'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Home } from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Servicos } from './Pages/Servicos/Servicos';
import { Sobre } from './Pages/Sobre/Sobre';
import { Projetcs } from './Pages/Projects/Projetcs';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/projetos' element={<Projetcs />}/>
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
