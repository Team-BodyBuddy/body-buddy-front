import { useRoutineQuery } from "../query/useRoutineQuery";
import { useAddRoutineMutation, useRemoveRoutineMutation, useToggleRoutineMutation } from "../mutation/useRoutineMutation";

export const useRoutine = (memberId: number, date: string, indicatorMap: Record<string, boolean>) => {
    const shouldFetchRoutine = indicatorMap[date] ?? false;
    const { data: userRoutineData, error, isLoading } = useRoutineQuery(memberId, date, shouldFetchRoutine);

    const addRoutineMutation = useAddRoutineMutation();
    const removeRoutineMutation = useRemoveRoutineMutation();
    const toggleRoutineMutation = useToggleRoutineMutation();

    const handleRoutineSubmit = (routineData: { memberId: number; date: string; routineType: string; name: string }) => {
        addRoutineMutation.mutate(routineData);
    };

    const handleRoutineToggle = (routineId: number) => {
        toggleRoutineMutation.mutate(routineId);
    };

    const handleRoutineRemove = (routineData: { memberId: number; date: string; routineType: string; routineId: number; name: string }) => {
        removeRoutineMutation.mutate(routineData);
    };

    return { handleRoutineSubmit, handleRoutineRemove, handleRoutineToggle, userRoutineData, error, isLoading };
};
