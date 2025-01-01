import React from "react";
import * as S from "./Styles";
import { PotatoImage } from "../../components/icons";

const PotatoSection: React.FC = () => {
    return (
        <S.PotatoWrapper>
            <S.PotatoText>가을에 수확한 감자</S.PotatoText>
            <S.PotatoImageContainer>
                <S.StyledPotatoImage>
                    <PotatoImage />
                </S.StyledPotatoImage>
            </S.PotatoImageContainer>
        </S.PotatoWrapper>
    );
};

export default PotatoSection;
