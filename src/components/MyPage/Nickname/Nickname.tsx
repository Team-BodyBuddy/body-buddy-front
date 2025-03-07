//마이페이지 : 닉네임 레벨
import React from "react";
import * as S from "./Styles";

interface NicknameProps {
    nickname: string;
    avatarLevel: number;
}

const Nickname: React.FC<NicknameProps> = ({ nickname, avatarLevel }) => {
    return (
        <S.Container>
            <S.Img>이미지</S.Img>
            <S.Name>{nickname}</S.Name>
            <S.Lv>LV {avatarLevel}</S.Lv>
        </S.Container>
    );
};

export default Nickname;
