import React from 'react'
import * as P from "./Styles"
import javascriptIcon from "../../assets/img/javascriptIcon.png"
import mrmix from "../../assets/img/mrmix.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import deployIcon from "../../assets/img/deployIcon.png"
import gitHubIcon from "../../assets/img/githubLogo.png"

export const Projetcs = () => {
    const projects = [
        {
            id: "01",
            title: "Frontend e-commerce Mr. Mix",
            description: "Eu desenvolvi a parte visual desse e-commerce de sorvetes Mr. Mix usando majoritariamente JavaScript.",
            icons: [javascriptIcon],
            images: [mrmix],
            repo: "https://github.com/luvsscorpius/Mr-Mix",
            deploy: "https://mr-mix.netlify.app/"
        }
    ]

    return (
        <P.main>
            <P.mainContent>
                <P.descriptionContainer>
                    <div className="numberContent">
                        <h1>{projects[0].id}</h1>
                    </div>
                    <div className="titleContent">
                        <h2>{projects[0].title}</h2>
                    </div>
                    <div className="descriptionContent">
                        <p>{projects[0].description}</p>
                    </div>

                    <div className="iconsContent">
                        {/* utilizando projetcs.icons.map para mapear dentro do objeto dentro do array icons */}
                        {projects[0].icons.map((icon, index) => (
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
                    <img src={projects[0].images[0]} alt={projects[0].title} />

                    <hr />

                    <P.arrowsContainer>
                        <div className="arrowLeftContainer">
                            <IoIosArrowBack size={32} />
                        </div>

                        <div className="arrowRightContainer">
                            <IoIosArrowForward size={32} />
                        </div>
                    </P.arrowsContainer>
                </P.imageContainer>
            </P.mainContent>
        </P.main>
    )
}
