import React from 'react'
import * as H from './Styles'
import linkedinLogo from '../../assets/img/linkedinLogo.png'
import githubLogo from '../../assets/img/githubLogo.png'
import whatsappLogo from '../../assets/img/whatsappLogo.png'

export const Home = () => {
    return (
        <H.main>
            <H.mainContent>
                <H.h2Content>
                    <h2>Software Developer | Frontend Developer</h2>
                </H.h2Content>

                <H.introContent>
                    <h1>Olá me chamo</h1>
                    <h1 className='name'>Anderson Vitor</h1>
                </H.introContent>

                <H.descriptionContent>
                    <p>Especialista em criar experiências digitais que unem elegância e funcionalidade, com um portfólio que destaca minha expertise em várias tecnologias e linguagens. Foco em interfaces intuitivas e de alto desempenho.</p>
                </H.descriptionContent>

                <H.linksContent>
                    <button>Baixar Curriculo</button>

                    <div>
                        <img src={linkedinLogo} alt="Linkedin Logo" />                        
                        <img src={githubLogo} alt="Github Logo" />
                        <img src={whatsappLogo} alt="Whatsapp Logo" />
                    </div>
                </H.linksContent>
            </H.mainContent>

            <H.mainImage>
                teste
            </H.mainImage>
        </H.main>
    )
}
