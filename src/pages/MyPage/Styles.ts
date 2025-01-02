import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    color: #333;
`;

    //필요한거: 세로 정렬 , 가운데 정렬, 아이템 간격
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    padding :  0 ;
    gap: 10px;
`

export const Text = styled.p`
    font-size: 13px; 
    color: ${COLORS.LightGray}; 
    margin : 30px 0 0 0;
`;