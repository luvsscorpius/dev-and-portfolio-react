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

export const card = styled.div`
  width: 90%;
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
    opacity: 0.7;
    z-index: 1;
  }
`

export const iconContainer = styled.div`
  border: 1px solid red;
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
  border: 1px solid red;
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 500px;
  border-radius: 10px;
  z-index: 2;
`


