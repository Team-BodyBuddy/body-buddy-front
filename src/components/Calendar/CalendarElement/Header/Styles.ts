import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: inherit;
    width: 100%;
`;

export const DayOfWeek = styled.div`
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    width: calc(100% / 7);
`;
