import React from "react";
import * as S from "./Styles";

interface UserInfoProps {
    name: string;
    gender: "MALE" | "FEMALE";
    birthDate: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, gender, birthDate }) => {
    //gender 구분해서 한글로 반환
    const genderText = gender === "MALE" ? "남자" : "여자";

    return (
        <S.Container>
            <S.Text>회원정보</S.Text>
            <S.Contents>이름: {name}</S.Contents>
            <S.Contents>성별: {genderText}</S.Contents>
            <S.Contents>생년월일: {birthDate}</S.Contents>
        </S.Container>
    );
};

export default UserInfo;
