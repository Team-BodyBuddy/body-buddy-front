// 로그인 페이지
// import React, { useContext, useState } from "react";
import * as S from "./Styles";
import { Logo } from "../../components/icons";
import NextButton from "../../components/NextButton/NextButton";
import AuthInput from "../../components/AuthInput/AuthInput";
import PageLink from "../../components/PageLink/PageLink";

const LoginPage: React.FC = () => {

    return (
        <S.Container>
            <S.Intro>
                <S.IntroText>당신의 가장 가까운 친구,</S.IntroText>
                <S.Title><Logo></Logo></S.Title>
            </S.Intro>

            <S.CenterContainer>
                <form>
                    <AuthInput 
                        label="아이디"
                        placeholder="아이디를 입력해 주세요"
                        errorMessage="*아이디 혹은 비밀번호가 일치하지 않습니다."
                    />
                    <AuthInput 
                        label="비밀번호"
                        placeholder="비밀번호를 입력해 주세요"
                        type="password"
                    />
                </form>
                <NextButton onClick={() => {}} $bgcolor="#40AD00">로그인</NextButton>
            </S.CenterContainer>

            <PageLink 
                $textcolor="#979797" 
                text="아이디 찾기 / 비밀번호 찾기" 
                to="/findId"
                className="findIdPassword"></PageLink>
            
            <PageLink 
                $textcolor="#40AD00" 
                text="회원 가입" 
                to="/userSignup"
                className="userSignup"></PageLink>
        </S.Container>
    );
};

export default LoginPage;
