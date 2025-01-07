import styled from "styled-components";

// justify-content: center; /* 수평 가운데 정렬 */
// align-items: center; /* 수직 가운데 정렬 */

export const Container = styled.div`
    background-color: #C7EEEF;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: 430px) {
        height: auto;
        background-color: #ffffff;
    }

    @media (max-height: 932px) { 
        max-height: calc(100vh - 10px);
    }
`;

export const TopContainer = styled.div`
    margin-top:3rem;
    margin-bottom:2rem;
`;

export const Icon = styled.span`
    position: relative;
    top:-66px;
    left:0px;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
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
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 70px;

`;

export const LineWrapper = styled.span`
    margin-top:7px;
    border-bottom : 1px solid #40AD00;
    margin-left:2rem;
    margin-right:2rem;
`;

export const ContentWrapper = styled.div`
    
`;
