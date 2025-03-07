import { ApiResponse } from "../../entity/ApiResponse";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

// 트레이너 회원가입
export const userSignUp = async () => {
  try {
    const response = await axiosInstance.post("/auth/trainers/signup", {
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

export {};
