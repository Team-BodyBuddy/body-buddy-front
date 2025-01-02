import styled from "styled-components";

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto; 
    padding: 20px; 
    background-color: #f9f9f9; 

    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge */
    }
`;

export const BodyStoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

// 탭 헤더
export const TabHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background-color: transparent;
    height: 50px;
    padding: 0;
    max-width: 90%;
    margin: 0 auto; 
    width: 100%;
    box-sizing: border-box; 
`;


export const TabButton = styled.button<{ $active: boolean }>`
    padding: 16px;
    font-size: 13px;
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

// 탭 콘텐츠 영역
export const TabContent = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 20px;
`;

// 4열 n행 그리드 컨테이너
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 10px;
    width: 100%; 
`;

// 그리드 아이템
export const GridItem = styled.div`
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px; 
    border-radius: 5px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    height: 75px;
    width: 100%;
    position: relative;

    .icon {
        width: 40px; 
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.7;
    }
`;

