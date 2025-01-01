import styled from "styled-components";

export const LevelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px; 
    width: 80%; 
`;

export const LevelText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 8px; 
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
        height: 8px;
    }

    @media (max-width: 480px) {
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
    width: 100%; 
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    margin-top: 10px;
    width: 100%; 
    height: 300px;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 300px;
    }

    @media (max-width: 480px) {
        height: 300px;
    }
`;

export const Button = styled.button<{ $active?: boolean }>`
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