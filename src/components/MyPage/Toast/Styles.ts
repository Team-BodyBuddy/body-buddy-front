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
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const ToastContainer = styled.div<{ isVisible: boolean }>`
    position: fixed;
    bottom: 0;
    transform: translateX(-50%);
    background-color: ${COLORS.Green};
    border-radius: 14px 14px 0 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* 내부 요소 정렬 */
    width: 90%; /* 부모 크기에 맞춤 */
    max-width: 400px; /* 최대 크기 제한 */
    height: 250px; /* 너무 크지 않도록 조정 */
    padding: 20px;
    box-sizing: border-box; /* 패딩 포함 크기 조정 */
    animation: ${({ isVisible }) => (isVisible ? slideUp : slideDown)} 0.5s forwards;

    @media (max-width: 400px) {
        width: 95%;
        height: 230px;
    }
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
