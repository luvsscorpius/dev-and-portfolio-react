import React, { useState } from 'react'
import * as P from "./Styles"
import javascriptIcon from "../../assets/img/javascriptIcon.png"
import reactLogo from "../../assets/img/reactLogo.png"
import mrmix from "../../assets/img/mrmix.png"
import mrmixModal from "../../assets/img/mrmixModal.png"
import mrmixCart from "../../assets/img/mrmixCart.png"
import chicCloset from "../../assets/img/chicCloset.png"
import chicClosetCart from "../../assets/img/chicClosetCart.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import deployIcon from "../../assets/img/deployIcon.png"
import gitHubIcon from "../../assets/img/githubLogo.png"
import { Carousel } from 'primereact/carousel';

export const Projetcs = () => {
    const projects = [
        {
            id: "01",
            title: "Frontend e-commerce Mr. Mix",
            description: "Eu desenvolvi a parte visual desse e-commerce de sorvetes Mr. Mix usando majoritariamente JavaScript.",
            icons: [javascriptIcon],
            images: [mrmix, mrmixModal, mrmixCart],
            repo: "https://github.com/luvsscorpius/Mr-Mix",
            deploy: "https://mr-mix.netlify.app/"
        },
        {
            id: "02",
            title: "Frontend e-commerce ChicCloset",
            description: "Este é um projeto de e-commerce desenvolvido com React, criado para funcionar como uma loja online, onde coloquei os meus conhecimentos de React em prática, os que foram usados nesse projeto foram, styled-components para a estilização de componentes, useContext para o acesso de funções de diferentes componentes, useNavigate e React-dom-Router para navegar para diferentes rotas entre a aplicação.",
            icons: [javascriptIcon, reactLogo],
            images: [chicCloset, chicClosetCart],
            repo: "https://github.com/luvsscorpius/chic-closet",
            deploy: "https://luvsscorpius.github.io/chic-closet/#/"
        },

    ]

    // State para controlar os projetos
    const [currentIndex, setCurrentIndex] = useState(1)

    // Funcao para voltar projeto
    const handlePrevious = () => {
        if (currentIndex >= 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    // Funçao para ir para o proximo projeto
    const handleNext = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const projectTemplate = (image) => {
        return (
                <img src={image} />
        )
    }

    return (
        <P.main>
            <P.mainContent >
                <P.descriptionContainer>
                    <div className="numberContent">
                        <h1>{projects[currentIndex].id}</h1>
                    </div>
                    <div className="titleContent">
                        <h2>{projects[currentIndex].title}</h2>
                    </div>
                    <div className="descriptionContent">
                        <p>{projects[currentIndex].description}</p>
                    </div>

                    <div className="iconsContent">
                        {/* utilizando projetcs.icons.map para mapear dentro do objeto dentro do array icons */}
                        {projects[currentIndex].icons.map((icon, index) => (
                            <img src={icon} key={index} />
                        ))}
                    </div>

                    <hr />

                    <div className="linksContainer">
                    {/* href={projects[0].deploy} */}
                        <span>
                            <img src={deployIcon} alt="" />
                        </span>

                        <span>
                            <img src={gitHubIcon} alt="" />
                        </span>
                    
                    </div>
                </P.descriptionContainer>

                <P.imageContainer>
                    <Carousel value={projects[currentIndex].images} numVisible={1} numScroll={1} responsiveOptions={[
                    { breakpoint: '1024px', numVisible: 1 },
                    { breakpoint: '768px', numVisible: 1 },
                    { breakpoint: '560px', numVisible: 1 }
                ]} itemTemplate={projectTemplate} autoplayInterval={7000}  /> 

                    <hr />

                    <P.arrowsContainer>
                        <div className="arrowLeftContainer" >
                            <IoIosArrowBack size={32} onClick={(e) => handlePrevious(e)} />
                        </div>

                        <div className="arrowRightContainer">
                            <IoIosArrowForward size={32} onClick={(e) => handleNext(e)} />
                        </div>
                    </P.arrowsContainer>
                </P.imageContainer>
            </P.mainContent>
        </P.main>
    )
}
