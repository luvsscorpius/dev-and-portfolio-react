import styled from "styled-components";

export const mainContent = styled.div`
    border: 1px solid blue;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const linksContainer = styled.div`
    height: 500px;
    width: 400px;
    border: 1px solid red;
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
`

export const infoContainer = styled.div`
    height: 500px;
    width: 50%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    h1 {
        font-family: Poppins, sans-serif;
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
`

