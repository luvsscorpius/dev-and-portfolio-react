import React from 'react'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Home } from './Pages/Home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router'
import { Servicos } from './Pages/Servicos/Servicos';
import { Sobre } from './Pages/Sobre/Sobre';
import { Projects } from './Pages/Projects/Projects';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
        <Header />
        <ToastContainer autoClose={3000} className="toast-container" />
        <GlobalStyle />
        <Home/>
        <Sobre/>
        <Servicos/>
        <Projects/>
        <Footer/>
    </>
  );
}

export default App;
