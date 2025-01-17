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
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const RequestModal = styled.div<{ isVisible: boolean }>`
    transform: translateX(-50%);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${({ isVisible }) => (isVisible ? slideUp : slideDown)} 0.5s forwards;
    overflow-y: auto;
`;

export const Container = styled.div`
    height: 11.063;
    width: 23.563rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 1.875rem;
    background-color: white;
    border-radius: 0.688rem;
    gap: 1.25rem;
`;
export const infoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    gap: 1rem;
`;
export const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    font-family: "Pretendard", sans-serif;
    font-weight: 600;
    color: #333;
`;

export const Img = styled.div`
    text-align: center;
    width: 3.313rem;
    height: 3.313rem;
    border-radius: 50%;
    color: ${COLORS.LightGray};
    background-color: ${COLORS.LightGray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-family: "Pretendard", sans-serif;
    font-weight: 600;
    font-size: 1rem;
`;
export const SuButton = styled(Button)`
    border: none;
    color: white;
    background-color: ${COLORS.Green};
`;
export const GuButton = styled(Button)`
    border: 1px solid ${COLORS.Gray};
    color: ${COLORS.Gray};
    background-color: white;
`;
export const BtnBar = styled.div`
    //중앙 기중 가로 정렬
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 2.563rem;
`;

export const Text = styled.p`
    color: black;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.875rem;
`;
