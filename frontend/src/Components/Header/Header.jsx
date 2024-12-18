import React, { useState } from 'react'
import * as H from './Styles'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router';

export const Header = () => {
  const [ulClass, setUlClass] = useState('closed')
  const navigate = useNavigate()

  const toggleMenu = () => {
    setUlClass((prevClass) => (prevClass === 'closed' ? 'open' : 'closed'))
  }

  const handleActive = (index) => {
    navigate(index === "Home" ? "/" : `/${index}`)
    setUlClass("closed")
  }

  // utilizando o currentPath e utilizando o replace para tirar a # do inicio do window.location.hash para comparações. 
  // Trocando o window.location.pathname para .hash por conta de usar o hashRouter
  const currentPath = window.location.hash.replace('#', '')

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
                <li onClick={(e) => handleActive("Home")} className={currentPath === "/" ? "active" : "" }>Home</li>
                <li onClick={(e) => handleActive("servicos")} className={currentPath === "/servicos" ? "active" : "" }>Serviços</li>
                <li onClick={(e) => handleActive("sobre")} className={currentPath === "/sobre" ? "active" : "" }>Sobre</li>
                <li onClick={(e) => handleActive("projetos")} className={currentPath === "/projetos" ? "active" : "" }>Projetos</li>
                <li onClick={(e) => handleActive("contato")} className={currentPath === "/contato" ? "active" : "" }>Contato</li>
                <button onClick={redirect}>Me Contrate</button>
              </ul>
            </H.ulContainer>
        </H.LinksContents>
    </H.HeaderContainer>
  )
}
