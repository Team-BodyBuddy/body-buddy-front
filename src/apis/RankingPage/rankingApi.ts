import { ApiResponse } from "../../entity/ApiResponse";
import { RankingData, RankingItem } from "../../entity/RankingEntity";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getRankings = async (type: "gym" | "global"): Promise<RankingData> => {
    try {
        const url = type === "global" ? "/rankings/global" : "/rankings/gym/1";
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
        const url = type === "global" ? "/rankings/user/1" : "/rankings/user/1/gym/1";
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
