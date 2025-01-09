import React from "react";
import * as S from "./Styles";
import MemberList from "./MemberList";

const MemberListSection: React.FC = () => {
    const members = Array.from({ length: 10 }, (_, index) => ({
        name: "닉네임123",
        level: "Lv. 12",
    }));

    return (
        <S.Container>
            <S.Title>회원목록</S.Title>
            <MemberList members={members}/>
        </S.Container>
    );
};

export default MemberListSection;
