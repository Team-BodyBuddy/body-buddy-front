import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid ${COLORS.LightGray}; 
    border-radius: 14px; 
    padding : 20px 0px;
`
export const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    color: #333;
`

export const Img= styled.div`
    flex-grow: 1; 
    text-align: center;
    
`
export const Name= styled.p`
    flex-grow: 3;

`
export const Lv= styled.p`
    flex-grow: 1;

`