import React, { useState } from 'react'
import * as H from './Styles'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router';

export const Header = () => {
  const [ulClass, setUlClass] = useState('closed')
  const [isActive, setIsActive] = useState("")
  const navigate = useNavigate()

  const toggleMenu = () => {
    setUlClass((prevClass) => (prevClass === 'closed' ? 'open' : 'closed'))
  }

  const handleActive = (index) => {
    console.log(index)
    if (index === "Home") {
      navigate("/")
    } else {
      navigate(index)
    }
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
                <li className={isActive === "Home" ? "active" : ""} onClick={(e) => handleActive("Home")}>Home</li>
                <li className={isActive === "Servicos" ? "active" : ""} onClick={(e) => handleActive("Servicos")}>Serviços</li>
                <li className={isActive === "Sobre" ? "active" : ""} onClick={(e) => handleActive("Sobre")}>Sobre</li>
                <li className={isActive === "Projetos" ? "active" : ""} onClick={(e) => handleActive("Projetos")}>Projetos</li>
                <li className={isActive === "Contato" ? "active" : ""} onClick={(e) => handleActive("Contato")}>Contato</li>
                <button>Me Contrate</button>
              </ul>
            </H.ulContainer>
        </H.LinksContents>
    </H.HeaderContainer>
  )
}
