import { TrainerDetailsResponse } from './types';
import { mockTrainerDetails } from './mocks';
import axiosInstance from '../../axiosInstance';

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getTrainerDetails = async (trainerId: number): Promise<TrainerDetailsResponse["result"]> => {
  if (process.env.NODE_ENV === "development") {
    return mockTrainerDetails[trainerId]?.result ?? mockTrainerDetails[1].result;
  }

  try {
    const response = await axiosInstance.get(`/api/trainer/details/${trainerId}`, {
      headers: {
        Authorization: `Bearer ${TempToken}`,
      },
    });

    return response.data?.result ?? mockTrainerDetails[trainerId]?.result ?? mockTrainerDetails[1].result;
  } catch (error) {
    console.error("API 호출 에러:", error);
    return mockTrainerDetails[trainerId]?.result ?? mockTrainerDetails[1].result;
  }
};
