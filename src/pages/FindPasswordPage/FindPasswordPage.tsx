// 비번 찾기 페이지
// import React, { useContext, useState } from "react";
import * as S from "./Styles";
import { LeftArrow } from "../../components/icons";

const FindPasswordPage: React.FC = () => {

    return (
        <S.Container>
            <S.TopContainer>
                <S.TopBar>
                    <S.Icon><LeftArrow></LeftArrow></S.Icon>
                    <S.Title>아이디/비밀번호 찾기</S.Title>
                    <S.Icon></S.Icon>
                </S.TopBar>
            </S.TopContainer>

            <S.FindOptions>
                <S.OptionsWrapper>
                    <S.ID>아이디 찾기</S.ID>
                    <S.Password>비밀번호 찾기</S.Password>
                </S.OptionsWrapper>
                <S.LineWrapper></S.LineWrapper>
            </S.FindOptions>
            
            <S.ContentWrapper></S.ContentWrapper>
        </S.Container>
    );
};

export default FindPasswordPage;