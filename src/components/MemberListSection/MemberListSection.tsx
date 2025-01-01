import React from "react";
import * as S from "./Styles";

const MemberListSection: React.FC = () => {
    const members = Array.from({ length: 10 }, (_, index) => ({
        name: "닉네임123",
        level: "Lv. 12",
    }));

    return (
        <S.Container>
            <S.Title>회원목록</S.Title>
            <S.MemberList>
                {members.map((member, index) => (
                    <S.MemberCard key={index}>
                        <S.MemberIcon />
                        <S.MemberName>{member.name}</S.MemberName>
                        <S.MemberLevel>{member.level}</S.MemberLevel>
                    </S.MemberCard>
                ))}
            </S.MemberList>
        </S.Container>
    );
};

export default MemberListSection;
