import React from "react";
import * as S from "./Styles";

interface UserInfoProps {
    name: string;
    gender: "MALE" | "FEMALE";
    birthDate: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, gender, birthDate }) => {
    return (
        <S.Container>
            <S.Text>회원정보</S.Text>
            <S.Contents>이름: {name}</S.Contents>
            <S.Contents>성별: {gender}</S.Contents>
            <S.Contents>생년월일: {birthDate}</S.Contents>
        </S.Container>
    );
};

export default UserInfo;
