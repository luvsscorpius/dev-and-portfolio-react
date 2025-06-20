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

`

