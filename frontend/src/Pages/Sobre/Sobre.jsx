import React, { useState } from 'react'
import * as S from './Styles'

export const Sobre = () => {

  return (
    <main>
        <S.sobreMimContainer>
            <S.titleContainer>
                <h2>Sobre mim</h2>
            </S.titleContainer>

            <S.descriptionContainer>
                <p>
                Olá, sou Anderson, mas pode me chamar de And! Sou desenvolvedor fullstack, apaixonado por transformar ideias em soluções completas e funcionais. Ao longo da minha jornada, tenho aprimorado minhas habilidades tanto no front-end quanto no back-end, sempre focado em entregar códigos eficientes e uma excelente experiência para os usuários. Amo tecnologia e estou sempre pronto para compartilhar o que aprendo, enquanto me inspiro com uma boa música para impulsionar minha criatividade e motivação.
                </p>
            </S.descriptionContainer>
        </S.sobreMimContainer>
    </main>
  )
}
