import { ApiResponse } from "../../entity/ApiResponse";
import axiosInstance from "../axiosInstance";
import { MonthData } from "../../entity/CalendarEntity";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getMonthData = async (memberId: number, month: string) => {
    try {
        const response = await axiosInstance.get<ApiResponse<MonthData[]>>(`/api/calendar/${memberId}/month`, {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
            params: { month },
        });

        return response.data.result;
    } catch (error) {
        console.error("캘린더 데이터를 불러오는 중 오류 발생:", error);
    }
};
