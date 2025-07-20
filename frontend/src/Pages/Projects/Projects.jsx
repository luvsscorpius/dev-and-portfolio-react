import React from 'react'
import * as P from "./Styles"
import javascriptIcon from "../../assets/img/javascriptIcon.png"
import reactLogo from "../../assets/img/reactLogo.png"
import nodeJsLogo from "../../assets/img/nodeJsLogo.png"
import mongoDbLogo from "../../assets/img/mongoDbLogo.png"
import mockupMrMix from "../../assets/img/mockupMrMix.png"
import mockupChicCloset from "../../assets/img/mockupChicCloset.png"
import mockupTaskMap from "../../assets/img/mockupTaskMap.png"

export const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "E-commerce Mr. Mix",
            description: "E-commerce de sorvetes Mr. Mix usando majoritariamente JavaScript.",
            icons: [javascriptIcon],
            images: [mockupMrMix],
            repo: "https://github.com/luvsscorpius/Mr-Mix",
            deploy: "https://mr-mix.netlify.app/"
        },
        {
            id: "02",
            title: "E-commerce Chic-Closet",
            description: "Este é um projeto de e-commerce desenvolvido com React, criado para funcionar como uma loja online.",
            icons: [reactLogo],
            images: [mockupChicCloset],
            repo: "https://github.com/luvsscorpius/chic-closet",
            deploy: "https://luvsscorpius.github.io/chic-closet/"
        },
        {
            id: "02",
            title: "ToDo List - TaskMap",
            description: "Aplicação web de lista de tarefas desenvolvida com React, Node.js e MongoDB. Permite aos usuários organizar, criar, editar e excluir tarefas de forma simples e eficiente.",
            icons: [reactLogo, nodeJsLogo, mongoDbLogo],
            images: [mockupTaskMap],
            repo: "https://github.com/luvsscorpius/taskmap-react",
            deploy: "https://luvsscorpius.github.io/taskmap-react/"
        },
    ]

    return (
        <P.main id='projetos'>
            <P.ProjectsTitleContainer>
                <h2>Projetos</h2>
            </P.ProjectsTitleContainer>

            <P.projectsFlowContainer>
                {projects.map(projeto => (
                    <P.card>
                    <img src={projeto.images[0]} alt="Imagem do projeto" loading='lazy' />

                    <P.iconContainer>
                        {projeto.icons.map(icon => (
                            <img src={icon} alt="icone de tecnologia" loading='lazy' />
                        ))}
                    </P.iconContainer>

                    <P.infoContainer>
                        <h1>{projeto.title}</h1>
                        <p>{projeto.description}</p>
                    </P.infoContainer>

                    <P.buttonsContainer>
                        <a href={projeto.deploy} target='_blank' rel="noopener noreferrer"><button>Visitar</button></a>
                        <a href={projeto.repo} target='_blank' rel="noopener noreferrer"><button>Repositório</button></a>
                    </P.buttonsContainer>
                </P.card>
                ))}
            </P.projectsFlowContainer>
        </P.main>
    )
}
