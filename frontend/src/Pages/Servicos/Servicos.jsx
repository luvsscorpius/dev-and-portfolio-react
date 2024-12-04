import React from 'react'
import * as S from './Styles'
import briefingIcon from '../../assets/img/briefingIcon.png'
import prototipoIcon from '../../assets/img/prototipoIcon.png'
import desenvolvimentoIcon from '../../assets/img/desenvolvimentoIcon.png'
import supportIcon from '../../assets/img/supportIcon.png'

export const Servicos = () => {
  return (
    <S.main>
      <S.mainContent>
        <S.servicosTitleContent>
          <h1>Serviços</h1>
        </S.servicosTitleContent>

        <S.servicosContentFlow>
          <span>
            <img src={briefingIcon} alt="Icone de Briefing" />
            Briefing
          </span>
          <span>
            <img src={prototipoIcon} alt="Icone de Prototipo" />
            Protótipo
          </span>
          <span>
            <img src={desenvolvimentoIcon} alt="Icone de Desenvolvimento" className='dev' />
            Desenvolvimento
          </span>
          <span>
            <img src={supportIcon} alt="Icone de suporte" />
            Deploy/Suporte
          </span>
        </S.servicosContentFlow>
      </S.mainContent>
    </S.main>
  )
}
