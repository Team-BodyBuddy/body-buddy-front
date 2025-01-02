import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 90%;
    height: 265px;
    border-radius: 11px;
    background-color: #fff;
    padding: 18px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    margin-top: 40px; 
`;

export const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const AboutContent = styled.div`
    flex: 1; 
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    &::-webkit-scrollbar {
        width: 4px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc; 
        border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 2px; 
    }

    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
`;

export const AboutItem = styled.div`
    font-size: 14px;
    color: #333;
`;
