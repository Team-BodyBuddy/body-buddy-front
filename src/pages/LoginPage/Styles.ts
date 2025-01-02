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
    gap:17px;
    margin-bottom: 17px;
`;

export const Text = styled.div`
    font-weight: 600;
    font-size: 14px;
`;

export const Input = styled.div`
    text-align: center;
`;

export const Button = styled.div`

`;



export const Find = styled.div`
    color: #979797;
    text-align: center;
    margin-top: 3%;
`;

export const Signup = styled.div`
    color: #40AD00;
    position: fixed;
    bottom: calc(5vh); 
    left: 50%; 
    transform: translateX(-50%); 
`;