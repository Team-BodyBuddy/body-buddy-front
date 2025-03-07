import { ApiResponse } from "../../entity/ApiResponse";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

// 트레이너 회원가입
export const TrainerSignUp = async (data: {
  gender: string;
  birthday: string;
  height: number;
  weight: number;
  gymId: number;
  realName: string;
  id: string;
  region: string;
}) => {
  try {
    const response = await axiosInstance.post(
      "/auth/trainers/signup",
      {
        gender: data.gender,
        birthday: data.birthday,
        height: data.height,
        weight: data.weight,
        gymId: data.gymId,
        realName: data.realName,
        id: data.id,
        region: data.region,
      },
      {
        headers: {
          Authorization: `Bearer ${TempToken}`,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {};
