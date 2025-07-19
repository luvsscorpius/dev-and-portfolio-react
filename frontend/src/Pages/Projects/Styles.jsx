import styled from "styled-components";

// Project Template 

export const main = styled.main` 
    width: 100%:
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #0A0A0A;
    align-items: center;
    padding-bottom: 100px;
`

export const ProjectsTitleContainer = styled.div`
    margin-top: 50px;    

    h2 {
        text-align: center;
        font-family: "Poppins", serif;
        font-size: 30px;
        color: #382AB6;
    }
`

export const projectsFlowContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;
    gap: 50px;
    margin-top: 10px;
    overflow-y: auto;
    padding: 20px 30px 20px 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        padding: 30px;
        max-width: 80%;
    }
`

export const card = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #eee;
  border-radius: 10px;
  font-family: "Poppins", serif;
  height: 600px;
  margin-bottom: 10px;
  position: relative;
  transition: transform 0.3s ease; 

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    border-radius: 20px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 600px;
    border-radius: 10px;
    opacity: 0.5;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    width: 340px;
    min-width: 340px;
    height: 515px;
  }
`

export const iconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0px;
  border-radius: 10px;

  img {
    z-index: 2;
    opacity: 1;
    width: 90px;
    height: 90px;
    padding: 20px;
  }
`

export const infoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  top: 340px;
  border-radius: 10px;
  z-index: 2;
  max-height: 200px;

  h1 {
      text-align: center;
      padding: 0px 5px 0px 5px;
  }

  p {
    text-align: center;
    padding: 0px 10px 0px 10px;
  }

  @media (min-width: 1024px) {
    top: 260px;
    max-height: 200px;
  }
`

export const buttonsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 540px;
  border-radius: 10px;
  z-index: 2;
  padding: 10px;
  gap: 10px;

  button {
    width: 115px;
    height: 35px;
    background-color: #AAAAAA;
    border: 0;
    border-radius: 10px;
    font-family: "Poppins", serif;
    font-size: 17px;
    font-weight: bold;
    color: #EEEEEE;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  @media (min-width: 1024px) {
    top: 457px;
  }
`


