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
    }

    #root {
        width: 430px; /* iPhone 16 너비 */
        height: 932px; /* iPhone 16 높이 */
        margin: auto;
        background-color: ${(props) => props.theme.background};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px; /* iPhone 둥근 모서리 */
        overflow: hidden;
    }
`;
