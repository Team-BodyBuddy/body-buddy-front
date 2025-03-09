import { useMemo, useState } from "react";
import { format } from "date-fns";
import { useMonthQuery } from "../query/useMonthQuery";

export const useMonth = (memberId: number) => {
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

    const { data: userMonthData, isLoading, error } = useMonthQuery(memberId, currentMonth);

    const indicatorMap = useMemo(() => {
        if (!userMonthData) return {};
        return userMonthData.reduce((acc, day) => {
            acc[day.date] = day.indicatorType !== "NONE";
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
