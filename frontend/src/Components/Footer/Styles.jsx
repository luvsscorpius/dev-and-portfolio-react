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
`

export const card = styled.div`
    width: 90%;
    border-radius: 20px;
    background-color: #1D1D1D;
    display: flex;
    height: auto;
    flex-direction: column;
    position: absolute;

    @media (min-width: 1024px) {
        width: 700px;
        height: 55vh;
    }

    .curriculo {
        display: flex; 
        justify-content: flex-end;
    }
`

export const LinkContainer = styled.div`
    color: #382AB6;
    border-radius: 20px;
    height: 100px;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: #382AB6;
    }

    h1, button {
        padding: 0px 50px 0px 50px;
        font-size: 20px;
        font-family: "Poppins", serif;
        font-weight: bold;
        transition: opacity 04s ease;
        display: flex;
        align-items: center;
        height: 100%;
    }

    h1:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    button {
        background-color: transparent;
        color: #382AB6;
        border: none;
    }

    button:hover {
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

  img#divider {
    position: absolute;
    top: 99%;
    left: 67%;
    transform: translate(-50%, -50%) rotate(270deg);
    width: 150%;
    max-width: none;
    height: 100vw;
    z-index: 0;
    pointer-events: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    img#divider {
      width: 100%;
      transform: translate(-50%, -50%) rotate(270deg);
    }
  }

  @media (min-width: 1024px) {
    height: 300px;
    justify-content: end;
  }

  @media (min-width: 1024px) {
    img#divider {
      width: 100%;
      top: 101%;
      left: 55%;
    }
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