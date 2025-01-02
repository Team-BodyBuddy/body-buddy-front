//랭킹페이지-바디버디
import * as S from "./Styles";
import { useState,useEffect } from "react";
import {RankingElement} from "../../components/ranking/Ranking";
import RankingList from "../../components/ranking/RankingList";
import { myScore,bodybudyData,gymData,myGym } from "../../mocks/rank-mock";
import NoGymMessage from "../../components/ranking/NoGymMessage";

enum Tab {
    BodyBudy = "bodybudy",
    Gym = "gym",
}

const RankingBodyBudyPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.BodyBudy);
    const [rankingData,setRankingData]=useState<any[]>(bodybudyData);
    const [gym, setGym]=useState(myGym.name);

    useEffect(() => {
        console.log("gym 값이 변경되었습니다:", gym);
        setGym(myGym.name);
    }, [gym]);


    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        //탭에 맞는 데이터로 변경
        if(tab===Tab.BodyBudy){
            setRankingData(bodybudyData);
        }
        else if(tab===Tab.Gym){
            setRankingData(gymData);
        }
    };

    console.log("화면");

    return (
        <S.Container>
            <S.ContentContainer>
                <S.Buttons>
                    <S.Button 
                    $active={activeTab===Tab.BodyBudy}
                    onClick={()=>handleTabChange(Tab.BodyBudy)}>
                        바디버디 리그
                    </S.Button>

                    <S.Button
                    $active={activeTab===Tab.Gym}
                    onClick={()=>handleTabChange(Tab.Gym)}>
                        GYM 리그
                    </S.Button>
                </S.Buttons>
            
                {activeTab===Tab.Gym?(
                    gym===""?(
                        <NoGymMessage/>
                    ) : (
                        <>
                            <S.Box>
                                <S.GymInfo >{`${gym}`}</S.GymInfo>
                            </S.Box>
                            <S.Box>
                                <RankingElement data={myScore} />
                            </S.Box>
                            <S.BoxList>
                                <RankingList rankingData={rankingData}/>
                            </S.BoxList>
                        </>
                    )
                ) : (
                    <>
                        <S.Box>
                            <RankingElement data={myScore} />
                        </S.Box>
                        <S.BoxList>
                            <RankingList rankingData={rankingData}/>
                        </S.BoxList>
                    </>
                )}
                
            </S.ContentContainer>
        </S.Container>
    )
}

export default RankingBodyBudyPage;

