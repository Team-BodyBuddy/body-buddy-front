import React, { useState } from "react";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BadgeSection from "../../components/BadgeSection/BadgeSection";
import MemberListSection from "../../components/MemberListSection/MemberListSection";
import EditableList from "../../components/EditableList/EditableList"; // Component 11
import EditRegionAndSize from "../../components/EditForm/EditForm"; // Component 13
import * as S from "./Styles";

const PortfolioPage: React.FC = () => {
    // 상태 관리
    const [isEditingList, setIsEditingList] = useState(false); // Component 11 상태
    const [isEditingRegion, setIsEditingRegion] = useState(false); // Component 13 상태

    // 테스트용 데이터
    const aboutItems = Array.from({ length: 10 }, (_, index) => `포트폴리오 수정하기 ${index + 1}`);

    return (
        <>
            <TopNavigation 
                activeTab="바디버디"
                onTabClick={(tab) => console.log(`${tab} 탭 클릭됨`)}  />
            <S.DetailContainer>
                <S.ProfileHeader>
                    <S.ProfileImageLarge />
                    <S.ProfileName>김건강(27세, 남)</S.ProfileName>
                </S.ProfileHeader>

                {isEditingRegion ? (
                    <EditRegionAndSize onSave={() => setIsEditingRegion(false)} />
                ) : (
                    <S.EditableSection>
                        <S.SectionHeader>
                            <S.SectionTitle>지역</S.SectionTitle>
                            <S.SectionContent>지역 / Gym</S.SectionContent>
                        </S.SectionHeader>
                        <S.SectionHeader>
                            <S.SectionTitle>키/몸무게</S.SectionTitle>
                            <S.SectionContent>172cm / 57kg</S.SectionContent>
                            <S.EditIcon onClick={() => setIsEditingRegion(true)} />
                        </S.SectionHeader>
                    </S.EditableSection>
                )}

                {isEditingList ? (
                    <EditableList items={aboutItems} onItemClick={() => setIsEditingList(false)} />
                ) : (
                    <S.EditableSection>
                        <S.SectionHeader>
                            <S.SectionContent>포트폴리오 수정하기</S.SectionContent>
                            <S.EditIcon onClick={() => setIsEditingList(true)} />
                        </S.SectionHeader>
                    </S.EditableSection>
                )}

                {/* 뱃지 및 회원 목록 */}
                <BadgeSection 
                    badges={["어떤 뱃지", "어떤 뱃지", "어떤 뱃지"]} 
                />
                <MemberListSection />
            </S.DetailContainer>
        </>
    );
};

export default PortfolioPage;
