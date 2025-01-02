import React from "react";
import TopNavigation from "../../components/TopNavigation/TopNavigation";

const RankingPage: React.FC = () => {
    const handleTabClick = (tab: string) => {
      console.log(`${tab} 탭 클릭됨`);
    };
    return (
        <>
            <TopNavigation activeTab="랭킹"  onTabClick={handleTabClick}/>
            <div>
                <h1>랭킹 페이지</h1>
                <p>랭킹 데이터를 표시하는 콘텐츠를 여기에 추가하세요.</p>
            </div>
        </>
    );
};

export default RankingPage;
