import { ApiResponse } from "../../entity/ApiResponse";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

// 로그인
export const Login = async (loginId: string, password: string) => {
  try {
    const response = await axiosInstance.post(
      "/api/auth/login",
      {
        loginId: loginId,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${TempToken}`,
        },
      }
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 토큰 갱신
export const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await axiosInstance.post("/api/auth/refresh", {
      refreshToken: refreshToken,
    });
    console.log("New Access Token:", response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {};
