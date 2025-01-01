import styled from "styled-components";

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    margin-top: 20px;
    position: relative;
    background-color: transparent;
    border-bottom: 1px solid #E8E8E8;

    @media (max-width: 768px) {
        margin-top: 10px;
    }

    @media (max-width: 480px) {
        margin-top: 5px;
    }
`;

export const Button = styled.button<{ $active?: boolean }>`
    flex-grow: 1;
    height: 40px;
    font-size: 13px;
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: ${(props) =>
        props.$active ? '3px solid black' : '3px solid transparent'};
    font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
    cursor: pointer;
    transition: border-bottom 0.3s;

    &:hover {
        background-color: transparent;
    }

    @media (max-width: 480px) {
        font-size: 13px;
    }
`;

export const CenterIcon = styled.div<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    font-size: 22px;
    height: 100%;
    border-bottom: ${(props) => (props.$active ? "3px solid black" : "3px solid transparent")};
    cursor: pointer;
    transition: border-bottom 0.3s; 
`;