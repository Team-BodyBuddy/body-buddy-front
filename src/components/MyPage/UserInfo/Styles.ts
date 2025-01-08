import styled from "styled-components";
import { COLORS } from "../../../styles/color";

export const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    color: #333;
`;

// 필요한거: 세로 정렬, 왼쪽 정렬
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${COLORS.LightGray}; 
    border-radius: 14px; 
    padding: 30px;
    width: 90%;
    gap : 20px;
`;

    //필요한거 : 선 색상, 레디우스, 
export const Text = styled.p`
    margin: 0;
`
export const Contents = styled.p`
    margin: 0;
    color : ${COLORS.LightGray};
    font-size: 14px;
`