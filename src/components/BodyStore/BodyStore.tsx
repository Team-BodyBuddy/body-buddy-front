import React, { useState } from "react";
import * as S from "./Styles";
import PopUp from "../PopUp/PopUp"; // 팝업 컴포넌트 가져오기
import PointsPopUp from "../PointsPopUp/PointsPopUp";

type Tab = "카테고리1" | "카테고리2" | "카테고리3" | "카테고리4";

const BodyStore: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>("카테고리1");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPointsPopupVisible, setIsPointsPopupVisible] = useState(false);

    const handleTabClick = (tab: Tab): void => {
        setActiveTab(tab);
    };

    const handleGridItemClick = (): void => {
        setIsPopupVisible(true); // 팝업 표시
    };

    const handlePopupOption = (): void => {
        setIsPopupVisible(false); // 현재 팝업 닫기
    };

    const handleOpenPointsPopup = (): void => {
        setIsPointsPopupVisible(true); // 포인트 부족 팝업 표시
    };

    const handleClosePointsPopup = (): void => {
        setIsPointsPopupVisible(false); // 포인트 부족 팝업 닫기
    };

    const handleOptionSelect = (option: "yes" | "no"): void => {
        handlePopupOption(); // 현재 팝업 닫기
        if (option === "yes") {
            handleOpenPointsPopup(); // "예" 클릭 시 포인트 부족 팝업 표시
        }
    };

    return (
        <S.ContentWrapper>
            <S.BodyStoreContainer>
                <S.TabHeader>
                    {["카테고리1", "카테고리2", "카테고리3", "카테고리4"].map((tab) => (
                        <S.TabButton
                            key={tab}
                            $active={activeTab === tab}
                            onClick={() => handleTabClick(tab as Tab)}
                        >
                            {tab}
                        </S.TabButton>
                    ))}
                </S.TabHeader>

                {/* 탭 콘텐츠 */}
                <S.TabContent>
                    <S.GridContainer>
                        {Array.from({ length: 20 }).map((_, index) => (
                            <S.GridItem
                                key={`${activeTab}-${index}`}
                                onClick={handleGridItemClick}
                            >
                                {activeTab} Item {index + 1}
                            </S.GridItem>
                        ))}
                    </S.GridContainer>
                </S.TabContent>
            </S.BodyStoreContainer>

            {/* 첫 번째 팝업 */}
            <PopUp
                isVisible={isPopupVisible}
                onClose={() => setIsPopupVisible(false)}
                onOptionSelect={handleOptionSelect}
            />

            {/* 포인트 부족 팝업 */}
            <PointsPopUp
                isVisible={isPointsPopupVisible}
                onClose={handleClosePointsPopup}
            />
        </S.ContentWrapper>
    );
};

export default BodyStore;
