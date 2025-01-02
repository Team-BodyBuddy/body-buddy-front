//마이페이지->로그아웃/회원탈퇴 페이지
import React from "react";
import * as S from "./Styles";


const MyPage: React.FC = () => {


    return (
        <S.Container>
            <S.Bar>
            <S.Title>로그아웃/회원탈퇴</S.Title>
            </S.Bar>
            <S.Tap>
                <S.Text>로그아웃</S.Text>
                <S.Text>회원탈퇴</S.Text>
            </S.Tap>
            
        </S.Container>
    );
};

export default MyPage;