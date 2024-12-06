import styled from "styled-components";

// Project Template 

export const main = styled.main` 
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "JetBrains Mono", serif;
  background-color: #0A0A0A;
`

export const mainContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const descriptionContainer = styled.div`
    width: 50%;
    gap: 10px;
    display: flex;
    padding: 10px;
    flex-direction: column;
    height: auto;

    .numberContent {
      display: flex;
      align-items: center;
      color: #fff;
    }

    .titleContent {
      padding: 5px;
      color: #fff;
    }

    .descriptionContent {
      text-align: justify;
      padding: 5px;
      color: #bbb;
    }
    
    .iconsContent {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100px;
      }
    }
  
    h1 {
      font-size: 100px;
      height: 100px;
      display: flex;
      align-items: center;
    }
    
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }

    hr {
      width: 99%;
      margin: 0 auto;
      border: 1px solid #bbb;
    }

    .linksContainer {
      height: 70px;
      gap: 10px;
      display: flex;
      align-items: center;
      margin: 10px;

      span {
        height: 100%;
        width: 70px;
        background-color: #1d1d1d;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
      }

      span:hover {
        transition: 0.9s ease;
        opacity: 0.8;
        cursor: pointer;
      }

      img {
        width: 39px;
      }
    }
`

export const imageContainer = styled.div`
    width: 100%;
    padding: 10px;

    hr {
      width: 98.5%;
      margin: 0 auto;
      border: 1px solid #bbb;
    }

    img {
        width: 100%;
    }
`

export const arrowsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin: 5px;

  .arrowLeftContainer {
    background-color: #1D1D1D;
    width: 90px;
    height: 60px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .arrowLeftContainer:hover {
    cursor: pointer;
    transition: 0.9s ease;
    opacity: 0.8;
  }

  .arrowRightContainer {
    background-color: #1D1D1D;
    width: 90px;
    height: 60px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  .arrowRightContainer:hover {
    cursor: pointer;
    transition: 0.9s ease;
    opacity: 0.8;
  }

`