import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Buttons from "../../../../components/MyPage/Buttons/Buttons";
import EditInfo from "../../../../components/MyPage/EditInfo/EditInfo";
import Nickname from "../../../../components/MyPage/Nickname/Nickname";
import UserInfo from "../../../../components/MyPage/UserInfo/UserInfo";
import TopNavigation from "../../../../components/TopNavigation/TopNavigation";

const MyPage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };
    
    const navigate = useNavigate();

    const handleExitClick = () => {
        navigate("/my/exit");
};

    return (
        <S.Container>
            <TopNavigation activeTab="마이"  onTabClick={handleTabClick}/>
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