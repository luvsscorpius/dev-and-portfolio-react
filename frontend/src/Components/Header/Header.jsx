import React from 'react'
import * as H from './Styles'

export const Header = () => {
  return (
    <H.HeaderContainer>
        <h1>And</h1>

        <H.LinksContents>
            <ul>
                <li>Home</li>
                <li>Serviços</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Contato</li>
                <button>Me Contrate</button>
            </ul>
        </H.LinksContents>
    </H.HeaderContainer>
  )
}
