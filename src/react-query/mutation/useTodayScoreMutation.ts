import { useMutation } from "@tanstack/react-query";
import { postDayScore } from "../../apis/TodayScore/todayScoreApi";

export const useTodayScoreMutation = () => {
    return useMutation({
        mutationFn: ({ score, memberId, date }: { score: "BAD" | "SOSO" | "GOOD"; memberId: number; date: string }) => postDayScore(memberId, date, score),
        onSuccess: () => {
            console.log("오늘의 평가 제출 성공");
        },
        onError: (err) => {
            console.error("오늘의 평가 제출 실패:", err);
        },
    });
};
