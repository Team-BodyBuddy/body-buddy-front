import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";
import TodoElement from "../../../components/Todo/TodoElement";
import { format } from "date-fns";
import TodayScore from "../../../components/TodayScore/TodayScore";
import RoutineInput from "../../../components/RoutineInput/RoutineInput";
import { useMonth } from "../../../react-query/hooks/useMonth";
import { useSubmitTodayScore } from "../../../react-query/hooks/useSubmitTodayScore";
import { useRoutine } from "../../../react-query/hooks/useRoutine";

const ExercisePage: React.FC = () => {
    const memberId = 10; // 임시 memberId
    const { selectedDate, userMonthData, isLoading, handleMonthClick, handleDateClick, indicatorMap } = useMonth(memberId);
    const { handleSubmitDayScore } = useSubmitTodayScore();
    const { handleRoutineSubmit, handleRoutineRemove, handleRoutineToggle, userRoutineData } = useRoutine(memberId, format(selectedDate, "yyyy-MM-dd"), indicatorMap);

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
                            data: routine,
                            onToggle: handleRoutineToggle,
                            onRemove: handleRoutineRemove,
                        }}
                    />
                ))}
                <RoutineInput color="rgba(37, 99, 235, 1)" label={{ key: "ROUTINE", value: "루틴" }} onSubmit={handleRoutineSubmit} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                <RoutineInput color="rgba(249, 115, 22, 1)" label={{ key: "CLASS", value: "수업" }} onSubmit={handleRoutineSubmit} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
                <TodayScore onClick={handleSubmitDayScore} memberId={memberId} date={format(selectedDate, "yyyy-MM-dd")} />
            </S.ContentWrapper>
        </>
    );
};

export default ExercisePage;
