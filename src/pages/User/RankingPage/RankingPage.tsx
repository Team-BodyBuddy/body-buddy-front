import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import { useState, useEffect } from "react";
import { RankingElement } from "../../../components/Ranking/Ranking";
import RankingList from "../../../components/Ranking/RankingList";
import { myGym } from "../../../mocks/rank-mock";
import NoGymMessage from "../../../components/Ranking/NoGymMessage";
import { useQuery } from "@tanstack/react-query";
import { getRankings, getRankingUser } from "../../../apis/RankingPage/rankingApi";

/*
"result": {
    "links": [],
    "content": [
      {
        "rank": 1,
        "nickname": "string",
        "rankingScore": 10,
        "level": 1
      },
*/
enum Tab {
    Global = "global",
    Gym = "gym",
}

const RankingPage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const [activeTab, setActiveTab] = useState<Tab>(Tab.Global);

    const {
        data: rankingData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["rankingData", activeTab],
        queryFn: () => getRankings(activeTab),
        retry: 0,
    });

    const { data: userRankData } = useQuery({
        queryKey: ["userRank", activeTab],
        queryFn: () => getRankingUser(activeTab),
        retry: 0,
    });

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
    };

    console.log("화면");
    console.log(rankingData);

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <TopNavigation activeTab="랭킹" onTabClick={handleTabClick} />
            <S.ContentContainer>
                <S.Buttons>
                    <S.Button $active={activeTab === Tab.Global} onClick={() => handleTabChange(Tab.Global)}>
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
                                <RankingElement data={userRankData} />
                            </S.Box>
                            <S.BoxList style={{ overflowY: isContentLoaded ? "scroll" : "hidden" }}>
                                <RankingList rankingData={rankingData?.content ?? []} />
                            </S.BoxList>
                        </>
                    )
                ) : (
                    <>
                        <S.Box>
                            <RankingElement data={userRankData} />
                        </S.Box>
                        <S.BoxList>
                            <RankingList rankingData={rankingData?.content ?? []} />
                        </S.BoxList>
                    </>
                )}
            </S.ContentContainer>
        </>
    );
};

export default RankingPage;
