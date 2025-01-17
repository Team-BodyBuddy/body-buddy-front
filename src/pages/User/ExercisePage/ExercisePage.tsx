import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";

const ExercisePage: React.FC = () => {
    const handleTabClick = (tab: string) => {
      console.log(`${tab} 탭 클릭됨`);
    };
    return (
        <>
          <TopNavigation activeTab="운동관리" onTabClick={handleTabClick} />
          <div>
              <h1>운동 관리 페이지</h1>
              <p>여기에 운동 관리와 관련된 콘텐츠를 추가하세요.</p>
          </div>
        </>
    );
};

export default ExercisePage;
