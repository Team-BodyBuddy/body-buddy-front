import styled from "styled-components";

export const NextButton = styled.button<{bgColor?: string}>`
    height: 47px;
    width: 100%;
    background-color: ${(props) => props.bgColor};
    color: white;
    border: 1px solid #ccc;
    border-radius: 86px;
    padding: 10px;
`;

