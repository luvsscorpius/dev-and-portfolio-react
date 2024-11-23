import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: #0A0A0A;
    height: 144px;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    

    h1 {
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
    }
`

export const LinksContents = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 90%;

    ul {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 73px;
        justify-content: flex-end;
        padding: 40px;
        align-items: center;
        gap: 30px;
        list-style: none;
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        font-weight: bold;

        li {
            cursor: pointer;
        }

        li:hover {
            cursor: pointer;
            color: #382AB6;
            transition: 0.3s ease;
        }

        button {
            background-color: #382AB6;
            color: #fff;
            height: 51px;
            width: 161px;
            border: 0;
            border-radius: 10px;
            font-size: 18px;
            font-family: "Poppins", sans-serif;
            font-weight: bold;
            cursor: pointer;
        }
    }
`