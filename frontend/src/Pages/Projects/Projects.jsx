import React, { useState } from 'react'
import * as P from "./Styles"
import javascriptIcon from "../../assets/img/javascriptIcon.png"
import reactLogo from "../../assets/img/reactLogo.png"
import nodeJsLogo from "../../assets/img/nodeJsLogo.png"
import mongoDbLogo from "../../assets/img/mongoDbLogo.png"
import mrmix from "../../assets/img/mrmix.png"
import mrmixModal from "../../assets/img/mrmixModal.png"
import mrmixCart from "../../assets/img/mrmixCart.png"
import mockupMrMix from "../../assets/img/mockupMrMix.png"

export const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "Frontend e-commerce Mr. Mix",
            description: "Eu desenvolvi a parte visual desse e-commerce de sorvetes Mr. Mix usando majoritariamente JavaScript.",
            icons: [javascriptIcon],
            images: [mrmix, mrmixModal, mrmixCart],
            repo: "https://github.com/luvsscorpius/Mr-Mix",
            deploy: "https://mr-mix.netlify.app/"
        }
    ]

    return (
        <P.main>
            <P.ProjectsTitleContainer>
                <h2>Projetos</h2>
            </P.ProjectsTitleContainer>

            <P.projectsFlowContainer>
                <P.card>
                    <img src={mockupMrMix} alt="" />

                    <P.iconContainer>
                        <img src={javascriptIcon} alt="" />
                    </P.iconContainer>

                    <P.infoContainer>
                        testeee
                    </P.infoContainer>
                </P.card>
            </P.projectsFlowContainer>
        </P.main>
    )
}
