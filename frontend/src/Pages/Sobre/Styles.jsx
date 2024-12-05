import styled from "styled-components";

export const mainContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #0A0A0A;

    @media (max-width: 724px) {
        flex-direction: column;
        justify-content: start;
        height: auto;
        gap: 0;
    }
`

export const linksContainer = styled.div`
    height: 500px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        width: 310px;
        height: 76px;
        border-radius: 15px;
        background-color: #1D1D1D;
        color: #fff;
        font-size: 20px;
        font-family: "JetBrains Mono", serif;
        border: none;
    }

    button:hover {
        background-color: #382AB6;
        cursor: pointer;
        color: #fff;
        transition: 0.6s ease;
    }

    button.active {
        background-color: #382AB6;
        color: #fff;
        transition: 0.6s ease;
    }

    @media (max-width: 724px) {
        width: 100%;
        height: 100%;
        gap: 30px;
        padding: 20px;

        button {
            width: 90%;
        }
    }
`

export const infoContainer = styled.div`
    height: 500px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    h1 {
        font-family: Poppins, sans-serif;
        color: #fff;
    }

    .pContainer {
        width: 97%;
        height: 65%;
        background-color: #1D1D1D;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;

        p {
            width: 97%;
            margin: 10px;
            font-size: 18px;
            color: #eee;
            text-align: justify;
            font-family: "JetBrains Mono", serif;
        }
    }

    @media (max-width: 724px) {
        width: 100%;
        height: auto;
        padding: 10px;
    }
`

