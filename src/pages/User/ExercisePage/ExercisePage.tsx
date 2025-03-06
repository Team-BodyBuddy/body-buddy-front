import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";
import TodoElement from "../../../components/Todo/TodoElement";
import { format } from "date-fns";
import TodayScore from "../../../components/TodayScore/TodayScore";
import { useMonthData, useRoutine, useSubmitTodayScore } from "./useExerciseHooks";
import RoutineInput from "../../../components/RoutineInput/RoutineInput";

const ExercisePage: React.FC = () => {
    const memberId = 10; // 임시 memberId
    const { selectedDate, userMonthData, isLoading, handleMonthClick, handleDateClick } = useMonthData(memberId);
    const { handleSubmitDayScore } = useSubmitTodayScore();
    const { handleRoutineSubmit, userRoutineData } = useRoutine(memberId, format(selectedDate, "yyyy-MM-dd"));

    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    return (
        <>
            <TopNavigation activeTab="운동관리" onTabClick={handleTabClick} />

            <S.ContentWrapper>
                <Calendar calendarData={userMonthData} onDateClick={handleDateClick} onMonthClick={handleMonthClick} currentDate={selectedDate} />
                {userRoutineData?.map((routine) => (
                    <TodoElement
                        key={routine.id}
                        data={{
                            title: routine.name,
                            type: routine.type === "ROUTINE" ? "루틴" : "수업",
                            done: routine.completed,
                            onToggle: () => console.log(`루틴 ${routine.id} 토글`),
                            onRemove: () => console.log(`루틴 ${routine.id} 삭제`),
                        }}
                    />
                ))}
                <RoutineInput color="rgba(37, 99, 235, 1)" label={{ key: "ROUTINE", value: "운동" }} onSubmit={handleRoutineSubmit} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                <RoutineInput color="rgba(249, 115, 22, 1)" label={{ key: "CLASS", value: "수업" }} onSubmit={handleRoutineSubmit} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                <TodayScore onClick={handleSubmitDayScore} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
            </S.ContentWrapper>
        </>
    );
};

export default ExercisePage;
