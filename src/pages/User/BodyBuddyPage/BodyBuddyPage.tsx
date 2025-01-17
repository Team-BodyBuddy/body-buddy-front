import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import FilterSection from "../../../components/FilterSection/FilterSection";
import ListSection from "../../../components/ListSection/ListSection";
import * as S from "./Styles";

const BodyBuddyPage: React.FC = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>("지역");
    const [selectedGym, setSelectedGym] = useState<string>("Gym 선택");
    const navigate = useNavigate();

    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const handleListItemClick = () => {
        navigate("/portfolio");
    };

    return (
      <>
        <TopNavigation activeTab="바디버디" onTabClick={handleTabClick} />

        <S.Container>
            <FilterSection
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedGym={selectedGym}
                setSelectedGym={setSelectedGym}
            />

            <ListSection onListItemClick={handleListItemClick} />
        </S.Container>
      </>
    );
};

export default BodyBuddyPage;
