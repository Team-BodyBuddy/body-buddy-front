import { ApiResponse } from "../../entity/ApiResponse";
import { RankingData, RankingItem } from "../../entity/RankingEntity";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getRankings = async (type: "gym" | "global"): Promise<RankingData> => {
    try {
        const url = type === "global" ? "/api/rankings/global" : "/api/rankings/gym/1";
        const response = await axiosInstance.get<ApiResponse<RankingData>>(url, {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
            params: { page: 0, size: 55 },
        });
        return response.data.result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getRankingUser = async (type: "gym" | "global"): Promise<RankingItem> => {
    try {
        const url = type === "global" ? "/api/rankings/user/1" : "/api/rankings/user/1/gym/1";
        console.log(url);
        const response = await axiosInstance.get<ApiResponse<RankingItem>>(url, {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
        });
        return response.data.result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
