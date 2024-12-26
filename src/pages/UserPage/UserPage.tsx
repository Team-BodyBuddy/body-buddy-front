import React, { useContext, useState } from "react";
import * as S from "./Styles";
import { HomeIcon, PotatoImage } from "../../components/icons";
import { FluxContext } from "../../stores/FluxContext";
import TrendGraph from "../../components/TrendGraph"; 

type Tab = '운동관리' | '랭킹' | '홈' | '마이' | '바디버디';

const UserPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('운동관리');
    const context = useContext(FluxContext);

    if (!context) {
        throw new Error("FluxContext must be used within a FluxProvider");
    }

    const { state, dispatch } = context;
    const { level, progress, points, metabolicRate, weight } = state;

    const handleProgressIncrement = () => {
        dispatch({ type: "INCREMENT_PROGRESS", payload: 20 });
    };

    const getTrend = (trend: string): "up" | "down" => {
        return trend === "up" || trend === "down" ? trend : "up"; 
    };

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
    };



    console.log("State in TrendGraph:", state);

    return (
        <S.Container>
            <S.TopWrapper>
                <S.Button
                    $active={activeTab === '운동관리'}
                    onClick={() => handleTabClick('운동관리')}
                >
                    운동관리
                </S.Button>
                <S.Button
                    $active={activeTab === '랭킹'}
                    onClick={() => handleTabClick('랭킹')}
                >
                    랭킹
                </S.Button>
                <S.CenterIcon>
                    <HomeIcon onClick={() => handleTabClick('홈')} />
                </S.CenterIcon>
                <S.Button
                    $active={activeTab === '마이'}
                    onClick={() => handleTabClick('마이')}
                >
                    마이
                </S.Button>
                <S.Button
                    $active={activeTab === '바디버디'}
                    onClick={() => handleTabClick('바디버디')}
                >
                    바디버디
                </S.Button>
            </S.TopWrapper>

            <S.Wrapper>
                <S.PButtonWrapper>
                    <S.PButton>P</S.PButton>
                    <S.PButtonText>{points} POINT</S.PButtonText>
                </S.PButtonWrapper>
                <S.SButton>S</S.SButton>
            </S.Wrapper>

            <S.PotatoWrapper>
                <S.PotatoText>가을에 수확한 감자</S.PotatoText>
                <S.PotatoImageContainer>
                    <S.StyledPotatoImage>
                        <PotatoImage />
                    </S.StyledPotatoImage>
                </S.PotatoImageContainer>
            </S.PotatoWrapper>

            <S.LevelWrapper>
                <S.LevelText>Lv. {level}</S.LevelText>
                <S.ProgressBarContainer>
                    <S.ProgressBarFill $progress={progress} />
                </S.ProgressBarContainer>
            </S.LevelWrapper>

            <S.Button onClick={handleProgressIncrement}>경험치</S.Button>

            <S.BoxContainer>
                <S.Box>
                    <S.BoxLabel>{metabolicRate.label}</S.BoxLabel>
                    <S.BoxValue>{metabolicRate.value}</S.BoxValue>
                    <S.BoxTrend $trend={getTrend(metabolicRate.trend)} />
                </S.Box>
                <S.Box>
                    <S.BoxLabel>{weight.label}</S.BoxLabel>
                    <S.BoxValue>{weight.value}</S.BoxValue>
                    <S.BoxTrend $trend={getTrend(weight.trend)} />
                </S.Box>
            </S.BoxContainer>

            <S.GraphWrapper>
                <TrendGraph />
            </S.GraphWrapper>
        </S.Container>
    );
};

export default UserPage;
