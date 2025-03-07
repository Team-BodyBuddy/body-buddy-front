import { getUser } from "./types";
import { getUserMock } from "./mocks";
import axiosInstance from "../../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const getUserInfo = async (memberId: number): Promise<getUser["result"]> => {
    if (process.env.NODE_ENV === "development") {
        return getUserMock.result;
    }

    try {
        const response = await axiosInstance.get<{ result: getUser["result"] }>(`/api/myPage/${memberId}`, {
            headers: {
                Authorization: TempToken ? `Bearer ${TempToken}` : "",
            },
        });

        return response.data.result ?? getUserMock.result;
    } catch (error) {
        console.error("UserInfo API 호출 오류:", error);
        return getUserMock.result;
    }
};
