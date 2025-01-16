import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import { useState, useEffect } from "react";
import { RankingElement } from "../../components/Ranking/Ranking";
import RankingList from "../../components/Ranking/RankingList";
import { myScore, bodybudyData, gymData, myGym } from "../../mocks/rank-mock";
import NoGymMessage from "../../components/Ranking/NoGymMessage";

enum Tab {
    BodyBudy = "bodybudy",
    Gym = "gym",
}

const RankingPage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const [activeTab, setActiveTab] = useState<Tab>(Tab.BodyBudy);
    const [rankingData, setRankingData] = useState<any[]>(bodybudyData);
    const [gym, setGym] = useState(myGym.name);
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
        // 로딩이 완료되었을 때 스크롤 활성화
        setIsContentLoaded(true);
    }, []);

    useEffect(() => {
        console.log("gym 값이 변경되었습니다:", gym);
        setGym(myGym.name);
    }, [gym]);

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        //탭에 맞는 데이터로 변경
        if (tab === Tab.BodyBudy) {
            setRankingData(bodybudyData);
        } else if (tab === Tab.Gym) {
            setRankingData(gymData);
        }
    };

    console.log("화면");

    return (
        <>
            <TopNavigation activeTab="랭킹" onTabClick={handleTabClick} />
            <S.ContentContainer>
                <S.Buttons>
                    <S.Button $active={activeTab === Tab.BodyBudy} onClick={() => handleTabChange(Tab.BodyBudy)}>
                        바디버디 리그
                    </S.Button>

                    <S.Button $active={activeTab === Tab.Gym} onClick={() => handleTabChange(Tab.Gym)}>
                        GYM 리그
                    </S.Button>
                </S.Buttons>

                {activeTab === Tab.Gym ? (
                    gym === "" ? (
                        <NoGymMessage />
                    ) : (
                        <>
                            <S.Box>
                                <S.GymInfo>{`${gym}`}</S.GymInfo>
                            </S.Box>
                            <S.Box>
                                <RankingElement data={myScore} />
                            </S.Box>
                            <S.BoxList style={{ overflowY: isContentLoaded ? "scroll" : "hidden" }}>
                                <RankingList rankingData={rankingData} />
                            </S.BoxList>
                        </>
                    )
                ) : (
                    <>
                        <S.Box>
                            <RankingElement data={myScore} />
                        </S.Box>
                        <S.BoxList>
                            <RankingList rankingData={rankingData} />
                        </S.BoxList>
                    </>
                )}
            </S.ContentContainer>
        </>
    );
};

export default RankingPage;
