import { useTodayScoreMutation } from "../mutation/useTodayScoreMutation";

export const useSubmitTodayScore = () => {
    const { mutate: submitTodayScore } = useTodayScoreMutation();

    const handleSubmitDayScore = (score: "BAD" | "SOSO" | "GOOD", memberId: number, date: string) => {
        submitTodayScore({ score, memberId, date });
    };

    return { submitTodayScore, handleSubmitDayScore };
};
