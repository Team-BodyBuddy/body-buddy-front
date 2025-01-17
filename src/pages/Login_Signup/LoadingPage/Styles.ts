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

export const Logo = styled.div`
    position: relative;
    width:149px;
    height:130px;
    top:341px;
    left:38px;
`;