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
    align-items: center;
    justify-content: end;

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

        a {
            text-decoration: none;
            color: #eee;
        }

        a:hover {
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

 @media (min-width: 768px) {
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
}

    @media (min-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;

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
}
`

export const ulContainer = styled.div`
        position: fixed;
        top: 0px;
        right: -280px;
        height: 100vh;
        width: 280px;
        padding: 0;
        transition: right 1990ms ease;
        background-color: #0A0A0A;
        font-family: "JetBrains Mono", serif;
        font-size: 22px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 10000;
        overflow-y: auto;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            height: 100%;

            li.active a {
                color: #382AB6;
            }
        }

        &.open {
            right: 0px;
        }

        .icon {
            height: 50px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 20px;
            margin-top: 20px;

            svg {
                color: #382AB6;
            }
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: end;
        }

    @media (min-width: 768px) {
        width: 380px;
        right: -380px;
        
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            height: 100%;
        }

        .icon {
            display: flex;
        }

        .title {
            display: block;
        }

        ul {
            .active {
                color: #382AB6;
            }
        }
    }        

    @media (min-width: 1024px) {
        right: 0;
        z-index: 0;
        position: absolute;
        width: 70%;
        height: 144px;
        transition: none;

        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: end;
            height: 100%;
        }

        .icon {
            display: none;
        }

        .title {
            display: none;
        }

        ul {
            .active  {
                color: #382AB6;
            }
        }
    }
`

export const menuBtn = styled.div`
    display: flex;
    align-items: center;
    height: 144px;

    svg {
        font-size: 48px;
        margin: 50px;
    }

    @media (min-width: 768px) {
        display: flex;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`