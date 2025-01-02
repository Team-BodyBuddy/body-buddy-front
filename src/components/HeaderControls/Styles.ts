import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const PButtonWrapper = styled.div`
    position: relative; 
    width: 120px;
    height: 32px;
    background-color: #FFFFFF; 
    border: 1px solid ${COLORS.LightGray};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px; 
`;

export const PButton = styled.button`
    position: absolute; 
    left: -10px;
    top: -5px; 
    width: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF; 
    background-color: #40AD00; 
    border: 1px solid #DEDEDE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
`;

export const PButtonText = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #000000;
    white-space: nowrap; 
    z-index: 1;
    margin-left: auto;
`;

export const SButton = styled.button<{ $active: boolean }>`
    background-color: ${({ $active }) => ($active ? "#40AD00" : "#F6F6F6")}; /* 눌렸을 때(#40AD00), 기본(#D1D1D1) */
    color: ${({ $active }) => ($active ? "#FFFFFF" : "#BABABA")}; 
    border: 2px solid ${({ $active }) => ($active ? "#2E7D00" : "#BABABA")};
    width: 40px; /* 너비 */
    height: 40px; /* 높이 */
    border-radius: 50%; /* 동그라미 모양 */
    cursor: pointer;
    display: flex; /* 아이콘 정렬을 위한 flex */
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease; /* 부드러운 전환 효과 */
    font-size: 24px; /* 아이콘 크기 조절 */
    padding: 0; /* 내부 여백 제거 */
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    padding: 0 50px; 
    margin-top: 30px;
    margin-bottom: 20px;
`;