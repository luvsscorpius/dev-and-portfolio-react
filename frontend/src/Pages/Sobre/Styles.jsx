import styled from "styled-components";

export const sobreMimContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0A0A0A;  
`

export const titleContainer = styled.div`
    width: 100%;
    margin-top: 100px;

    h2 {
        font-family: "Poppins", serif;
        font-size: 30px;
        color: #382AB6;
        text-align: center;
    }

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`

export const descriptionContainer = styled.div`
    p {
        font-family: "Poppins", serif;
        color: #eee;
        text-align: center;
        padding: 30px;
        font-weight: 600;
    }

    @media (min-width: 1024px) {
        width: 90%;
    }
`

export const linhaDoTempoContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    overflow-y: hidden;
    overflow-x: auto;

    @media (min-width: 1024px) {
        justify-content: center;
    }
`

export const OutSpan = styled.div`
    position: relative;
    z-index: 1;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 0 20px 0 20px;
    height: 150px;

    p {
        color: #eee;
        font-family: "Poppins", serif;
        font-weight: 600;
        text-align: center;
    }

    span {
        p {
            background-color: #382AB6;
            border-radius: 100px;
            width: 150px;
            text-align: center;
        }
    }

    @media (min-width: 1024px) {
        width: 200px;
    }
`
export const Linha = styled.div`
    position: absolute;
    top: 78%;
    left: 30px;
    width: 800px;
    height: 4px;
    z-index: 0;
    background-color: #eee;

    @media (min-width: 1024px) {
        left: 50%;
        transform: translateX(-50%);
    }
`

