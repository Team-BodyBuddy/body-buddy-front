import styled from "styled-components"
import { COLORS } from "../../styles/color"

export const PotatoWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 50px; 
    margin-bottom: 40px;
    text-align: center; 

    @media (max-width: 768px) {
        margin-top: 30px;
    }

    @media (max-width: 480px) {
        margin-top: 20px;
    }
`;

export const PotatoText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: ${COLORS.WhiteSmoke};
    background-color: #40AD00; /* 배경색 */
    border: 2px solid #2E7D00; /* 보더 색상 */
    border-radius: 50px;
    width: 154px; /* 고정된 너비 */
    height: 47px; /* 고정된 높이 */
    display: flex; /* 중앙 정렬 */
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    padding: 0; /* 패딩 제거, 고정된 크기에 맞추기 */
    margin-bottom: 10px;

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

export const PotatoImageContainer = styled.div`
    width: 237px;
    height: 182px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    overflow: hidden; 
`;

export const StyledPotatoImage = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%; 
        height: 100%;
    }
`;