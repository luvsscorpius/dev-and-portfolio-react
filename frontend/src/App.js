import React from 'react'
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './Css/GlobalStyle';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <GlobalStyle/>
    </>
  );
}

export default App;
