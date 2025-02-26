import React, { useContext, useState } from "react";
import * as S from "./Styles";
import TrendGraph from "../../components/TrendGraph/TrendGraph";
import PointModal from "../../components/Modal/PointModal/PointModal";
import { FluxContext } from "../../zustand/stores/FluxContext";

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
    const context = useContext(FluxContext);
    
        if (!context) {
            throw new Error("FluxContext must be used within a FluxProvider");
        }
    
        const { state, dispatch } = context;

    const handleButtonClick = () => {
        onProgressIncrement(); 
        setIsModalVisible(true); 
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
                <TrendGraph memberId={state.memberId}/>
            </S.GraphWrapper>
        </>
    );
};

export default DefaultContent;
