import React, { useContext, useState, useEffect } from "react";
import * as S from "./Styles";
import { PotatoImage } from "../../components/icons";
import { FluxContext } from "../../zustand/stores/FluxContext";
import { useAvatarInfo } from "../../react-query/query/useAvatarQuery";

const PotatoSection: React.FC = () => {
  const [memberId, setMemberId] = useState<number | null>(null);
  const context = useContext(FluxContext);

  if (!context) {
    throw new Error("FluxContext must be used within a FluxProvider");
  }

  const { state } = context;

  useEffect(() => {
    if (state.memberId) {
      setMemberId(state.memberId);
    }
  }, [state.memberId]);

  const { data: avatarInfo, isLoading, isError } = useAvatarInfo(memberId || 0);

  const truncateNickname = (nickname: string, maxLength: number) => {
    return nickname.length > maxLength ? nickname.slice(0, maxLength) + ".." : nickname;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !avatarInfo) return <div>아바타 정보를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <S.PotatoWrapper>
      <S.PotatoText>{truncateNickname(avatarInfo.nickname, 10)}</S.PotatoText>
      <S.PotatoImageContainer>
        <S.StyledPotatoImage>
          <PotatoImage />
        </S.StyledPotatoImage>
      </S.PotatoImageContainer>
    </S.PotatoWrapper>
  );
};

export default PotatoSection;
