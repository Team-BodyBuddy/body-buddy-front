import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const HeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Select = styled.div<{ $isDrop: boolean }>`
    font-size: 16px;
    background-color: inherit;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 35%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
`;

export const OptionWrapper = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1000%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 8px 0;
    list-style: none;
    z-index: 10;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Option = styled.li<{ $isSelected: boolean }>`
    font-size: 14px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    background-color: ${({ $isSelected }) => ($isSelected ? "rgba(64, 173, 0, 1)" : "inherit")}; // 선택된 경우 색상 변경
    color: ${({ $isSelected }) => ($isSelected ? "white" : "inherit")}; // 텍스트 색상 변경
`;

export const DateWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
`;
