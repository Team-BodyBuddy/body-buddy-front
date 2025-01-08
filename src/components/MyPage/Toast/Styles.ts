import styled, { keyframes } from "styled-components";
import { COLORS } from "../../../styles/color";

const slideUp = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(100%);
    }
`;

export const Overlay = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 적용
    z-index: 999;
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const ToastContainer = styled.div<{ isVisible: boolean }>`
    position: fixed;
    bottom: 0px;
    transform: translateX(-50%);
    background-color: ${COLORS.Green};
    border-radius: 14px 14px 0 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    height: 292px; 
    animation: ${({ isVisible }) => (isVisible ? slideUp : slideDown)} 0.5s forwards;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 80%;

    &::placeholder {
        color: ${COLORS.LightGray}; // placeholder 색상 설정
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    color: black;
    background-color: white;
    cursor: pointer;
    width: 199px;
    margin: 1px 0 0 0;
`;

export const Text = styled.p`
    color: white;
    padding: 20px;
`;