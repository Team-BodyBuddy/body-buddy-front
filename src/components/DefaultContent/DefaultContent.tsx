// 레벨, 그래프 컴포넌트
import React from "react";
import * as S from "./Styles";
import TrendGraph from "../../components/TrendGraph";

interface DefaultContentProps {
    level: number;
    progress: number;
    metabolicRate: { label: string; value: string; trend: string };
    weight: { label: string; value: string; trend: string };
    onProgressIncrement: () => void;
    getTrend: (trend: string) => "up" | "down";
}

const DefaultContent: React.FC<DefaultContentProps> = ({
    level,
    progress,
    metabolicRate,
    weight,
    onProgressIncrement,
    getTrend,
}) => {
    return (
        <>
            <S.LevelWrapper>
                <S.LevelText>Lv. {level}</S.LevelText>
                <S.ProgressBarContainer>
                    <S.ProgressBarFill $progress={progress} />
                </S.ProgressBarContainer>
            </S.LevelWrapper>

            <S.Button onClick={onProgressIncrement}>경험치</S.Button>

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
        </>
    );
};

export default DefaultContent;
