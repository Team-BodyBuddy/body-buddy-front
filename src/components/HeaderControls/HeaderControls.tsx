import React from "react";
import * as S from "./Styles";
import { Cart } from "../../components/icons";
import { usePoints } from "../../react-query/query/useAvatarQuery";

interface HeaderControlsProps {
    memberId: number;
    isCategoryActive: boolean;
    onCategoryToggle: () => void;
}

const formatPoints = (points: number): string => {
    const pointsStr = points.toString();
    return pointsStr.length > 5 ? `${pointsStr.slice(0, 4)}..` : pointsStr;
};

const HeaderControls: React.FC<HeaderControlsProps> = ({ memberId, isCategoryActive, onCategoryToggle }) => {
    const { data: points, isLoading, isError } = usePoints(memberId);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>포인트 정보를 불러오는 중 오류가 발생했습니다.</div>;

    return (
        <S.Wrapper>
            <S.PButtonWrapper>
                <S.PButton>P</S.PButton>
                <S.PButtonText>{formatPoints(points ?? 0)} POINT</S.PButtonText>
            </S.PButtonWrapper>
            <S.SButton $active={isCategoryActive} onClick={onCategoryToggle}>
                <Cart />
            </S.SButton>
        </S.Wrapper>
    );
};

export default HeaderControls;
