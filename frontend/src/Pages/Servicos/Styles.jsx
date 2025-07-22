import styled from "styled-components";

export const mainServicos = styled.div`
    width: 100%:
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: #0A0A0A;
`

export const servicosTitleContainer = styled.div`
    margin-top: 100px;    

    h2 {
        text-align: center;
        font-family: "Poppins", serif;
        font-size: 30px;
        color: #382AB6;
    }
`

export const servicosFlowContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 90px;
    margin-top: 10px;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 20px;
        padding: 30px;
    }
`

export const containerText = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const card = styled.div`   
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1D1D1D;
    color: #eee;
    border-radius: 10px;
    font-family: "Poppins", serif;
    gap: 30px;
    margin-bottom: 20px;
    transition: transform .3s ease;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }

    span {
        height: 50px;

        img {
            width: 100px;
            height: 100px;
            position: relative;
            bottom: 40px;
        }
    }

    h1 {
        padding: 0 30px 0 30px;
        margin: 0;
        text-align: start;
        font-weight: 1000;
        width: 100%;
        color: #382AB6;
        font-size: 40px;
    }

    h2 {
        padding: 0 30px 0 30px;
        margin: 0;
        text-align: start;
        font-weight: bold;
        width: 100%;
    }

    p {
        text-align: justify;
        width: 100%;
        padding: 0 30px 0 30px;
        margin: 0;
        font-size: 15px;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        list-style-type: disc;
        list-style-position: inside;
        margin-bottom: 50px;
        width: 100%;

        li {
            text-align: justify;
            width: 100%;
            padding: 0 30px 0 30px;
            margin: 0;
            font-size: 15px;
            font-weight: 400;
        }
    }

    @media (min-width: 1024px) {
        width: 550px;
        height: 550px;
        gap: 0px;
        justify-content: start;

        span {
            height: 50px;

            img {
                width: 100px;
                height: 100px;
                position: relative;
                bottom: 40px;
            }
        }

        h1 {
            font-size: 25px;
            padding: 0 20px 0 20px;
        }

        h2 {
            padding: 0 20px 0 20px;
            font-size: 22px;
        }

        p {
            padding: 0 20px 0 20px;
        }

        ul {

            li {
                text-align: start;
                width: 100%;
                padding: 0 20px 0 20px;
                font-size: 15px;
                font-weight: 400;
            }
        }
    }
`

export const cardContent = styled.div`

    @media (min-width: 1024px) {
        overflow-y: auto;
    }
`

