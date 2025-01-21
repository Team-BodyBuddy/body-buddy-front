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
    }

    @media (max-height: 58.25rem) {
        max-height: calc(100vh - 0.625rem);
    }
`;

export const TopContainer = styled.div`
    position: sticky;
    margin-top: 3rem;
    margin-bottom: 2rem;
`;

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Icon = styled.span`
    position: relative;
    top: -3.35rem;
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

    line-height: 1.8125rem;
    letter-spacing: -0.02em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 20%;
`;

export const LineWrapper = styled.span`
    margin-top: 0.9375rem;
    border-bottom: 1px solid #40ad00;
    margin-left: 2rem;
    margin-right: 2rem;
`;

export const Trainer = styled.span`
    display: flex;
    gap: 0.625rem;
`;

export const User = styled.span`
    display: flex;
    gap: 0.625rem;
`;

export const Container1 = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    border-bottom: 1px solid #40ad00;
`;

export const Container2 = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    border-bottom: 1px solid #40ad00;
`;

export const Container3 = styled.div`
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 9.375rem;
`;

export const Detail1 = styled.div``;

export const Detail2 = styled.div`
    margin-bottom: 1.25rem;
`;

export const Detail3 = styled.div``;

export const Detail4 = styled.div`
    margin-bottom: 1.25rem;
`;

export const NextContainer = styled.div`
    margin-top: 2.5rem;
`;

export const Header = styled.div`
    margin-bottom: 0.625rem;
    margin-top: 1.25rem;
    font-family: Pretendard;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.8125rem;
    letter-spacing: -0.02em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #333333;
`;

export const Content = styled.div`
    margin-bottom: 0.625rem;
`;

export const Box = styled.div`
    display: flex;
    gap: 0.625rem;
`;

export const PasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;

export const LocationContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    margin-bottom: 0.625rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
`;

export const Star = styled.span`
    color: #40ad00;
`;

export const BirthdayContent = styled.div`
    margin-bottom: 0.625rem;
    gap: 0.625rem;
    display: flex;
    flex-direction: row;
`;
