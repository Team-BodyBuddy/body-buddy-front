import styled from "styled-components";

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 15px 0 10px;
`;

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
`;

export const ClickableItem = styled.div`
    font-size: 14px;
    color: #333;
    cursor: pointer;
    &:hover {
        color: #007bff; /* Hover 시 색상 변화 */
        text-decoration: underline;
    }
`;

export const ProfileImageLarge = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ddd;
    margin-bottom:10px;
`;

export const ProfileName = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const ProfileInfo = styled.div`
    font-size: 14px;
    color: #555;
`;

export const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;
