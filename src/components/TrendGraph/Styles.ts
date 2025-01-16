import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
    margin-bottom: 30px;
    background-color: inherit;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;

// 텍스트 카드 섹션
export const TextCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 20px;
    font-size: 16px;
    font-weight: bold;
    border: 1.2px solid #d1d1d1;
    color: #333;
    border-radius: 10px;
    background-color: #f6f6f6;
`;

export const GraphCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    border: 1.2px solid #d1d1d1;
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 0px 40px;
`;

export const GraphHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #333;
`;

export const GraphWrapper = styled.div`
    height: 60px;
    width: 100%;
    overflow: hidden;
`;

export const TextLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
`;

export const TextValue = styled.span`
    font-size: 14px;
    display: flex;
    align-items: center;
`;

export const GraphSection = styled.div`
    margin-top: 20px;
`;

export const GraphValue = styled.span`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const DownArrow = styled.div`
    width: 16px;
    height: 16px;
    background-color: #2196f3;
    mask: url("/path/to/down-arrow.svg") no-repeat center;
    -webkit-mask: url("/path/to/down-arrow.svg") no-repeat center;
`;

export const TrendIcon = styled.span<{ $trend: "up" | "down" }>`
    color: ${({ $trend }) => ($trend === "up" ? "#4caf50" : "#2196f3")};
    font-size: 16px;
`;

export const GraphBox = styled.div`
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button<{ $active?: boolean }>`
    flex-grow: 1;
    height: 40px;
    font-size: 13px;
    text-align: center;
    background-color: transparent;
    border: none;
    border-bottom: ${(props) => (props.$active ? "3px solid black" : "2px solid transparent")};
    font-weight: ${(props) => (props.$active ? "bold" : "normal")};
    cursor: pointer;
    transition: border-bottom 0.3s;

    &:hover {
        background-color: transparent;
    }
`;

export const GraphLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;
