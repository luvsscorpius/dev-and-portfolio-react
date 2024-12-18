import React from 'react'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Home } from './Pages/Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router'
import { Servicos } from './Pages/Servicos/Servicos';
import { Sobre } from './Pages/Sobre/Sobre';
import { Projetcs } from './Pages/Projects/Projetcs';
import { Contact } from './Pages/Contact/Contact';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Router>
        <Header />
        <ToastContainer autoClose={3000} className="toast-container" />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicos' element={<Servicos />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/projetos' element={<Projetcs />}/>
          <Route path='/contato' element={<Contact />}/>
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
