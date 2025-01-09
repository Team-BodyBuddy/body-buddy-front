//마이페이지 : 로그아웃
import React from "react";
import * as S from "./Styles";
import { LogoutLogo } from "../../icons";

const Logout: React.FC = () => {
    return <S.Container>
        <S.Img><LogoutLogo></LogoutLogo></S.Img>
        <S.Title>현재 계정에서 로그아웃합니다.</S.Title>
        <S.Btn>로그아웃</S.Btn>
    </S.Container>;
};

export default Logout;