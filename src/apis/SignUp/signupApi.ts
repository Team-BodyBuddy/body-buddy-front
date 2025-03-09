import { ApiResponse } from "../../entity/ApiResponse";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

// 트레이너 회원가입
export const TrainerSignUp = async (data: {
  loginId: string;
  password: string;
  confirmPassword: string;
  realName: string;
  gender: string;
  birthday: string;
  height: number;
  weight: number;
  region: string;
  gymId: number;
}) => {
  try {
    const response = await axiosInstance.post("/api/auth/trainers/signup", {
      loginId: data.loginId,
      password: data.password,
      confirmPassword: data.confirmPassword,
      realName: data.realName,
      gender: data.gender,
      birthday: data.birthday,
      height: data.height,
      weight: data.weight,
      region: data.region,
      gymId: data.gymId,
    });
    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {};

// 유저 회원가입
export const UserSignUp = async (data: {
  loginId: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  realName: string;
  gender: string;
  birthday: string;
  height: number;
  weight: number;
  region: string;
  gymId: number;
}) => {
  try {
    const response = await axiosInstance.post("/api/auth/members/signup", {
      loginId: data.loginId,
      password: data.password,
      confirmPassword: data.confirmPassword,
      nickname: data.nickname,
      realName: data.realName,
      gender: data.gender,
      birthday: data.birthday,
      height: data.height,
      weight: data.weight,
      region: data.region,
      gymId: data.gymId,
    });
    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {};
