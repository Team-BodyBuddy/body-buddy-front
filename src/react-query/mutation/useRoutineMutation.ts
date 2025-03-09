import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRoutine, removeRoutine, toggleRoutine } from "../../apis/Routine/routineApi";
import { updateMonthDataIndicator } from "../../utils/updateMonthData";

export const useAddRoutineMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postRoutine,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["routineData", data.date] });
            queryClient.setQueryData(["monthData", data.date.slice(0, 7)], (oldData: any) => {
                return updateMonthDataIndicator(oldData, data);
            });
        },
        onError: (error: any) => {
            console.error("Error adding routine:", error);
        },
    });
};

export const useRemoveRoutineMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeRoutine,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["routineData", data.date] });
            queryClient.setQueryData(["monthData", data.date.slice(0, 7)], (oldData: any) => {
                return updateMonthDataIndicator(oldData, data);
            });
        },
        onError: (error: any) => {
            console.error("Error removing routine:", error);
        },
    });
};

export const useToggleRoutineMutation = () => {
    return useMutation({
        mutationFn: toggleRoutine,
        onError: (error: any) => {
            console.error("Error toggling routine:", error);
        },
    });
};
