import styled from "styled-components";

// Project Template 

export const mainContent = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const descriptionContent = styled.div`
    width: 50%;
    border: 1px solid red;
`

export const imageContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`

/* Estilo das setas */
export const carouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: -100px;
  }

  &.next {
    right: -200px;
  }
`;