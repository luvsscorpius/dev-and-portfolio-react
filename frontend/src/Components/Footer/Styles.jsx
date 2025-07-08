import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #0A0A0A;
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px 0px 0px;
`

export const card = styled.div`
    width: 90%;
    height: auto;
    border-radius: 20px;
    background-color: #1D1D1D;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 200px;

    @media (min-width: 1024px) {
        width: 700px;
        height: 400px;
        display: flex;
        flex-direction: column;
    }
`

export const LinkContainer = styled.div`
    color: #382AB6;
    border-radius: 20px;
    height: 100px;

    h1 {
        padding: 0px 50px 0px 50px;
        font-size: 20px;
        font-family: "Poppins", serif;
        font-weight: bold;
        transition: opacity 04s ease;
        display: flex;
        align-items: center;
        height: 100%;
    }

    #curriculo {
        padding-right: 50px;
        justify-content: flex-end;
    }

    h1:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    @media (min-width: 1024px) {

        #curriculo {
            justify-content: flex-end;
        }
    }
`

export const infoContainer = styled.div`
    padding: 0px 50px 0px 50px;
    font-size: 18px;
    font-family: "Poppins", serif;
    color: #eee;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-size: 22px;
        font-weight: bold;
    }

    p {
        font-size: 16px;
        text-align: justify;
    }
`

export const footerInfo = styled.div`
    margin-top: 600px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #eee;
    position: relative;
    overflow: hidden; 
    
    hr {
        width: 80%;
        opacity: 0.5;
        z-index: 2;
    }

    p {
        padding: 15px;
        opacity: 0.5;
        z-index: 2;
    }

    #divider {
        position: absolute;
        z-index: 0;
        width: 100vw;
        height: 980px;
        top: -350%;
        transform: rotate(270deg);
        object-fit: cover;
        right: 100px;
    }
`

export const iconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    color: #eee;
    gap: 10px;
    transition: transform .8s ease-in-out;
    z-index: 2;

    img {
        width: 30px;
        opacity: 0.7;
    }

    a:hover {
        transform: scale(1.05);
    }

    #github {
        width: 37px;
    }
`