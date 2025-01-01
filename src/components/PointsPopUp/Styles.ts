import styled from "styled-components";

// 팝업 배경
export const PopupBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명 검정 배경 */
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 그림자 */
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    justify-content: center; /* 세로 중앙 정렬 */
    align-items: center; /* 가로 중앙 정렬 */
    padding: 20px;
`;

// 팝업 텍스트
export const PopupText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    text-align: center;
    margin-bottom: 15px; /* 버튼과의 간격 */
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; /* 버튼을 중앙 정렬 */
    gap: 10px; /* 버튼 간의 간격 */
`;

// 닫기 버튼
export const PopupButtonClose = styled.button`
    width: 111px; /* 버튼 너비 */
    height: 42px; /* 버튼 높이 */
    border: none; /* 테두리 없음 */
    background-color: #40ad00; /* 초록색 배경 */
    color: #ffffff; /* 흰색 텍스트 */
    border-radius: 8px; /* 둥근 모서리 */
    font-size: 14px; /* 텍스트 크기 */
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #2e7d00; /* 호버 시 어두운 초록색 */
    }
`;
