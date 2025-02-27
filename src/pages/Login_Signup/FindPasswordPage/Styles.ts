import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: 26.875rem) {
        height: auto;
        background-color: #ffffff;
    }

    @media (max-height: 58.25rem) {
        max-height: calc(100vh - 0.625rem);
    }
`;

export const TopContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
`;

export const Icon = styled.span`
    position: relative;
    top: -1.35rem;
    left: 0;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: -0.02em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

export const FindOptions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: -0.02em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 4.375rem;
`;

export const LineWrapper = styled.span`
    margin-top: 0.4375rem;
    border-bottom: 1px solid #40ad00;
    margin-left: 2rem;
    margin-right: 2rem;
`;

export const ContentWrapper = styled.div``;
