import React from "react";
import TopNavigation from "../../../components/TopNavigation/TopNavigation";
import * as S from "./Styles";
import Calendar from "../../../components/Calendar/Calendar";
import TodoElement from "../../../components/Todo/TodoElement";
import { todoData } from "../../../mocks/todo-mock";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMonthData } from "../../../apis/Calendar/calendarApi";
import { format } from "date-fns";
import TodayScore from "../../../components/TodayScore/TodayScore";
import { postDayScore } from "../../../apis/TodayScore/todayScoreApi";

const ExercisePage: React.FC = () => {
    const memberId = 10; // 임시 memberId

    const handleTabClick = (tab: string) => {
        console.log(`${tab} 탭 클릭됨`);
    };

    const currentMonth = format(new Date(), "yyyy-MM");
    const today = format(new Date(), "yyyy-MM-dd");

    //첫 화면 렌더링 시 해당 달의 데이터를 가져와야 함
    const {
        data: userMonthData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["monthData", currentMonth],
        queryFn: () => getMonthData(memberId, currentMonth),
        retry: 0,
    });

    //날짜를 누르면 해당 날짜의 데이터를 가져오기
    //루틴 데이터

    //오늘의 평가 등록하기
    const { mutate: submitTodayScore } = useMutation({
        mutationFn: (status: "BAD" | "SOSO" | "GOOD") => postDayScore(memberId, today, status),
        onSuccess: () => {
            console.log("오늘의 평가 제출 성공");
        },
        onError: (err) => {
            console.error("오늘의 평가 제출 실패:", err);
        },
    });

    const handleClick = (score: "BAD" | "SOSO" | "GOOD") => {
        submitTodayScore(score);
    };

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
                    <TodayScore onClick={handleClick} memberId={memberId} date={today} />
                </S.ContentWrapper>
            </S.Container>
        </>
    );
};

export default ExercisePage;
