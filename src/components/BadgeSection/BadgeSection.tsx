import React from "react";
import * as S from "./Styles";
import { Bulb } from "../icons"; // Bulb 아이콘 가져오기

interface BadgeSectionProps {
    badges: string[];
}

const BadgeSection: React.FC<BadgeSectionProps> = ({ badges }) => {
    return (
        <>
            <S.SectionTitle>뱃지</S.SectionTitle>
            <S.BadgeContainer>
                <S.BadgeWrapper>
                    {badges.map((badge, index) => (
                        <S.BadgeItem key={index}>
                            <S.BadgeIcon>
                                <Bulb />
                            </S.BadgeIcon>
                            <S.BadgeText>{badge}</S.BadgeText>
                        </S.BadgeItem>
                    ))}
                </S.BadgeWrapper>
            </S.BadgeContainer>
        </>
    );
};

export default BadgeSection;
