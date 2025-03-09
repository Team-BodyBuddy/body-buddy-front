import { useQuery } from "@tanstack/react-query";
import { getMonthData } from "../../apis/Calendar/calendarApi";

export const useMonthQuery = (memberId: number, currentMonth: string) => {
    return useQuery({
        queryKey: ["monthData", currentMonth],
        queryFn: () => getMonthData(memberId, currentMonth),
        retry: 0,
        enabled: !!currentMonth,
    });
};
