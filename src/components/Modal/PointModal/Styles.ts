import styled from "styled-components";
import { COLORS } from "../../../styles/color";

export const Overlay = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1999;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const RequestModal = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 500px;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    max-height: 80%;
`;

export const Container = styled.div`
    width: 23.563rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.875rem;
    background-color: white;
    border-radius: 0.688rem;
    gap: 0.875rem;
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
    border-radius: 0.313rem;
    cursor: pointer;
    width: 100%;
    height: 2.188rem;
    font-family: "Pretendard", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: white;
    background-color: ${COLORS.Green};
    border: none;
`;

export const Text = styled.p`
    color: black;
    font-size: 1rem;
    font-weight: 400;
`;
export const Text2 = styled.p`
    color: ${COLORS.Green};
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0.875rem;
`;
