import { ApiResponse } from "../../entity/ApiResponse";
import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

// 탈퇴
export const UserExit = async (loginId: string) => {
  try {
    const response = await axiosInstance.delete(`/api/auth/delete`, {
      params: { loginId },
      headers: {
        Authorization: `Bearer ${TempToken}`,
      },
    });

    console.log("회원 탈퇴 성공");
    return response.data.result;
  } catch (error) {
    console.error("회원 탈퇴 요청 실패:", error);
    throw error;
  }
};

export {};
