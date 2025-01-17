import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import AboutSection from "../../../components/AboutSection/AboutSection";
import BadgeSection from "../../../components/BadgeSection/BadgeSection";
import MemberListSection from "../../../components/MemberListSection/MemberListSection";
import FileUploadSection from "../../../components/FileUploadSection/FileUploadSection";
import BackButton from "../../../components/BackButton/BackButton";
import * as S from "./Styles";

const PortfolioPage: React.FC = () => {
    const navigate = useNavigate();
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const [showFileUpload, setShowFileUpload] = useState(false); // 파일 업로드 UI 상태

    const badges = ["어떤 뱃지", "어떤 뱃지", "어떤 뱃지"];

    const aboutItems = Array.from({ length: 15 }, (_, index) => `포트폴리오 수정하기 ${index + 1}`);

    return (
        <>
            <TopNavigation activeTab="바디버디" onTabClick={handleTabClick} />

            <BackButton onClick={() => navigate(-1)} />
            
            <S.DetailContainer>
                <S.ProfileHeader>
                    <S.ProfileImageLarge />
                    <S.ProfileName>김건강(27세, 남)</S.ProfileName>
                    <S.ProfileInfo>172cm, 60kg</S.ProfileInfo>
                    <S.ProfileInfo>사는 곳: gym 이름</S.ProfileInfo>
                </S.ProfileHeader>

                <AboutSection
                    aboutItems={aboutItems.map((item, index) => (
                        <S.ClickableItem
                            key={index}
                            onClick={() => setShowFileUpload(true)} 
                        >
                            {item}
        </S.ClickableItem>
    ))}
/>

                <BadgeSection badges={badges} />

                <MemberListSection />
            </S.DetailContainer>

            {showFileUpload && <FileUploadSection />}
        </>
    );
};

export default PortfolioPage;
