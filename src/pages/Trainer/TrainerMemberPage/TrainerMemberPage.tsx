import { useState, useContext } from "react";
import MemberInfo from "../../../components/MemberInfo/MemberInfo";
import TodoElement from "../../../components/Todo/TodoElement";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import { todoData } from "../../../mocks/todo-mock";
import * as S from "./Styles";
import GraphModal from "../../../components/Modal/GraphModal/GraphModal";
import TrendGraph from "../../../components/TrendGraph/TrendGraph";
import Calendar from "../../../components/Calendar/Calendar";
import { FluxContext } from "../../../zustand/stores/FluxContext";

const TrainerMemberPage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const context = useContext(FluxContext);
    if (!context) {
        throw new Error("FluxContext must be used within a FluxProvider");
    }
    const { state } = context;

    const handleMemberInfoClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <S.Container>
            <TopNavigation activeTab="홈" onTabClick={handleTabClick} />
            <S.ContentWrapper>
                <MemberInfo onClick={handleMemberInfoClick} />
                <Calendar calendarData={[]} />
                <TodoElement data={todoData} />
            </S.ContentWrapper>

            {isModalOpen && (
                <GraphModal onClose={handleModalClose}>
                    <TrendGraph memberId={state.memberId} />
                </GraphModal>
            )}
        </S.Container>
    );
};
export default TrainerMemberPage;
