import styled from "styled-components";

export const DetailContainer = styled.div`
    padding: 16px;
    background-color: #f9f9f9;
    overflow-y: auto;
`;

export const ProfileHeader = styled.div`
    margin: 20px 30px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`;

export const ProfileImageLarge = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ddd;
`;

export const ProfileName = styled.div`
    font-size: 16px;
    font-weight: 800;
`;

export const EditableSection = styled.div`
    margin-bottom: 16px;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: space-between; /* 각 요소를 좌우로 배치 */
    margin-bottom: 12px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SectionTitle = styled.span`
    flex: 1; /* 나머지 공간 차지 */
    font-size: 14px;
    color: #888;
  text-align: left; /* 왼쪽 정렬 */
`;

export const SectionContent = styled.span`
    flex: 1.5; 
    font-size: 16px;
    font-weight: bold;
    text-align: left; 
    color: #000;
`;

export const SectionIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const EditIcon = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &::before {
        content: "✏️";
        font-size: 16px;
        color: #555;
    }
`;

export const FormContainer = styled.form`
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SaveIcon = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    &::before {
        content: "✔️";
        font-size: 16px;
        color: #007bff;
    }
`;
