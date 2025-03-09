import { UpdatePortfolioResponse, Portfolio } from "./types";
import { mockUpdatePortfolioResponse } from "./mocks";
import axiosInstance from "../../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const updatePortfolio = async (
  trainerId: number,
  portfolioId: number,
  data: Portfolio
): Promise<UpdatePortfolioResponse> => {
  if (process.env.NODE_ENV === "development") {
    return new Promise((resolve) => setTimeout(() => resolve(mockUpdatePortfolioResponse))); 
  }

  try {
    const response = await axiosInstance.put<UpdatePortfolioResponse>(
      `/api/trainers/${trainerId}/portfolios/${portfolioId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${TempToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("[API 오류] 포트폴리오 수정 실패:", error);
    return mockUpdatePortfolioResponse; 
  }
};
