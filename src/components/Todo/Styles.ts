import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${COLORS.LightGray}; 
    background: #F1F1F1;
    border-radius: 16px;
    padding : 16px 20px;
`

export const LeftWrapper=styled.div`
    display:flex;
    gap: 20px;
`


export const ContentWrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
`

export const Title=styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`

export const Type=styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
`

export const ButtonWrapper= styled.p`
    display:flex;
    gap: 20px;
`