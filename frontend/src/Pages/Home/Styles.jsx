import styled from "styled-components";

export const main = styled.main`
    // Aplicando mobile-first
    gap: 10px;
    border: 1px solid red;
    width: 100%;
    height: 100%;

    //Para tablets
    @media (min-width: 768px) {
        width: 100%;
    }

    // Para desktops
    @media (min-width: 1024px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        background-color: #0A0A0A;
        border: 1px solid red;
    }
`

export const mainContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    background-color: #0A0A0A;

    @media (max-width: 724px) {
        order: 1;
        padding: 10px;
        gap: 30px;
    }
`

export const h2Content = styled.div`
    width: 500px;
    font-family: "JetBrains Mono", serif;
    font-size: 13px;
    font-weight: 100;
    font-style: normal;
    color: #fff;

    @media (max-width: 724px) {
        width: 100%;
        
        h2 {
            text-align: center;
        }
    }
`

export const introContent = styled.div`
    width: 500px;
    font-family: "JetBrains Mono", serif;
    font-size: 22px;
    font-weight: bold;
    color: #fff;

    .name {
        color: #382AB6;
    }

    @media (max-width: 724px) {
        width: 100%;

        h1 {
            text-align: center;
        }

        .name {
            font-size: 50px;
        }
    }
`

export const descriptionContent = styled.div`
    width: 500px;
    font-family: "JetBrains Mono", serif;
    color: #eee;

    @media (max-width: 724px) {
        width: 100%;
        background-color: #0A0A0A;

        p {
            text-align: center;
        }
    }
`

export const linksContent = styled.div`
    width: 500px;
    heigth: 168px;
    display: flex;
    flex-direction: row;
    gap: 15px;

    button {
        border: 3px solid #382AB6;
        background-color: transparent;
        font-family: "JetBrains Mono", serif;
        color: #fff;
        width: 40%;
        border-radius: 15px;
        font-size: 15px;
        color: #382AB6;
    }

    button:hover {
        cursor: pointer;
        background-color: #382AB6;
        color: #fff;
        transition: 0.9s ease;
    }

    div {
        img {
            margin: 5px;
            width: 32px;
        }

        img:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 724px) {
        width: 100%;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
            width: 50%;
            height: 60px;
        }
    }
`

export const mainImage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 450px;
    }

    @media (max-width: 724px) {

        img {
            width: 80%;
            margin: 50px;
        }
    }
`
export const sobreMimContainer = styled.div`
    width: 90%;
    border: 1px solid solid blue;
    height: 762px;
`