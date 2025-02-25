import styled from "styled-components";

export const Container = styled.div`
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

export const Intro = styled.div``;

export const IntroText = styled.div`
    margin: 8.125rem 0 0 2.0625rem;
`;

export const Title = styled.div`
    margin: 1.375rem 0 0 2.0625rem;
`;

export const CenterContainer = styled.div`
    margin: 3.9375rem 0 0 2.25rem;
    width: 80%;
    height: 15.6875rem;
`;

export const LabelContainer = styled.div`
    padding-bottom: 1rem;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.044375rem;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

export const ErrorMessage = styled.span`
    font-family: Pretendard;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 0.82rem;
    color: #ff4040;
    position: relative;
    top: 0.9375rem;
    left: 9.6875rem;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    gap: 5.5rem;
`;
