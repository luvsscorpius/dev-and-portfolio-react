import React, { useState } from 'react'
import * as S from './Styles'

export const Sobre = () => {

  return (
        <S.sobreMimContainer>
            <S.titleContainer>
                <h2>Sobre mim</h2>
            </S.titleContainer>

            <S.descriptionContainer>
                <p>
                Olá, sou Anderson, mas pode me chamar de And! Sou desenvolvedor fullstack, apaixonado por transformar ideias em soluções completas e funcionais. Ao longo da minha jornada, tenho aprimorado minhas habilidades tanto no front-end quanto no back-end, sempre focado em entregar códigos eficientes e uma excelente experiência para os usuários. Amo tecnologia e estou sempre pronto para compartilhar o que aprendo, enquanto me inspiro com uma boa música para impulsionar minha criatividade e motivação.
                </p>
            </S.descriptionContainer>

            <S.linhaDoTempoContainer>
                <S.Linha/>

                <S.OutSpan>
                    <p>
                      Início do Curso Técnico em Informática
                    </p>

                    <span>
                      <p>
                        Out, 2021
                      </p>
                    </span>
                </S.OutSpan>

                <S.OutSpan>
                    <p>
                      Estágio na empresa OK Informática
                    </p>

                    <span>
                      <p>
                        Nov, 2022
                      </p>
                    </span>
                </S.OutSpan>

                <S.OutSpan>
                    <p>
                      Conclusão do Curso Técnico em Informática/Estagio
                    </p>

                    <span>
                      <p>
                        Mar/Abr, 2023
                      </p>
                    </span>
                </S.OutSpan>
      
                <S.OutSpan>
                    <p>
                      Desenvolvimento de Projetos Pessoais/Freelances
                    </p>

                    <span>
                      <p>
                        2024/2025
                      </p>
                    </span>
                </S.OutSpan>
            </S.linhaDoTempoContainer>
        </S.sobreMimContainer>
  )
}
