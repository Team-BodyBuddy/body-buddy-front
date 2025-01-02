import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin: 30px 0 20px;
    text-align: left;
    margin-left: 22px; 
`;

export const BadgeContainer = styled.div`
    width: 90%;
    height: 98px;
    border-radius: 11px;
    background-color: #efefef;
    padding: 40px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BadgeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BadgeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

export const BadgeIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
`;

export const BadgeText = styled.div`
    font-size: 12px;
    text-align: center;
    color: #333;
`;
