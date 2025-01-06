// 로그인 페이지
// import React, { useContext, useState } from "react";
import * as S from "./Styles";
import { Logo } from "../../components/icons";
import NextButton from "../../components/NextButton/NextButton";
import PageLink from "../../components/PageLink/PageLink";

const LoginPage: React.FC = () => {

    return (
        <S.Container>
            <S.Intro>
                <S.IntroText>당신의 가장 가까운 친구,</S.IntroText>
                <S.Title><Logo></Logo></S.Title>
            </S.Intro>

            <S.CenterContainer>
                <S.InputContainer>
                        <S.Text>
                            아이디<S.Alert>*아이디 혹은 비밀번호가 일치하지 않습니다.</S.Alert>
                        </S.Text>
                        <S.Input placeholder="아이디를 입력해 주세요" />
                    </S.InputContainer>

                    <S.InputContainer>
                        <S.Text>비밀번호</S.Text>
                        <S.Input placeholder="비밀번호를 입력해 주세요" />
                    </S.InputContainer>

                    <NextButton onClick={() => {}} bgColor="#40AD00">로그인</NextButton>
            </S.CenterContainer>

            <PageLink 
                textColor="#979797" 
                text="아이디 찾기 / 비밀번호 찾기" 
                to="/findId"
                className="findIdPassword"></PageLink>
            
            <PageLink 
                textColor="#40AD00" 
                text="회원 가입" 
                to="/userSignup"
                className="userSignup"></PageLink>
        </S.Container>
    );
};

export default LoginPage;
