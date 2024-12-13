import React from 'react'
import * as H from './Styles'
import linkedinLogo from '../../assets/img/linkedinLogo.png'
import githubLogo from '../../assets/img/githubLogo.png'
import whatsappLogo from '../../assets/img/whatsappLogo.png'
import profilePhoto from '../../assets/img/profilePhoto.png'

export const Home = () => {
    // Função para baixar o curriculo no botao de baixar curriculo
    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = '/Docs/Curriculo.pdf'; // Movendo o arquivo para a pasta public para conseguir baixar.
        link.download = 'Curriculo.pdf'
        link.click()
    }

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
                    <button onClick={handleDownload}>Baixar Curriculo</button>

                    <div>
                        <a href="https://www.linkedin.com/in/andersonvitor1801/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="Linkedin Logo" title='Linkedin'/>  
                        </a>        

                        <a href="https://github.com/luvsscorpius" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="Github Logo" />
                        </a>       

                        <a href="https://wa.link/1o5zo0" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappLogo} alt="Whatsapp Logo" />
                        </a>
                    </div>
                </H.linksContent>
            </H.mainContent>

            <H.mainImage>
                <img src={profilePhoto} alt="Foto pessoal" />
            </H.mainImage>
        </H.main>
    )
}
