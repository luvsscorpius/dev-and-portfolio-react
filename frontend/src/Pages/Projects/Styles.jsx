import styled from "styled-components";

// Project Template 

export const main = styled.main` 
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "JetBrains Mono", serif;
`

export const mainContent = styled.div`
    border: 1px solid red;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const descriptionContainer = styled.div`
    width: 50%;
    border: 1px solid red;
    gap: 10px;
    display: flex;
    flex-direction: column;

    .numberContent {
      display: flex;
      align-items: center;
    }
    
    .iconsContent {
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
`

export const imageContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`