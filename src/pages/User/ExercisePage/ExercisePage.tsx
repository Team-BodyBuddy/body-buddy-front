import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";
import TodoElement from "../../../components/Todo/TodoElement";
import { todoData } from "../../../mocks/todo-mock";
import { useQuery } from "@tanstack/react-query";
import { getMonthData } from "../../../apis/Calendar/calendarApi";
import { format } from "date-fns";

const ExercisePage: React.FC = () => {
    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const currentMonth = format(new Date(), "yyyy-MM");

    //첫 화면 렌더링 시 해당 달의 데이터를 가져와야 함
    const {
        data: userMonthData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["monthData", currentMonth],
        queryFn: () => getMonthData(10, currentMonth),
        retry: 0,
    });

    //날짜를 누르면 해당 날짜의 데이터를 가져오기
    //루틴 데이터

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <TopNavigation activeTab="운동관리" onTabClick={handleTabClick} />
            <S.Container>
                <S.ContentWrapper>
                    <Calendar calendarData={userMonthData} />
                    <TodoElement data={todoData} />
                </S.ContentWrapper>
            </S.Container>
        </>
    );
};

export default ExercisePage;
