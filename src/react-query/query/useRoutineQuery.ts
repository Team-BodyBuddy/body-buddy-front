import { useQuery } from "@tanstack/react-query";
import { getRoutineData } from "../../apis/Routine/routineApi";

export const useRoutineQuery = (memberId: number, date: string, shouldFetch: boolean) => {
    return useQuery({
        queryKey: ["routineData", date],
        queryFn: () => getRoutineData(memberId, date),
        retry: 0,
        enabled: shouldFetch,
    });
};
