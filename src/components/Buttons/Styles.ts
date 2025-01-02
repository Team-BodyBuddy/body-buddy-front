import styled from "styled-components";
import { COLORS } from "../../styles/color";


    //필요한거: 세로 정렬 , 가운데 정렬
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    justify-content: center;
`

    //필요한거 : 선 색상, 레디우스, 
export const Btn = styled.button`
    width: 90%;
    border: none;
    border-radius: 50px;
    padding: 15px 0;
    font-weight: bold; 
    color: white; 
    background-color: ${COLORS.DoveGray};

`