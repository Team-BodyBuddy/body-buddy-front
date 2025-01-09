import styled from "styled-components";

export const NextButton = styled.button<{$bgcolor?: string}>`
    height: 47px;
    width: 100%;
    background-color: ${(props) => props.$bgcolor};
    color: white;
    border: 1px solid #ccc;
    border-radius: 86px;
    padding: 10px;
`;

