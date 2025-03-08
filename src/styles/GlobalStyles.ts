import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        font-size: 1rem;
        overflow-y: auto;
        background-color: #fff;
    }

    #root {
        max-width: 24.375rem;
        width: 100%;
        min-height: 100%; 
        height: auto; 
        margin: 0 auto;
        background-color: ${(props) => props.theme.background};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        overflow-y: auto; 
    }
`;

