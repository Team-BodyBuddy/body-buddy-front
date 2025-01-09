import styled from "styled-components";

export const DetailContainer = styled.div`
    padding: 16px;
    background-color: #f9f9f9;
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
    margin-bottom: 16px;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px; 
    display: flex;
    flex-direction: column; 
    gap: 16px; 
`;

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    &:last-child {
    margin-bottom: 0;
    }
`;


export const SectionTitle = styled.span`
    flex: 1; 
    font-size: 14px;
    color: #888;
    text-align: left; 
`;

export const SectionContent = styled.span`
    flex: 1.8; 
    width: 100%;
    font-size: 13px;
    font-weight: 500;
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
    position: relative;

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
