import styled from "styled-components";

export const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #f9f9f9;
`;

export const BodyStoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-grow: 1; /* 내부 요소가 부모 높이를 따라 확장되도록 설정 */
`;

// 탭 헤더
export const TabHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;
    background-color: transparent;
    height: 50px;
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

// 🔹 `TabContent`만 스크롤 가능하도록 설정 (부모 크기를 유지하면서)
export const TabContent = styled.div`
    flex-grow: 1;
    overflow-y: auto; /* 내부에서만 스크롤 */
    height: 100%;
    max-height: calc(100vh - 100px); /* 🔹 화면 높이에서 탭 헤더 제외 */
    padding: 20px;

    /* 🔹 스크롤바 숨김 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */

    &::-webkit-scrollbar {
        width: 0;
        background: transparent; /* Chrome, Safari, Edge */
    }

    &::-webkit-scrollbar-thumb {
        background: transparent; /* 스크롤바를 투명하게 설정 */
    }
`;

// 4열 n행 그리드 컨테이너
export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
    min-height: auto; /* 🔹 내부 컨텐츠가 많아지면 자동 확장 */
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
