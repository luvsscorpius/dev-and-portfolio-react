import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #0A0A0A;
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 10px 0px 10px 0px;

    img {
        border: 1px solid red;
        position: absolute;
        heigth: 100%;
        top: 200px;
        transform: rotate(-90deg);
    }
`

export const card = styled.div`
    width: 90%;
    height: auto;
    border-radius: 20px;
    background-color: #1D1D1D;
`

export const LinkContainer = styled.div`
    color: #382AB6;
    border-radius: 20px;

    h1 {
        padding: 20px;
        font-size: 20px;
        font-family: "Poppins", serif;
        font-weight: bold;
        transition: opacity 04s ease;
    }

    #curriculo {
        text-align: end;
        padding-right: 30px;
    }

    h1:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const infoContainer = styled.div`
    padding: 20px;
    font-size: 18px;
    font-family: "Poppins", serif;
    color: #eee;
`