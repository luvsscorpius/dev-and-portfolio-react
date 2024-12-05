import React from 'react'
import * as P from "./Styles"
import {Carousel} from "primereact/carousel"
import javascriptIcon from "../../assets/img/javascriptIcon.png"
import mrmix from "../../assets/img/mrmix.png"

export const Projetcs = () => {
    const projects = [
        {
            id: 1,
            title: "Frontend e-commerce Mr. Mix",
            description: "Eu desenvolvi a parte visual desse e-commerce de sorvetes Mr. Mix usando majoritariamente JavaScript.",
            icons: [javascriptIcon],
            images: [mrmix],
            repo: "https://github.com/luvsscorpius/Mr-Mix",
            deploy: "https://mr-mix.netlify.app/"
        }
    ]

    const projectTemplate = (project) => {
        return (
            <P.mainContent>
                <P.descriptionContent>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                    Ver Projeto
                    </a>
                </P.descriptionContent>

                <P.imageContainer>
                <P.carouselArrow className="prev">&lt;</P.carouselArrow>
                    <img src={project.images[0]} alt={project.title} />
                <P.carouselArrow className="next">&gt;</P.carouselArrow>
                </P.imageContainer>
            </P.mainContent>
        )
    }

  return (
    <div>
        <Carousel value={projects} itemTemplate={projectTemplate} numVisible={1} numScroll={1} autoplayInterval={100000}/>
    </div>
  )
}
