import React from 'react'
import * as S from './Styles'
import iconServicos from '../../assets/img/iconServicos.png'

export const Servicos = () => {
  return (
    <S.mainServicos id='servicos'>
      <S.servicosTitleContainer>
        <h2>Serviços</h2>
      </S.servicosTitleContainer>

      <S.servicosFlowContainer>
        <S.card>
          <span>
            <img src={iconServicos} alt="icon de serviços" loading='lazy' />
          </span>

          <S.cardContent>
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
              <li>Opções em código (HTML, CSS, JS) ou design visual (Figma)</li>
              <li>Foco em performance, SEO e usabilidade</li>
              <li>Integração com formulários, WhatsApp, e-mail ou redes sociais</li>
              <li>Ideal para anúncios, lançamentos e captação de leads</li>
            </ul>
          </S.containerText>
          </S.cardContent>
        </S.card>

        <S.card>
          <span>
            <img src={iconServicos} alt="icon de serviços" loading='lazy' />
          </span>

          <S.cardContent>
          <S.containerText>
            <h2>Manutenção de Sites e Landing Pages</h2>
            <p>Atualizações, segurança e suporte contínuo para que você foque no seu negócio!</p>
          </S.containerText>

          <S.containerText>
            <p>a partir de</p>
            <h1>R$ 100,00 / mês</h1>
          </S.containerText>

          <S.containerText>
            <ul>
              <li>Atualizações de conteúdo sempre que necessário</li>
              <li>Ajustes de design e responsividade</li>
              <li>Correção de bugs técnicos</li>
              <li>Realização de backups periódicos</li>
              <li>Suporte para pequenos novos recursos</li>
            </ul>
          </S.containerText>
          </S.cardContent>
        </S.card>

        <S.card>
          <span>
            <img src={iconServicos} alt="icon de serviços" loading='lazy' />
          </span>

          <S.cardContent>
          <S.containerText>
            <h2>Desenvolvimento de Planilhas em Excel</h2>
            <p>Planilhas inteligentes para controle financeiro, estoque, agendamentos e mais.</p>
          </S.containerText>

          <S.containerText>
            <p>a partir de</p>
            <h1>R$ 50,00</h1>
          </S.containerText>

          <S.containerText>
            <ul>
              <li>Fórmulas personalizadas</li>
              <li>Tabelas dinâmicas e gráficos</li>
              <li>Automação com VBA (opcional)</li>
              <li>Design limpo e funcional</li>
              <li>Otimização de tempo</li>
            </ul>
          </S.containerText>
          </S.cardContent>
        </S.card>

        <S.card>
          <span>
            <img src={iconServicos} alt="icon de serviços" loading='lazy' />
          </span>

          <S.cardContent>
          <S.containerText>
            <h2>Formatação de Computadores</h2>
            <p>Deixe seu PC como novo, mais rápido e limpo.</p>
          </S.containerText>

          <S.containerText>
            <p>a partir de</p>
            <h1>R$ 50,00 (Sem backup)</h1>
            <h1>R$ 80,00 (Com backup)</h1>
          </S.containerText>

          <S.containerText>
            <ul>
            <li>Remoção de arquivos desnecessários e vírus</li>
      <li>Reinstalação limpa do sistema operacional</li>
      <li>Melhoria no tempo de inicialização e resposta</li>
      <li>Configuração básica de programas essenciais</li>
      <li>Backup e restauração de arquivos (opcional)</li>
            </ul>
          </S.containerText>
          </S.cardContent>
        </S.card>
      </S.servicosFlowContainer>
    </S.mainServicos>
  )
}
