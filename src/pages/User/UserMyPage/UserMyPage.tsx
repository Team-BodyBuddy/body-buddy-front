import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";

const UserMyPage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    return (
        <>
            <TopNavigation activeTab="마이" onTabClick={handleTabClick} />
            <S.Title>Admin BodyBuddy</S.Title>
            <S.Content>
                <p>마이 페이지의 내용을 여기에 작성하세요.</p>
            </S.Content>
        </>
    );
};

export default UserMyPage;
