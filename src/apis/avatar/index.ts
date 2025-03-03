import { PointsTotal, AvatarInfo, WeightHistory, InBody } from "./types";
import { AvatarMock, WeightMock, PointsTotalMock, InBodyMock } from "./mocks";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getPoints = async (memberId: number): Promise<PointsTotal["result"]> => {
    if (process.env.NODE_ENV === "development") {
        return PointsTotalMock.result; // ✅ 개발 환경에서는 목 데이터 반환
    }

    try {
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/points/total`, {
            headers: {
                Authorization: `Bearer ${TempToken}`
            },
        });

        return response.data?.result ?? PointsTotalMock.result; 
    } catch (error) {
        console.error("API 호출 에러:", error);
        return PointsTotalMock.result;
    }
};

export const getAvatarInfo = async (memberId: number): Promise<AvatarInfo["result"]> => {
    if (process.env.NODE_ENV === "development") {
        return AvatarMock.result; 
    }

    try {
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/avatarInfo`, {
            headers: {
                Authorization: `Bearer ${TempToken}`
            },
        });

        return response.data?.result ?? AvatarMock.result; 
    } catch (error) {
        console.error("API 호출 에러:", error);
        return AvatarMock.result; 
    }
};

export const getInBody = async (memberId: number): Promise<InBody["result"]> => {
    if (process.env.NODE_ENV === "development") {
        return InBodyMock.result;
    }

    try {
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/inBody`, {
            headers: {
                Authorization: `Bearer ${TempToken}`
            },
        });

        return response.data?.result ?? InBodyMock.result; 
    } catch (error) {
        console.error("API 호출 에러:", error);
        return InBodyMock.result; 
    }
};

export const getWeightHistory = async (memberId: number): Promise<WeightHistory["result"]> => {
    if (process.env.NODE_ENV === "development") {
        return WeightMock.result; 
    }

    try {
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/inBody/weightHistory`, {
            headers: {
                Authorization: `Bearer ${TempToken}`
            },
        });

        return response.data?.result ?? WeightMock.result; 
    } catch (error) {
        console.error("API 호출 에러:", error);
        return WeightMock.result; 
    }
};
