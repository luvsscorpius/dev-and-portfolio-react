import styled from "styled-components";

export const mainContent = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #0A0A0A;
    color: #fff;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        height: auto;
    }
`

export const formContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1d1d1d;
    border-radius: 15px;

    .titleContent {
        width: 90%;
        font-family: "JetBrains Mono", serif;
        
        h1 {
            padding: 10px;
        }
    }
`

export const formContent = styled.form`
    display: flex;
    flex-direction: column;
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
            border: 0;
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
        border: 0;
    }

    textarea::placeholder {
        color: #fff;
    }

    button {
        width: 35%;
        height: 50px;
        border-radius: 15px;
        font-family: Poppins, serif;
        border: 1px solid #382AB6;
        background-color: #382AB6;
        color: #fff;
        font-weight: bold;
        font-size: 15px;
    }

    button:hover {
        opacity: 0.9;
        cursor: pointer;
        transition: 0.5s ease;
    }
`

export const viewContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;

    .telDiv {
        margin: 10px;
        width: 365px;
        display: flex;
        flex-direction: row;

        .telIconDiv {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            background-color: #1d1d1d;
            border-radius: 15px;

            svg {
                fill: #382AB6;
            }
        }
    }

    .infoDiv {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        padding: 10px;

        p {
            font-family: "JetBrains Mono", serif;
        }
    }

    .emailDiv {
        width: 365px;
        margin: 10px;
        display: flex;
        flex-direction: row;

        .emailIconDiv {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            background-color: #1d1d1d;
            border-radius: 15px;
           
            svg {
                fill: #382AB6;
            }
        }
    }

    @media (max-width: 768px) {
        justify-content: start;
        align-items: start;
        height: auto;

        .telDiv, .emailDiv {
            flex-direction: row;
            align-items: center;
            width: 90%;
        }

        .infoDiv {
            width: 80%;
            text-align: start;
            word-wrap: break-word;
        }
    }
`