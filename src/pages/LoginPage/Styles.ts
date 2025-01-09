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
        background-color: #ffffff;
    }

    @media (max-height: 932px) { 
        max-height: calc(100vh - 10px);
    }
`;

export const Intro = styled.div`
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
`;

export const IntroText = styled.div`
    margin: 130px 0px 0px 33px;
`;

export const Title = styled.div`
    margin: 22px 0px 0px 33px;
`;

export const CenterContainer = styled.div`
    margin: 63px 0px 0px 36px;
    width: 80%; 
    height: 251px;
`;

export const ErrorMessage = styled.span`
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.13px;
    color: #FF4040;
    position:relative;
    top:15px;
    left:155px;
`;