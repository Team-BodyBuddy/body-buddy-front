import React, { useContext, useState } from "react";
import * as S from "./Styles";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import HeaderControls from "../../../components/HeaderControls/HeaderControls";
import PotatoSection from "../../../components/PopatoSection/PotatoSection";
import CategoryContent from "../../../components/BodyStore/BodyStore";
import DefaultContent from "../../../components/DefaultContent/DefaultContent";
import PointModal from "../../../components/Modal/PointModal/PointModal";
import { FluxContext } from "../../../zustand/stores/FluxContext";

type Tab = '운동관리' | '랭킹' | '홈' | '마이' | '바디버디';

const UserPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('홈');
  const [isCategoryActive, setIsCategoryActive] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const context = useContext(FluxContext);

  if (!context) {
    throw new Error("FluxContext must be used within a FluxProvider");
  }

  const { state, dispatch } = context;
  const { metabolicRate, weight } = state;

  const handleProgressIncrement = () => {
    dispatch({ type: "INCREMENT_PROGRESS", payload: 20 });
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const getTrend = (trend: string): "up" | "down" => {
    return trend === "up" || trend === "down" ? trend : "up";
  };

  const handleCategoryToggle = (): void => {
    setIsCategoryActive((prev) => !prev);
  };

  return (
    <S.Container>
      <TopNavigation activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === '홈' && (
        <>
          <HeaderControls
            memberId={state.memberId}
            isCategoryActive={isCategoryActive}
            onCategoryToggle={handleCategoryToggle}
          />
          <PotatoSection />

          {isCategoryActive ? (
            <CategoryContent />
          ) : (
            <DefaultContent
              metabolicRate={metabolicRate}
              weight={weight}
              onProgressIncrement={handleProgressIncrement}
              getTrend={getTrend}
            />
          )}

          {isModalVisible && <PointModal onClose={handleCloseModal} />} 
        </>
      )}
    </S.Container>
  );
};

export default UserPage;