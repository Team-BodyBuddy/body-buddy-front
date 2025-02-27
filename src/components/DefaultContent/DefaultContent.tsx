import React, { useContext, useState, useEffect } from "react";
import * as S from "./Styles";
import TrendGraph from "../../components/TrendGraph/TrendGraph";
import PointModal from "../../components/Modal/PointModal/PointModal";
import { FluxContext } from "../../zustand/stores/FluxContext";
import { useAvatarInfo } from "../../react-query/query/useAvatarQuery";

interface DefaultContentProps {
  metabolicRate: { label: string; value: string; trend: string };
  weight: { label: string; value: string; trend: string };
  onProgressIncrement: () => void;
  getTrend: (trend: string) => "up" | "down";
}

const MAX_LEVEL = 999;
const MAX_EXP = 9007199254740991;

const DefaultContent: React.FC<DefaultContentProps> = () => {
  const [memberId, setMemberId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const context = useContext(FluxContext);

  if (!context) throw new Error("FluxContext must be used within a FluxProvider");
  const { state } = context;

  useEffect(() => {
    if (state.memberId) setMemberId(state.memberId);
  }, [state.memberId]);

  const { data: avatarInfo, isLoading, isError } = useAvatarInfo(memberId || 0);

  const handleLevelClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !avatarInfo) return <div>아바타 정보를 불러오는 중 오류가 발생했습니다.</div>;

  const calculatedLevel = Math.min(avatarInfo.level, MAX_LEVEL);
  const progressPercentage = Math.min((avatarInfo.exp / MAX_EXP) * 100, 100);

  return (
    <>
      <S.LevelWrapper onClick={handleLevelClick} style={{ cursor: "pointer" }}>
        <S.LevelText>
          Lv. {calculatedLevel >= MAX_LEVEL ? `${MAX_LEVEL} (MAX)` : calculatedLevel}
        </S.LevelText>
        <S.ProgressBarContainer>
          <S.ProgressBarFill $progress={progressPercentage} />
        </S.ProgressBarContainer>
      </S.LevelWrapper>

      {isModalVisible && <PointModal onClose={handleCloseModal} />} 

      <S.GraphWrapper>
        {memberId && <TrendGraph memberId={memberId} />}
      </S.GraphWrapper>
    </>
  );
};

export default DefaultContent;
