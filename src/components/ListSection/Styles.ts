import styled from "styled-components";

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 95%;
    max-width: 400px;
    overflow-y: auto;
    padding-right: 5px;

    &::-webkit-scrollbar {
      width: 4px; 
    }

    &::-webkit-scrollbar-thumb {
        background: #D9D9D9; 
        border-radius: 57px; 
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 50px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 10px;
`;

export const ProfileText = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;
