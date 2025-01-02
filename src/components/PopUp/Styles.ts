import styled from "styled-components";

// 팝업 배경
export const PopupBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

// 팝업 박스
export const PopupBox = styled.div`
    width: 321px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center; /* 텍스트와 버튼을 중앙 정렬 */
    align-items: center; /* 가로 중앙 정렬 */
    padding: 20px;
`;

// 텍스트
export const PopupText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 15px;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

export const PopupButton = styled.button`
    width: 111px;
    height: 42px;
    border: 1px solid #dadada;
    background-color: #ffffff; 
    color: #000000; 
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #40ad00; 
        color: #ffffff;
        border: none; 
    }
`;

