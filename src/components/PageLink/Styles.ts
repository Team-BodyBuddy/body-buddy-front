import styled from "styled-components";

export const PageLink = styled.div<{$textcolor?: string}>`
    color: ${(props) => props.$textcolor};
    text-align: center;

    &.findIdPassword { // 아이디/비번 찾기 글자 위치
        margin-top: 15px;
    }
    
    &.userSignup { // 회원가입 글자 위치치
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }

`;


