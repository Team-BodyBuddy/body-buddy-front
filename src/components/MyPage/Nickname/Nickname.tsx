//마이페이지 : 닉네임 레벨
import React from "react";
import * as S from "./Styles";

const Nickname: React.FC = () => {
    return <S.Container>
        <S.Img>이미지</S.Img>
        <S.Name>닉네임</S.Name>
        <S.Lv>LV</S.Lv>
    </S.Container>;
};

export default Nickname;