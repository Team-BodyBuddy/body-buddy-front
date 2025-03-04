import axiosInstance from "../axiosInstance";
import { TrainerBadgesResponse } from "./types";
import { MOCK_TRAINER_BADGES } from "./mocks";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;
let trainerId: number | null = null;

export const getTrainerBadges = async (): Promise<TrainerBadgesResponse> => {
  try {
    if (!trainerId) {
      trainerId = 999;
    }

    const response = await axiosInstance.get<TrainerBadgesResponse>(`/api/badges/trainers/${trainerId}`, {
        headers: {
            Authorization: `Bearer ${TempToken}`,
        },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return MOCK_TRAINER_BADGES;
  }
};
