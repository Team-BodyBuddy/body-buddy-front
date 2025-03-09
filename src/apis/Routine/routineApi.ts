import { ApiResponse } from "../../entity/ApiResponse";
import { RoutineItem } from "../../entity/RoutineEntity";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const postRoutine = async (routineData: { memberId: number; date: string; routineType: string; name: string }) => {
    console.log(routineData);
    const reponse = await axiosInstance.post(
        "/api/routine/add",
        { ...routineData },
        {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
        }
    );
    return reponse.data.result;
};

export const removeRoutine = async (routineData: { memberId: number; date: string; routineType: string; routineId: number; name: string }) => {
    const response = await axiosInstance.post("/api/routine/remove", routineData, {
        headers: {
            Authorization: `Bearer ${TempToken}`,
        },
    });
    return response.data.result;
};

export const getRoutineData = async (memberId: number, date: string) => {
    const response = await axiosInstance.get<ApiResponse<RoutineItem[]>>(`/api/routine/${memberId}/${date}`, {
        headers: {
            Authorization: `Bearer ${TempToken}`,
        },
    });

    return response.data.result;
};

export const toggleRoutine = async (routineId: number) => {
    console.log(`${TempToken}`);
    const response = await axiosInstance.patch(
        `/api/routine/${routineId}/toggle`,
        {},
        {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
        }
    );

    return response.data.result;
};
