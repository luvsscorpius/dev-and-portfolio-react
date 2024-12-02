import React from 'react'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Home } from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
