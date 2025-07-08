import React from 'react'
import * as F from './Styles'
import bookNegative from '../../assets/img/bookNegative.svg'
import linkedinLogo from '../../assets/img/linkedinLogo.png'
import githubLogo from '../../assets/img/githubLogo.png'
import whatsappLogo from '../../assets/img/whatsappLogo.png'

export const Footer = () => {
  return (
    <F.Footer>
        {/* <img src={bookNegative} alt="" /> */}
        <F.card>
            <F.LinkContainer>
                <h1>Entrar em contato</h1>
            </F.LinkContainer>

            <F.infoContainer>
                <h1>
                Dê vida à sua ideia com um site moderno 
                </h1>

                <p>Crio interfaces que não só impressionam visualmente, mas também funcionam bem em qualquer dispositivo — celular, tablet ou computador. Tudo com foco em qualidade, agilidade e no que realmente importa: entregar uma solução que gere resultado pra você.
                Se você tem um projeto ou negócio e quer colocá-lo no ar com profissionalismo, entre em contato. Vamos criar algo incrível juntos!</p>
            </F.infoContainer>

            <F.LinkContainer >
                <h1 id='curriculo'>Baixar meu currículo</h1>
            </F.LinkContainer>
        </F.card>

        <F.footerInfo>
            <F.iconsContainer>
                        <a href="https://www.linkedin.com/in/andersonvitor1801/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="Linkedin Logo" title='Linkedin' />
                        </a>

                        <a href="https://github.com/luvsscorpius" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="Github Logo" id='github' />
                        </a>

                        <a href="https://wa.link/1o5zo0" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappLogo} alt="Whatsapp Logo" />
                        </a>
                        
            </F.iconsContainer>

            <hr />

            <img src={bookNegative} alt="" id='divider' />

            <p>
            © 2025 Anderson Vitor. Todos os direitos reservados.
            </p>

        </F.footerInfo>
    </F.Footer>
  )
}
