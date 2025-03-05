import axiosInstance from "../axiosInstance";

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const postRoutine = async (routineData: { memberId: number; date: string; routineType: string; name: string }) => {
    const reponse = await axiosInstance.post(
        "/api/routine/add",
        { ...routineData },
        {
            headers: {
                Authorization: `Bearer ${TempToken}`,
            },
        }
    );
    return reponse.data;
};
