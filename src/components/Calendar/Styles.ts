import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const HeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Select = styled.select`
    font-size: 16px;
    background-color: inherit;
    border: none;
    border-radius: 4px;
    outline: none;
    width: 25%;
`;

export const DateWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
`;
