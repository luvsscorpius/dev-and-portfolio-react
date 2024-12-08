import styled from "styled-components";

export const mainContent = styled.div`
    width: 90%;
    height: 100vh;
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const formContainer = styled.div`
    width: 100%;
    height: 70%;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .titleContent {
        width: 90%;
        border: 1px solid red;
        font-family: "JetBrains Mono", serif;
        
        h1 {
            padding: 10px;
        }
    }
`

export const formContent = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    width: 90%;
    gap: 10px;
    padding: 10px;

    .firstInputs, .secondInputs {
        display: flex;
        flex-direction: row;
        gap: 10px;

        input {
            width: 100%;
            height: 50px;
            background-color: #0A0A0A;
            color: #fff;
            border-radius: 15px;
            padding: 10px;
            font-family: "JetBrains Mono", serif;
        }

        ::placeholder {
            color: #fff;
        }
    }

    textarea {
        width: 100%;
        height: 160px;
        background-color: #0A0A0A;
        color: #fff;
        border-radius: 15px;
        padding: 10px;
        font-family: "JetBrains Mono", serif;
    }

    textarea::placeholder {
        color: #fff;
    }
`

export const viewContainer = styled.div`
    width: 100%;
    height: 70%;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
`