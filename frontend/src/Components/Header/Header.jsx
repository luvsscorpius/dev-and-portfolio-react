import React, { useState } from 'react'
import * as H from './Styles'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Header = () => {
  const [ulClass, setUlClass] = useState('closed')

  const toggleMenu = () => {
    setUlClass((prevClass) => (prevClass === 'closed' ? 'open' : 'closed'))
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
                <li>Home</li>
                <li>Serviços</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Contato</li>
                <button>Me Contrate</button>
              </ul>
            </H.ulContainer>
        </H.LinksContents>
    </H.HeaderContainer>
  )
}
