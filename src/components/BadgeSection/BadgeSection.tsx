import React from "react";
import * as S from "./Styles";
import { Bulb } from "../icons"; 

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
