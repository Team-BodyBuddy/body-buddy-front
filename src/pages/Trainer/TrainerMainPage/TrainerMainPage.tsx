import * as S from "./Styles";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import MemberElement from "../../../components/MemberListSection/MemberList";
import { bodybudyData } from "../../../mocks/rank-mock";

const TrainerMainPage:React.FC=()=>{
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    return(
        <S.Container>
            <TopNavigation activeTab="홈"  onTabClick={handleTabClick}/>
            <S.ListWrapper>
                <MemberElement members={bodybudyData}/>
            </S.ListWrapper>
        </S.Container>
    )
}

export default TrainerMainPage;