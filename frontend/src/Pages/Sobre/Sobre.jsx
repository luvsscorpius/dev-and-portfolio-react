import React, { useState } from 'react'
import * as M from './Styles'

export const Sobre = () => {
    const [currentComponent, setCurrentComponent] = useState('experiencia')
    const component = {
        experiencia: {h1: "Experiência", p1: "Sou desenvolvedor front-end e técnico em informática pelo SENAC Minas, com foco em React, Node.js e MongoDB. Estou aprimorando minhas habilidades para me tornar fullstack, criando aplicações completas, desde interfaces modernas até APIs escaláveis.", p2: "Tenho experiência em autenticação de usuários, dashboards e soluções interativas, utilizando Styled-Components para interfaces responsivas e de alta performance. Com sólida base tecnológica e fluência em inglês, estou pronto para novos desafios no desenvolvimento de software."},
        
        educacao: {h1: "Educação", p1: "Concluí o curso técnico em Informática pelo SENAC Minas em abril de 2023, após um período de formação iniciado em outubro de 2021. Durante a formação, adquiri sólidos conhecimentos em programação, redes de computadores, manutenção de sistemas e suporte técnico. A metodologia prática do curso me permitiu desenvolver projetos voltados para a resolução de problemas reais, ampliando minhas habilidades técnicas e meu raciocínio lógico.", p2: "Realizei meu estágio na OK Informática, entre novembro de 2022 e março de 2023, onde atuei como estagiário de suporte técnico. Minhas atividades incluíram a manutenção de hardware e software, resolução de problemas técnicos e atendimento direto ao cliente. Essa experiência foi essencial para aprimorar minha capacidade de análise, comunicação e trabalho em equipe, além de me proporcionar uma vivência prática no mercado de tecnologia."},

        habilidades: {h1: "Hard skills/Soft skills", p1: "Tenho experiência em desenvolvimento front-end com React, JavaScript e CSS-in-JS (styled-components), criando interfaces responsivas e acessíveis. Sou habilidoso no gerenciamento de estado com Context API e hooks, e tenho experiência em Node.js para criar APIs escaláveis com Express.js e integração com MongoDB. Também tenho conhecimento em autenticação com JWT, proteção de rotas e deploy de aplicações usando Vercel e MongoDB Atlas.", p2: "Sou organizado, focado e sempre em busca de aprendizado contínuo. Tenho forte habilidade de trabalho em equipe, boa comunicação e colaboração em ambientes ágeis. Sou proativo na resolução de problemas, comprometido com prazos e qualidade de entrega, e atento às necessidades do usuário final, criando soluções digitais intuitivas e eficientes."},
        }

  return (
    <main>
        <M.mainContent>
            <M.linksContainer>
                <button>Experiência</button>
                <button>Educação</button>
                <button>Habilidades</button>
                <button>Sobre mim</button>
            </M.linksContainer>

            <M.infoContainer>
                <h1>{component[currentComponent].h1}</h1>

                <div className='pContainer'>
                    <p>{component[currentComponent].p1}</p>

                    <br />
                    <p>{component[currentComponent].p2}</p>
                </div>  
            </M.infoContainer>
        </M.mainContent>
    </main>
  )
}
