import styled from "styled-components";

export const main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #0A0A0A;
`

export const mainContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`

export const h2Content = styled.div`
    width: 500px;
    font-family: "JetBrains Mono", serif;
    font-size: 13px;
    font-weight: normal;
    color: #fff;
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
`

export const descriptionContent = styled.div`
    width: 500px;
    font-family: "JetBrains Mono", serif;
    color: #eee;
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
`

export const mainImage = styled.div`
    width: 100%;
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
`