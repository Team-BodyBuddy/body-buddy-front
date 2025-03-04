import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f9f9f9;
    overflow-y: auto;

    @media (max-width: 430px) {
        height: auto;
        background-color: #ffffff;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    gap: 40px;
`;
