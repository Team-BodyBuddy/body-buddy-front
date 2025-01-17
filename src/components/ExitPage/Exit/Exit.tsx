//마이페이지 : 회원 탈퇴
import React from "react";
import * as S from "./Styles";
import { ExitLogo } from "../../icons";

const Exit: React.FC = () => {
    return <S.Container>
        <S.Img><ExitLogo/></S.Img>
        <S.Title>정말 탈퇴하시겠어요?</S.Title>
        <S.Text>탈퇴 버튼 선택시,<br/>계정은 삭제되며 복구되지 않습니다.</S.Text>
        <S.Btn>회원탈퇴</S.Btn>
    </S.Container>;
};

export default Exit;