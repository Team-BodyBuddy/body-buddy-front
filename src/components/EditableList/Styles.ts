import styled from "styled-components";

export const ListContainer = styled.div`
    padding: 16px;
    background-color: #fff;
    border-radius: 11px;
    border: 1px solid #c5c5c5;
`;

export const Title = styled.h3`
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 15px;
`;

export const HeaderGroup = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
`;

export const CloseButton = styled.button`
    background-color: #4caf50;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemList = styled.ul`
    list-style: none;
    padding: 12px 0px;
`;

export const Item = styled.li<{ $isSelected: boolean }>`
    border: none;
    margin-bottom: 10px;
    color: #616161;
    background-color: ${({ $isSelected }) => ($isSelected ? "#bdbdbd" : "#fff")};
    font-size: 13px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;
