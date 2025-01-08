import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Title = styled.h1`
    margin: 0;
    font-size: 20px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
    color: black;
`;

export const Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding: 20px;
    gap: 10px;
`;

export const Tap = styled.div<{ selectedOption: "logout" | "exit" | null }>`
    width: 90%;
    display: flex;
    flex-direction: row; // 가로 정렬
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid
        ${({ selectedOption }) =>
            selectedOption === "logout"
                ? COLORS.Green
                : selectedOption === "exit"
                ? COLORS.Orange
                : COLORS.LightGray};
    gap: 70px;
    margin-top: 20px;
`;

export const Text = styled.p<{ selected: boolean }>`
    color: ${({ selected }) => (selected ? COLORS.Green : COLORS.Gray)};
    padding: 20px;
    font-size: 16px;
    font-family: 'Pretendard', sans-serif;
    font-weight: 600;
    cursor: pointer;
    &:nth-child(2) {
        color: ${({ selected }) => (selected ? COLORS.Orange : COLORS.Gray)};
    }
`;