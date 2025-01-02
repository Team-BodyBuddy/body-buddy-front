import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import Buttons from "../../components/Buttons/Buttons";
import EditInfo from "../../components/EditInfo/EditInfo";
//import FooterActions from "../../components/FooterActions/FooterActions";
import Nickname from "../../components/Nickname/Nickname";
import UserInfo from "../../components/UserInfo/UserInfo";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

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
            <TopNavigation activeTab="랭킹"  onTabClick={handleTabClick}/>
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