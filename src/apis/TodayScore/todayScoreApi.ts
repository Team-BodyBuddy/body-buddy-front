import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const postDayScore = async (memberId: number, date: string, status: "BAD" | "SOSO" | "GOOD") => {
    const reponse = await axiosInstance.post(
        "/api/evaluation/set",
        { memberId, date, status },
        {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
        }
    );
    return reponse.data.result;
};
