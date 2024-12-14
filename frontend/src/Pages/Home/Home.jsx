import React from 'react'
import * as H from './Styles'
import linkedinLogo from '../../assets/img/linkedinLogo.png'
import githubLogo from '../../assets/img/githubLogo.png'
import whatsappLogo from '../../assets/img/whatsappLogo.png'
import profilePhoto from '../../assets/img/profilePhoto.png'
import Typical from "react-typical" // Biblioteca para animação do texto

export const Home = () => {
    // Função para baixar o curriculo no botao de baixar curriculo
    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = `${process.env.PUBLIC_URL}/Docs/Curriculo.pdf`; // Usando process.env.PUBLIC_URL para garantir o caminho correto
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
                    <h1>
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Olá me chamo', // Primeiro mostra o texto
                                2000, // aguarda dois segundos
                                '', // Limpa para criar um efeito natural
                                500 // Pausa rapida
                            ]}
                        />
                    </h1>
                    <h1 className='name'>                    
                        <Typical
                        loop={Infinity}
                        steps={[
                            '', // Aguarda para sincronizar com o primeiro
                            2500, // Pausa equivalente à duração do primeiro texto
                            'Anderson Vitor', // Aparece depois 
                            2000, // Pausa 2 segundos antes de reiniciar
                        ]}
                    /></h1>
                </H.introContent>

                <H.descriptionContent>
                    <p>Especialista em criar experiências digitais que unem elegância e funcionalidade, com um portfólio que destaca minha expertise em várias tecnologias e linguagens. Foco em interfaces intuitivas e de alto desempenho.</p>
                </H.descriptionContent>

                <H.linksContent>
                    <button onClick={handleDownload}>Baixar Curriculo</button>

                    <div>
                        <a href="https://www.linkedin.com/in/andersonvitor1801/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="Linkedin Logo" title='Linkedin' />
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
