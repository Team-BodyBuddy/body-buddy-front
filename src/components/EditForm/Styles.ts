import styled from "styled-components";

export const FormContainer = styled.form`
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
    margin-bottom: 16px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #ffffff;
`;

export const Input = styled.input`
    width: calc(50% - 8px);
    margin-right: 8px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    &:last-child {
        margin-right: 0;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export const SaveButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #007bff; /* 기본 파란색 배경 */
    color: #fff; /* 흰색 텍스트 */
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #0056b3; /* 호버 시 더 짙은 파란색 */
        transform: scale(1.02); /* 약간 확대 */
    }

    &:active {
        background-color: #003f7f; /* 클릭 시 더 짙은 파란색 */
        transform: scale(0.98); /* 약간 축소 */
    }

    &:disabled {
        background-color: #ddd; /* 비활성화 상태 회색 */
        cursor: not-allowed; /* 클릭 불가 표시 */
    }
`;