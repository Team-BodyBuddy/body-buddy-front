import React from "react";
import * as S from "./Styles";
import { Cart } from "../../components/icons";

interface HeaderControlsProps {
    points: number;
    isCategoryActive: boolean;
    onCategoryToggle: () => void;
}

const HeaderControls: React.FC<HeaderControlsProps> = ({ points, isCategoryActive, onCategoryToggle }) => {
    return (
        <S.Wrapper>
            <S.PButtonWrapper>
                <S.PButton>P</S.PButton>
                <S.PButtonText>{points} POINT</S.PButtonText>
            </S.PButtonWrapper>
            <S.SButton $active={isCategoryActive} onClick={onCategoryToggle}>
                <Cart />
            </S.SButton>
        </S.Wrapper>
    );
};

export default HeaderControls;
