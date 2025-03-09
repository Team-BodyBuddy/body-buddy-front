import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postRoutine, removeRoutine, toggleRoutine } from "../../apis/Routine/routineApi";

export const useAddRoutineMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: postRoutine,
        onSuccess: (variables) => {
            queryClient.invalidateQueries({ queryKey: ["monthData", variables.date.substring(0, 7)] });
            queryClient.invalidateQueries({ queryKey: ["routineData", variables.date] });
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
        onSuccess: (variables) => {
            queryClient.invalidateQueries({ queryKey: ["monthData", variables.date.substring(0, 7)] });
            queryClient.invalidateQueries({ queryKey: ["routineData", variables.date] });
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
