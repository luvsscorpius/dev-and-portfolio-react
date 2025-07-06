import React from 'react'
import * as F from './Styles'
import bookNegative from '../../assets/img/bookNegative.svg'

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
    </F.Footer>
  )
}
