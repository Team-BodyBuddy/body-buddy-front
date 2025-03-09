import axios from "axios";
import { refreshAccessToken } from "./Login/loginApi";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          const newAccessToken = await refreshAccessToken(refreshToken);
          localStorage.setItem("accessToken", newAccessToken);

          //모든 axios 요청에 적용
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;

          // 현재 요청에도 적용
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("토큰 갱신 실패:", refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
