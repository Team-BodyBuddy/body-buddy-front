import axiosInstance from "../axiosInstance";
import { RegionResponse } from "./types";
import { mockRegions } from "./mocks";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const fetchRegions = async (): Promise<string[]> => {
    try {
        const response = await axiosInstance.get<RegionResponse>("/api/gyms/regions",
            {
                headers: {
                    Authorization: `Bearer ${TempToken}`
                },
            });
        return response.data.result;
    } catch (error) {
        console.error(error);
        return mockRegions;
    }
};
