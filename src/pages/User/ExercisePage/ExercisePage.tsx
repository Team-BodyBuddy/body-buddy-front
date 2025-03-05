import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";
import TodoElement from "../../../components/Todo/TodoElement";
import { todoData } from "../../../mocks/todo-mock";
import { format } from "date-fns";
import TodayScore from "../../../components/TodayScore/TodayScore";
import { useMonthData, useRoutine, useSubmitTodayScore } from "./useExerciseHooks";
import RoutineInput from "../../../components/RoutineInput/RoutineInput";

const ExercisePage: React.FC = () => {
    const memberId = 10; // 임시 memberId
    const { selectedDate, userMonthData, isLoading, handleMonthClick, handleDateClick } = useMonthData(memberId);
    const { handleSubmitDayScore } = useSubmitTodayScore();
    const { handleRoutineSubmit } = useRoutine();

    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    return (
        <>
            <TopNavigation activeTab="운동관리" onTabClick={handleTabClick} />
            <S.Container>
                <S.ContentWrapper>
                    <Calendar calendarData={userMonthData} onDateClick={handleDateClick} onMonthClick={handleMonthClick} currentDate={selectedDate} />
                    <TodoElement data={todoData} />
                    <RoutineInput color="rgba(37, 99, 235, 1)" label={{ key: "ROUTINE", value: "운동" }} onSubmit={handleRoutineSubmit} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                    <RoutineInput color="rgba(249, 115, 22, 1)" label={{ key: "CLASS", value: "수업" }} onSubmit={handleRoutineSubmit} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                    <TodayScore onClick={handleSubmitDayScore} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                </S.ContentWrapper>
            </S.Container>
        </>
    );
};

export default ExercisePage;
