import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postDayScore } from "../../apis/TodayScore/todayScoreApi";
import { updateMonthDataEvaluatioinStatus } from "../../utils/updateMonthData";

export const useTodayScoreMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ score, memberId, date }: { score: "BAD" | "SOSO" | "GOOD"; memberId: number; date: string }) => postDayScore(memberId, date, score),
        onSuccess: (data) => {
            alert("평가가 등록되었어요!");
            queryClient.setQueryData(["monthData", data.date.slice(0, 7)], (oldData: any) => {
                return updateMonthDataEvaluatioinStatus(oldData, data);
            });
        },
        onError: (err) => {
            alert("완료한 일정이 없습니다.");
            console.error("오늘의 평가 제출 실패:", err);
        },
    });
};
