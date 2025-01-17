import React, { useState } from "react";
import BadgeSection from "../../../components/BadgeSection/BadgeSection";
import EditableList from "../../../components/EditableList/EditableList"; 
import MemberListSection from "../../../components/MemberListSection/MemberListSection";
import * as S from "./Styles";
import EditForm from "../../../components/EditForm/EditForm";
import TrainerTopNavi from "./../../../components/TrainerTopNavi/TrainerTopNavi"
import { CheckPort } from "../../../components/icons";

const TrainerPortfolio: React.FC = () => {
    const [isEditingList, setIsEditingList] = useState(false); 
    const [isEditingRegion, setIsEditingRegion] = useState(false); 
    const [selectedItem, setSelectedItem] = useState<string | null>(null); 

    // 테스트 데이터터
    const aboutItems = Array.from({ length: 10 }, (_, index) => `포트폴리오 수정하기 ${index + 1}`);

    const handleItemClick = (item: string) => {
        setSelectedItem(item); // 선택된 아이템 상태 업데이트
        console.log(`선택된 아이템: ${item}`);
    };

    // 저장 버튼 클릭 핸들러
    const handleSave = () => {
        if (selectedItem) {
            console.log(`저장 완료: ${selectedItem}`);
            setIsEditingList(false); // 저장 후 창 닫기
        } else {
            console.log("아이템을 선택해주세요.");
        }
    };

    return (
        <>
            <TrainerTopNavi
                activeTab="포트폴리오"
                onTabClick={(tab) => console.log(`${tab} 탭 클릭됨`)}  
            />
            <S.DetailContainer>
                <S.ProfileHeader>
                    <S.ProfileImageLarge />
                    <S.ProfileName>김건강(27세, 남)</S.ProfileName>
                </S.ProfileHeader>

                {isEditingRegion ? (
                    <EditForm onSave={() => setIsEditingRegion(false)} />
                ) : (
                    <S.EditableSection>
                        <S.ContentGroup>
                            <S.ContentRow>
                                <S.SectionTitle>지역</S.SectionTitle>
                                <S.SectionContent>지역 / Gym</S.SectionContent>
                            </S.ContentRow>
                            <S.ContentRow>
                                <S.SectionTitle>키/몸무게</S.SectionTitle>
                                <S.SectionContent>172cm / 57kg</S.SectionContent>
                            </S.ContentRow>
                        </S.ContentGroup>
                        <S.EditIcon onClick={() => setIsEditingRegion(!isEditingRegion)}>
                            <CheckPort />
                        </S.EditIcon>
                    </S.EditableSection>
                )}

                {isEditingList ? (
                    <EditableList items={aboutItems} onItemClick={handleItemClick} onSave={handleSave}/>
                ) : (
                    <S.EditableSection>
                        <S.SectionHeader>
                            <S.SectionContent>포트폴리오 수정하기</S.SectionContent>
                            <S.EditIcon onClick={() => setIsEditingList(true)}>
                                <CheckPort />
                            </S.EditIcon>
                        </S.SectionHeader>
                    </S.EditableSection>
                )}
                <BadgeSection 
                    badges={["어떤 뱃지", "어떤 뱃지", "어떤 뱃지"]} 
                />
                <MemberListSection />
            </S.DetailContainer>
        </>
    );
};

export default TrainerPortfolio;
