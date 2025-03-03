import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";
import TodoElement from "../../../components/Todo/TodoElement";
import { todoData } from "../../../mocks/todo-mock";

const ExercisePage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };
    return (
        <>
            <TopNavigation activeTab="운동관리" onTabClick={handleTabClick} />
            <S.Container>
                <S.ContentWrapper>
                    <Calendar />
                    <TodoElement data={todoData} />
                </S.ContentWrapper>
            </S.Container>
        </>
    );
};

export default ExercisePage;
