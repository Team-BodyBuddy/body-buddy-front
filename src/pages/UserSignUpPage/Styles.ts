import styled from "styled-components";

export const Container = styled.div`
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
    }

    @media (max-height: 932px) { 
        max-height: calc(100vh - 10px);
    }
`;

export const TopContainer = styled.div`
    margin-top:3rem;
    margin-bottom:2rem;
`;

export const TopBar = styled.div`
    display:flex;
    flex-direction: row;
    gap: 37%; 
    margin-left: 30px;
    margin-right: 10px;

    @media (max-width: 375px) {
        gap: 33%;
        margin-left: 30px;
    }
`;

export const Icon = styled.div`
    width:7%;
    height:7%;
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
    /* font-size: 15px;
    font-weight: 500; */
    line-height: 29px;
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
    margin-top:15px;
    border-bottom : 1px solid #40AD00;
    margin-left:2rem;
    margin-right:2rem;
`;

export const Trainer = styled.span`
    display:flex;
    gap:10px;
`;

export const User = styled.span`
    display:flex;
    gap:10px;
`;

export const Container1 = styled.div`
    margin-left:32px;
    margin-right:32px;
    border-bottom : 1px solid #40AD00;
`;

export const Container2 = styled.div`
    margin-left:32px;
    margin-right:32px;
    border-bottom : 1px solid #40AD00;
`;

export const Container3 = styled.div`
    margin-left:32px;
    margin-right:32px;
`;

export const Detail1 = styled.div`

`;

export const Detail2 = styled.div`
    margin-bottom:20px;
`;

export const Detail3 = styled.div`

`;

export const Detail4 = styled.div`
    margin-bottom:20px;
`;

export const Header = styled.div`
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #333333;
`;

export const Content = styled.div`
    margin-bottom: 10px;
    /* background-color:rgb(171, 159, 159); */
`;

export const Box = styled.div`
    display:flex;
    gap:10px;
`;

export const PasswordContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`;

export const LocationContent = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
    margin-bottom: 10px;
`;

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`;

export const Star = styled.span`
    color: #40AD00;
`;

export const BirthdayContent = styled.div`
    margin-bottom: 10px;
    gap:10px;
    display:flex;
    flex-direction:row;
`;

