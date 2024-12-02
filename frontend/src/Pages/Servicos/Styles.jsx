import styled from "styled-components";

export const main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const mainContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0A0A0A;
    color: #fff;
`

export const servicosTitleContent = styled.div`
    font-family: "JetBrains Mono", serif;
`

export const servicosContentFlow = styled.div`
    display: flex;
    flex-direction: row;

    span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 15px;
        width: 260px;
        height: 280px;
        gap: 15px;
        border-radius: 15px;
        background-color: #1D1D1D;
        color: #fff;
        font-family: "JetBrains Mono", serif;
        font-size: 18px;
        transition: transform 0.3s ease-in-out;
    }

    span:hover {
        cursor: pointer;
        transform: scale(1.05)
    }

    img {
        width: 130px;
    }

    .dev {
        width: 160px;
    }
`