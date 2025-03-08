import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTrainerDetails } from "../../../react-query/query/bodyBuddy/usePortfolio";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import AboutSection from "../../../components/AboutSection/AboutSection";
import BadgeSection from "../../../components/BadgeSection/BadgeSection";
import MemberListSection from "../../../components/MemberListSection/MemberListSection";
import BackButton from "../../../components/BackButton/BackButton";
import * as S from "./Styles";

const PortfolioPage: React.FC = () => {
    const navigate = useNavigate();
    const { trainerId } = useParams<{ trainerId: string }>(); 
    const { data: trainer, isLoading, isError } = useTrainerDetails(Number(trainerId)); 

    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    if (isLoading) return <p>로딩 중...</p>;
    if (isError || !trainer) return <p>트레이너 정보를 불러올 수 없습니다.</p>;

    return (
        <>
            <TopNavigation activeTab="바디버디" onTabClick={handleTabClick} />

            <BackButton onClick={() => navigate(-1)} />
            
            <S.DetailContainer>
                <S.ProfileHeader>
                    <S.ProfileImageLarge />
                    <S.ProfileName>{trainer.realName} ({trainer.age}세, {trainer.gender === "MALE" ? "남" : "여"})</S.ProfileName>
                    <S.ProfileInfo>{trainer.height}cm, {trainer.weight}kg</S.ProfileInfo>
                    <S.ProfileInfo>사는 곳: {trainer.region}</S.ProfileInfo>
                    <S.ProfileInfo>소속: {trainer.gymName}</S.ProfileInfo>
                </S.ProfileHeader>

                <AboutSection
                    aboutItems={trainer.portfolios.map((portfolio) => (
                        <S.ClickableItem key={portfolio.id}>
                            {portfolio.title}: {portfolio.description}
                        </S.ClickableItem>
                    ))}
                />

                <BadgeSection badges={trainer.badges.map((badge) => badge.badgeName)} />

                <MemberListSection />
            </S.DetailContainer>
        </>
    );
};

export default PortfolioPage;
