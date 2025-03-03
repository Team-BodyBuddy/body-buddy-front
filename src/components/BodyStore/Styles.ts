import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    overflow-x: hidden;
`;

export const BodyStoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
`;

export const TabHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background-color: transparent;
    height: 50px;
    margin: 0 auto;
    padding: 0 0.25rem;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    max-width: 90%;
`;

export const TabButton = styled.button<{ $active: boolean }>`
    padding: 1rem;
    font-size: 0.813rem;
    border: none;
    border-bottom: ${({ $active }) => ($active ? "2px solid black" : "2px solid transparent")};
    background-color: transparent;
    color: ${({ $active }) => ($active ? "#000" : "#B0B0B0")}; 
    cursor: pointer;
    transition: border-bottom 0.2s ease, color 0.2s ease;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #000;
    }
`;

export const TabContent = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 6.25rem); 
    padding: 1.25rem;

    scrollbar-width: none; 
    -ms-overflow-style: none; 

    &::-webkit-scrollbar {
        width: 0;
        background: transparent; 
    }

    &::-webkit-scrollbar-thumb {
        background: transparent; 
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.625rem;
    width: 100%;
    min-height: auto;
    overflow: hidden;
`;

export const GridItem = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 5rem;
    width: 5rem;
    max-width: 100%;
    position: relative;

    .icon {
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        transform: translate(-50%, -50%);
        opacity: 0.7;
    }
`;
