import styled from "styled-components";

export const main = styled.main`
    // Aplicando mobile-first
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0A0A0A;

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
    }
`

export const mainContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    background-color: #0A0A0A;
    order: 1;

    // Tablets
    @media (min-width: 768px) {
        padding: 0px;
        gap: 0px;
    }

    @media (min-width: 1024px) {
        order: 0;
    }
`

export const h2Content = styled.div`
    width: 100%;
    text-align: center;
    font-family: "JetBrains Mono", serif;
    font-weight: 100;
    font-style: normal;
    color: #fff;

    @media (min-width: 768px) {
        width: 100%;
        margin: 30px;
        
        h2 {
            text-align: center;
        }
    }

    @media (min-width: 1024px) {
        width: 500px;
        font-family: "JetBrains Mono", serif;
        font-size: 13px;
        font-weight: 100;
        font-style: normal;
        color: #fff;
        margin: 10px;

        h2 {
            text-align: start;
        }
    }
`

export const introContent = styled.div`
    width: 100%;

    h1 {
        text-align: center;
        color: #eee;
        font-family: "JetBrains Mono", serif;
        font-size: 22px;
        font-weight: bold;
    }

    .name {
        font-size: 50px;
        color: #382AB6;
    }

    @media (min-width: 1024px) {
        width: 500px;

        h1 {
            text-align: start;
            font-family: "JetBrains Mono", serif;
            font-size: 45px;
            font-weight: bold;
            color: #fff;
        }

        .name {
            text-align: start;
            font-size: 45px;
        }
    }
`

export const descriptionContent = styled.div`
    font-family: "JetBrains Mono", serif;
    color: #eee;

    width: 100%;
    background-color: #0A0A0A;

    p {
        text-align: center;
        padding: 20px;
    }

    @media (min-width: 1024px) {
        width: 500px;
        margin: 10px;

        p {
            text-align: start;
            padding: 0;
        }
    }
`

export const linksContent = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;

    button {
        width: 50%;
        height: 60px;
        border-radius: 15px;
        font-size: 15px;
        color: #382AB6;
        border: 3px solid #382AB6;
        background-color: transparent;
        font-family: "JetBrains Mono", serif;
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

    @media (min-width: 1024px) {
        width: 500px;
        heigth: 168px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 15px;
        padding: 0;

        button {
            width: 40%;
            height: 50px;
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