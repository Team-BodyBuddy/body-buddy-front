import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { getMonthData } from "../../../apis/Calendar/calendarApi";
import { postDayScore } from "../../../apis/TodayScore/todayScoreApi";

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

    return {
        selectedDate,
        currentMonth,
        userMonthData,
        isLoading,
        error,
        handleMonthClick,
        handleDateClick,
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
