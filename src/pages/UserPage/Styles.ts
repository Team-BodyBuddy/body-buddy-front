import styled from "styled-components";
import { COLORS } from "../../styles/color";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f9f9f9;
    overflow-y: auto;

    @media (max-width: 430px) {
        height: auto;
        background-color: #ffffff;
    }

    @media (max-height: 932px) { 
        max-height: calc(100vh - 10px);
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    align-items: bottom;
    width: 100%;
    padding: 0;
    margin-top: 20px;
    position: relative;
    background-color: transparent;
    border-bottom: 1px solid #E8E8E8;

    @media (max-width: 768px) {
        margin-top: 10px;
    }

    @media (max-width: 480px) {
        margin-top: 5px;
    }
`;

export const Button = styled.button<{ $active?: boolean }>`
    flex-grow: 1;
    height: 40px;
    font-size: 13px;
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: ${(props) =>
        props.$active ? '3px solid black' : '2px solid transparent'};
    font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
    cursor: pointer;
    transition: border-bottom 0.3s;

    &:hover {
        background-color: transparent;
    }

    @media (max-width: 480px) {
        font-size: 13px;
    }
`;

export const CenterIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    svg {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 768px) {
        svg {
            width: 25px;
            height: 25px;
        }
    }

    @media (max-width: 480px) {
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;
// 탑 내비


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

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto; /* 스크롤 가능 */
    padding: 20px; /* 여백 */
    background-color: #f9f9f9; /* 기본 배경색 */
`;
////

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    padding: 0 50px; 
    margin-top: 30px;
    margin-bottom: 20px;
`;
//

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

export const LevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px; 
    width: 100%;
`;

export const LevelText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 8px; 
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    max-width: 338px; 
    min-width: 250px;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
        max-width: 318px; 
        height: 8px;
    }

    @media (max-width: 480px) {
        max-width: 310px; 
        min-width: 250px; 
        height: 6px;
    }
`;

export const ProgressBarFill = styled.div<{ $progress: number }>`
    width: ${({ $progress }) => $progress}%; 
    height: 100%;
    background-color: #40AD00; 
    transition: width 0.3s ease-in-out; 
`;


export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    width: 320px;

    @media (max-width: 768px) {
        width: 330px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 480px) {
        width: 320px;
        flex-direction: column;
        align-items: center;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border: 1px solid #D1D1D1;
    border-radius: 8px;
    padding: 17px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        width: 100%;
        padding: 12px 15px;
    }
`;

export const BoxLabel = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

export const BoxValue = styled.span`
    font-size: 16px;
    font-weight: normal;
    color: #555;
`;

export const BoxTrend = styled.div<{ $trend: "up" | "down" }>`
    width: 20px;
    height: 20px;
    background-color: ${({ $trend }) => ($trend === "up" ? "#4caf50" : "#f44336")};
    mask: ${({ $trend }) =>
        $trend === "up" ? "url('/path/to/up-arrow.svg')" : "url('/path/to/down-arrow.svg')"};
    mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask: ${({ $trend }) =>
        $trend === "up" ? "url('/path/to/up-arrow.svg')" : "url('/path/to/down-arrow.svg')"};
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
`;

export const GraphWrapper = styled.div`
    margin-top: 20px;
    width: 318px;
    max-width: 320px; 
    height: 400px; 
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 100%;
        height: 300px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        height: 250px;
    }
`;


