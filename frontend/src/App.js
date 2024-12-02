import React from 'react'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Home } from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Servicos } from './Pages/Servicos/Servicos';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/servicos' element={<Servicos />}/>
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
