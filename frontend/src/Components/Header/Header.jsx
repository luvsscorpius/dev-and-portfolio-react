import React, { useState, useEffect } from 'react'
import * as H from './Styles'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [ulClass, setUlClass] = useState('closed')
  const [currentPath, setCurrentPath] = useState(window.location.hash.replace('#', '') || '/')

  const toggleMenu = () => {
    setUlClass((prevClass) => (prevClass === 'closed' ? 'open' : 'closed'))
  }

  const handleActive = (index) => {
    setUlClass("closed")
  }

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.replace('#', '') || '/')
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const redirect = () => {
    // utilizando window.open e nao o window.location.href para poder usar o blank para redirecionar para outra página em uma nova janela
    window.open("https://wa.link/ynhxk0", "_blank")
  }

  return (
    <H.HeaderContainer>
        <h1>And</h1>

        <H.LinksContents>
            <H.menuBtn>
              <GiHamburgerMenu onClick={toggleMenu}/>
            </H.menuBtn>
            
            <H.ulContainer className={ulClass}>
              <div className="icon">
                <IoClose size={58} onClick={toggleMenu}/>
              </div>

              <div className="title">
                <h1>And</h1>
              </div>

              <ul>
                <li onClick={(e) => handleActive("home")} className={currentPath === "home" ? "active" : "" }><a href="#home">Home</a></li>
                <li onClick={(e) => handleActive("servicos")} className={currentPath === "servicos" ? "active" : "" }><a href="#servicos">Serviços</a></li>
                <li onClick={(e) => handleActive("sobre")} className={currentPath === "sobre" ? "active" : "" }><a href="#sobre">Sobre</a></li>
                <li onClick={(e) => handleActive("projetos")} className={currentPath === "projetos" ? "active" : "" }><a href="#projetos">Projetos</a></li>
                <li onClick={(e) => handleActive("contato")} className={currentPath === "contato" ? "active" : "" }><a href="#contato">Contato</a></li>
                <button onClick={redirect}>Me Contrate</button>
              </ul>
            </H.ulContainer>
        </H.LinksContents>
    </H.HeaderContainer>
  )
}
