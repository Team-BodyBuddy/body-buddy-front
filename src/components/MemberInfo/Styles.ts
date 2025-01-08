import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    border: 1px solid ${COLORS.LightGray}; 
    border-radius: 16px;
    padding: 14px 20px;
`

export const Img= styled.div`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background-color: ${COLORS.SoftGray};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    svg{
        width:60%;
        height:60%;
    }
`
export const Name= styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #333333;
`