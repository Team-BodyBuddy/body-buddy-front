import { PointsTotal, AvatarInfo, WeightHistory, InBody } from "./types";
import { AvatarMock, WeightMock, PointsTotalMock, InBodyMock } from "./mocks";
import axiosInstance from "../axiosInstance";

export const getPoints = async (memberId:number):Promise<PointsTotal["result"]> => {
    try{
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/points/total`);
        console.log(response);
        return response.data.result;
    }catch(error){
        console.error("API 호출 에러:", error);
        return PointsTotalMock.result;
    }
}

export const getAvatarInfo = async (memberId:number):Promise<AvatarInfo["result"]> => {
    try{
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/avatarInfo`);
        console.log(response);
        return response.data.result;
    }catch(error){
        console.error("API 호출 에러:", error);
        return AvatarMock.result;
    }
}

export const getInBody = async (memberId:number):Promise<InBody["result"]> => {
    try{
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/inBody`);
        console.log(response);
        return response.data.result;
    }catch(error){
        console.error("API 호출 에러:", error);
        return InBodyMock.result;
    }
}

export const getWeightHistory = async (memberId:number):Promise<WeightHistory["result"]> => {
    try{
        const response = await axiosInstance.get(`/api/mainPage/${memberId}/inBody/weightHistory`);
        console.log(response);
        return response.data.result;
    }catch(error){
        console.error("API 호출 에러:", error);
        return WeightMock.result;
    }
}