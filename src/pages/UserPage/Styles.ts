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
    justify-content: center; 
    align-items: center;
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    position: relative;

    @media (max-width: 768px) {
        flex-wrap: nowrap; 
        gap: 5px; 
    }

    @media (max-width: 480px) {
        flex-wrap: nowrap; 
        gap: 0px;
        justify-content: center; 
    }
`;


export const DottedLine = styled.div`
    width: 100%;
    max-width: 338px; 
    border-bottom: 1.5px dashed #bbbbbb;
    position: absolute;
    bottom: -10px; 
    left: 50%; 
    transform: translateX(-50%);

    @media (max-width: 768px) {
        max-width: 338px; 
    }

    @media (max-width: 480px) {
        max-width: 330px; 
    }
`;


export const LeftButtons = styled.div`
    display: flex;
    gap: 10px; 
    margin-right: 13px;
    flex-wrap: nowrap; 
    justify-content: space-between; 

    @media (max-width: 768px) {
        justify-content: flex-start; 
    }

    @media (max-width: 480px) {
        justify-content: center; 
        gap: 5px; 
    }
`;

export const RightButtons = styled(LeftButtons)`
    margin-left: 13px;
`;

export const CenterIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 40px;
        height: 40px;
    }
`;

export const Button = styled.button`
    width: 70px;
    height: 34px;
    font-size: 14px;
    text-align: center;
    background-color: ${COLORS.WhiteSmoke}; 
    border: 1px solid ${COLORS.LightGray}; 
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #a4c8f0; 
    }

    @media (max-width: 768px) {
        width: 65px;
        height: 29px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 24px;
        font-size: 10px;
    }
`;


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
    background-color: #FF9500; 
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

export const SButton = styled(PButton)`
    color: #000000; 
    position: static; 
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    padding: 0 50px; 
    margin-top: 30px;
`;

export const PotatoWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 40px; 
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
    background-color: #FF9500;
    border-radius: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 15px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 5px 10px;
    }
`;


export const PotatoImageContainer = styled.div`
    width: 237px;
    height: 182px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
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

export const ProgressBarFill = styled.div<{ progress: number }>`
    width: ${({ progress }) => progress}%; 
    height: 100%;
    background-color: #FF9500; 
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
    border: 1px solid #FFDAA6;
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

export const BoxTrend = styled.div<{ trend: "up" | "down" }>`
    width: 20px;
    height: 20px;
    background-color: ${({ trend }) => (trend === "up" ? "#4caf50" : "#f44336")};
    mask: ${({ trend }) =>
        trend === "up" ? "url('/path/to/up-arrow.svg')" : "url('/path/to/down-arrow.svg')"};
    mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask: ${({ trend }) =>
        trend === "up" ? "url('/path/to/up-arrow.svg')" : "url('/path/to/down-arrow.svg')"};
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


