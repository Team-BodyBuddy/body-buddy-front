import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    font-family: "Pretendard", sans-serif;
    font-weight: 600;
    color: #333;
`;

//필요한거: 세로 정렬 , 가운데 정렬, 아이템 간격
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0;
    gap: 10px;
`;

export const Text2 = styled.p`
    font-size: 1rem;
    color: black;
    font-weight: 400;
`;

export const Img = styled.div`
    text-align: center;
    width: 7.063rem;
    height: 7.063rem;
    border-radius: 50%;
    color: ${COLORS.LightGray};
    background-color: ${COLORS.LightGray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    position: absolute;
    bottom: 2.125rem;
    font-size: 13px;
    color: ${COLORS.LightGray};
`;
