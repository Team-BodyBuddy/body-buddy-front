import styled from "styled-components";

export const DetailContainer = styled.div`
    padding: 16px;
    background-color: #fff;
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
    font-size: 18px;
    font-weight: 800;
`;

export const EditableSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    background-color: #fff;
    padding: 20px;
    border-radius: 12px; 
    flex-direction: row; 
    gap: 16px; 
    border: 1px solid #c5c5c5;
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 15px;

    &:last-child {
    margin-bottom: 0;
    }
`;

export const SectionTitle = styled.span`
    flex: 1.2; 
    font-size: 13px;
    color: #888;
    text-align: left; 
`;

export const SectionContent = styled.span`
    flex: 1.8; 
    font-size: 13px;
    font-weight: 500;
    text-align: left; 
    color: #000;
    border: none;
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
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start; 
`;

export const ContentGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px; 
`;

export const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    width: 100%;
`;

export const FormContainer = styled.form`
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
`;

export const ListContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
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
