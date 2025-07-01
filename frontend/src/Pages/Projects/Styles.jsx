import styled, { keyframes } from "styled-components";

// Project Template 

export const main = styled.main` 
    width: 100%:
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: #0A0A0A;
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
    padding: 0 30px 0 30px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        padding: 30px;
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
  justify-content: center;
  top: 340px;
  border-radius: 10px;
  z-index: 2;
  border: 1px solid red;
  max-height: 200px;

  h1 {
      text-align: center;
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
  border: 1px solid red;

  button {
    width: 135px;
    height: 35px;
    background-color: #AAAAAA;
    border: 0;
    border-radius: 10px;
    font-family: "Poppins", serif;
    font-size: 20px;
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


