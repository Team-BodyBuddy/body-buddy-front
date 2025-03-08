import { TrainerListResponse } from './types';
import { mockTrainerList } from './mocks';
import axiosInstance from '../../axiosInstance';

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getTrainerList = async (gymId: number): Promise<TrainerListResponse["result"]> => {
    if (process.env.NODE_ENV === "development") {
        return mockTrainerList.result;
    }

    try {
        const response = await axiosInstance.get(`/api/trainer/list/${gymId}`, {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
        });

        return response.data?.result ?? mockTrainerList.result;
    } catch (error) {
        console.error("API 호출 에러:", error);
        return mockTrainerList.result; 
    }
};
