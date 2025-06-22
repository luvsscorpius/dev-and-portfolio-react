import React from 'react'
import * as S from './Styles'
import briefingIcon from '../../assets/img/briefingIcon.png'
import prototipoIcon from '../../assets/img/prototipoIcon.png'
import desenvolvimentoIcon from '../../assets/img/desenvolvimentoIcon.png'
import supportIcon from '../../assets/img/supportIcon.png'
import iconServicos from '../../assets/img/iconServicos.png'

export const Servicos = () => {
  return (
    <S.mainServicos>
      <S.servicosTitleContainer>
        <h2>Serviços</h2>
      </S.servicosTitleContainer>

      <S.servicosFlowContainer>
        <S.card>
          <span>
            <img src={iconServicos} alt="" />
          </span>

          <S.containerText>
            <h2>Criação de Landing Pages (Código ou Design)</h2>
            <p>Páginas que convertem com visual moderno e profissional.</p>
          </S.containerText>

          <S.containerText>
            <p>a partir de</p>
            <h1>R$ 700,00</h1>
          </S.containerText>

          <S.containerText>
            <ul>
              <li>Layout 100% responsivo e adaptado ao seu público</li>
              <li>Opções em código (HTML, CSS, JS) ou design visual (Figma, Adobe XD)</li>
              <li>Foco em performance, SEO e usabilidade</li>
              <li>Integração com formulários, WhatsApp, e-mail ou redes sociais</li>
              <li>Ideal para anúncios, lançamentos e captação de leads</li>
            </ul>
          </S.containerText>
        </S.card>
      </S.servicosFlowContainer>
    </S.mainServicos>
  )
}
