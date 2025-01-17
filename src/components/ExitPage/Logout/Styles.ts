import styled from "styled-components";
import { COLORS } from "../../../styles/color";

export const Title = styled.h1`
    margin: 1.5rem;
    font-size: 1.25rem;
    font-family: 'Pretendard', sans-serif;
    font-weight:700 ;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    width : 90% ;
`
export const Img= styled.div`
    text-align: center;
    
`
export const Btn = styled.button`
    width: 90%;
    border: none;
    border-radius: 50px;
    padding: 15px 0;
    font-weight: bold; 
    color: white; 
    background-color: ${COLORS.Green};
    position: absolute; // 절대 위치 설정
    bottom: 7rem; 

`


