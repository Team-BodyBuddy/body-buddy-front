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

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap:15px;
    margin-bottom: 17px;
`;

export const Text = styled.div`
    font-weight: 600;
    font-size: 14px;
    display:flex;
    justify-content: space-between;
`;

export const Alert = styled.div`
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.13px;
    color: #FF4040;
`;

export const Input = styled.input`
    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.51px;

    height: 47px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 86px;
    padding: 10px;
    color:rgb(0, 0, 0);
    font-size: 14px;
    padding-left:20px;

  ::placeholder {
    color: #DEDEDE;
  }
`;