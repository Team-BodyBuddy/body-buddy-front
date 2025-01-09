import styled from "styled-components";

export const ListContainer = styled.div`
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const ItemList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    padding: 8px 12px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;
