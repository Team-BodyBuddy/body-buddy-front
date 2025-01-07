import * as S from "./style";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import MemberElement from "../../components/MemberListSection/MemberList";
import { bodybudyData } from "../../mocks/rank-mock";

const TrainerMainPage:React.FC=()=>{
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    return(
        <>
            <TopNavigation activeTab="홈"  onTabClick={handleTabClick}/>
            <S.Container>
                <MemberElement members={bodybudyData}/>
            </S.Container>
        </>
    )
}

export default TrainerMainPage;