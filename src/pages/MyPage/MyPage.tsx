import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Buttons from "../../components/Buttons/Buttons";
import EditInfo from "../../components/EditInfo/EditInfo";
//import FooterActions from "../../components/FooterActions/FooterActions";
import Nickname from "../../components/Nickname/Nickname";
import UserInfo from "../../components/UserInfo/UserInfo";

const MyPage: React.FC = () => {
    const navigate = useNavigate();

    const handleExitClick = () => {
        navigate("/my/exit");
    };

    return (
        <S.Container>
            <Nickname />
            <UserInfo />
            <EditInfo />
            <Buttons />
            <S.Text onClick={handleExitClick}>
                로그아웃 / 회원 탈퇴
            </S.Text>
        </S.Container>
    );
};

export default MyPage;