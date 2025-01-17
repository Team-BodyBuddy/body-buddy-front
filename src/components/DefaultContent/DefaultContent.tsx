// 레벨, 그래프 컴포넌트
import React, { useState } from "react";
import * as S from "./Styles";
import TrendGraph from "../../components/TrendGraph/TrendGraph";
import PointModal from "../../components/Modal/PointModal/PointModal";

interface DefaultContentProps {
    level: number;
    progress: number;
    metabolicRate: { label: string; value: string; trend: string };
    weight: { label: string; value: string; trend: string };
    onProgressIncrement: () => void;
    getTrend: (trend: string) => "up" | "down";
}

const DefaultContent: React.FC<DefaultContentProps> = ({ level, progress, metabolicRate, weight, onProgressIncrement, getTrend }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleButtonClick = () => {
        onProgressIncrement(); // 기존 함수 호출
        setIsModalVisible(true); // 모달창 열기
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <S.LevelWrapper>
                <S.LevelText>Lv. {level}</S.LevelText>
                <S.ProgressBarContainer>
                    <S.ProgressBarFill $progress={progress} />
                </S.ProgressBarContainer>
            </S.LevelWrapper>

            <S.Button onClick={handleButtonClick}>경험치</S.Button>
            {isModalVisible && <PointModal onClose={handleCloseModal} />}

            <S.GraphWrapper>
                <TrendGraph />
            </S.GraphWrapper>
        </>
    );
};

export default DefaultContent;
