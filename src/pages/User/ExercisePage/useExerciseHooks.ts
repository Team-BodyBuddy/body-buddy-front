import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { getMonthData } from "../../../apis/Calendar/calendarApi";
import { postDayScore } from "../../../apis/TodayScore/todayScoreApi";
import { getRoutineData, postRoutine, removeRoutine, toggleRoutine } from "../../../apis/Routine/routineApi";

export const useMonthData = (memberId: number) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [currentMonth, setCurrentMonth] = useState<string>(format(new Date(), "yyyy-MM"));

    const handleMonthClick = (date: Date) => {
        const formattedMonth = format(date, "yyyy-MM");
        setCurrentMonth(formattedMonth);
        setSelectedDate(new Date(formattedMonth + "-01"));
        console.log(format(date, "yyyy-MM-dd"));
    };

    const handleDateClick = (date: Date) => {
        const formattedMonth = format(date, "yyyy-MM");
        setSelectedDate(date);
        setCurrentMonth(formattedMonth);
        console.log(format(date, "yyyy-MM-dd"));
    };

    const {
        data: userMonthData,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["monthData", currentMonth],
        queryFn: () => getMonthData(memberId, currentMonth),
        retry: 0,
        enabled: !!currentMonth,
    });

    // ✅ indicatorMap 생성 (해당 날짜에 indicator가 있는지 여부를 저장)
    const indicatorMap = useMemo(() => {
        if (!userMonthData) return {};
        return userMonthData.reduce((acc, day) => {
            acc[day.date] = day.indicatorType !== "NONE"; // indicator가 "NONE"이 아니면 true
            return acc;
        }, {} as Record<string, boolean>);
    }, [userMonthData]);

    return {
        selectedDate,
        currentMonth,
        userMonthData,
        isLoading,
        error,
        handleMonthClick,
        handleDateClick,
        indicatorMap,
    };
};

export const useSubmitTodayScore = () => {
    const { mutate: submitTodayScore } = useMutation({
        mutationFn: ({ score, memberId, date }: { score: "BAD" | "SOSO" | "GOOD"; memberId: number; date: string }) => postDayScore(memberId, date, score),
        onSuccess: () => {
            console.log("오늘의 평가 제출 성공");
        },
        onError: (err) => {
            console.error("오늘의 평가 제출 실패:", err);
        },
    });

    const handleSubmitDayScore = (score: "BAD" | "SOSO" | "GOOD", memberId: number, date: string) => {
        submitTodayScore({ score, memberId, date });
    };

    return { submitTodayScore, handleSubmitDayScore };
};

export const useRoutine = (memberId: number, date: string, indicatorMap: Record<string, boolean>) => {
    const queryClient = useQueryClient();
    // ✅ 해당 날짜에 indicator가 있는 경우에만 요청 실행
    const shouldFetchRoutine = indicatorMap[date] ?? false;

    // 루틴 등록 api
    const addRoutineMutation = useMutation({
        mutationFn: postRoutine,
        onSuccess: (variables) => {
            // ✅ 루틴 추가 성공 시 해당 월의 데이터 다시 불러오기
            queryClient.invalidateQueries({ queryKey: ["monthData", variables.date.substring(0, 7)] });
            queryClient.invalidateQueries({ queryKey: ["routineData", variables.date] });
        },
        onError: (error: any) => {
            console.error("Error adding routine:", error);
        },
    });

    const handleRoutineSubmit = (routineData: { memberId: number; date: string; routineType: string; name: string }) => {
        addRoutineMutation.mutate(routineData);
    };

    //루틴 조회 api
    const {
        data: userRoutineData,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["routineData", date],
        queryFn: () => getRoutineData(memberId, date),
        retry: 0,
        enabled: shouldFetchRoutine,
    });

    //루틴 토글 api
    const toggleRoutineMutation = useMutation({
        mutationFn: toggleRoutine,
        onError: (error: any) => {
            console.error("Error toggle routine:", error);
        },
    });

    const handleRoutineToggle = (routineId: number) => {
        toggleRoutineMutation.mutate(routineId);
    };

    //루틴 삭제 api
    const removeRoutineMutation = useMutation({
        mutationFn: removeRoutine,
        onSuccess: (variables) => {
            // ✅ 루틴 제거 성공 시 해당 월의 데이터 다시 불러오기
            queryClient.invalidateQueries({ queryKey: ["monthData", variables.date.substring(0, 7)] });
            queryClient.invalidateQueries({ queryKey: ["routineData", variables.date] });
        },
        onError: (error: any) => {
            console.error("Error removing routine:", error);
        },
    });

    const handleRoutineRemove = (routineData: { memberId: number; date: string; routineType: string; name: string }) => {
        removeRoutineMutation.mutate(routineData);
    };

    return { handleRoutineSubmit, handleRoutineRemove, handleRoutineToggle, userRoutineData, error, isLoading };
};
