//마이페이지 : 상세정보
import React from "react";
import * as S from "./Styles";

const UserInfo: React.FC = () => {
    return <S.Container>
        <S.Text>회원정보</S.Text>
        <S.Contents>이름</S.Contents>
        <S.Contents>성별</S.Contents>
        <S.Contents>생년월일</S.Contents>
    </S.Container>;
};

export default UserInfo;