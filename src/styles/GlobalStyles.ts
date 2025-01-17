import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        height: 100vh;
        font-size: 16px;
        overflow-y: auto;
        background-color: #fff;
    }

    #root {
        width: 430px;
        height: 932px; 
        margin: auto;
        background-color: ${(props) => props.theme.background};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        overflow: hidden;
    }
`;
