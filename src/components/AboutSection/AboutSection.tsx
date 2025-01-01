import React from "react";
import * as S from "./Styles";

interface AboutSectionProps {
    aboutItems: React.ReactNode[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutItems }) => {
    return (
        <S.AboutContainer>
            <S.SectionTitle>약력</S.SectionTitle>
            <S.AboutContent>
                {aboutItems.map((item, index) => (
                    <S.AboutItem key={index}>{item}</S.AboutItem>
                ))}
            </S.AboutContent>
        </S.AboutContainer>
    );
};

export default AboutSection;
