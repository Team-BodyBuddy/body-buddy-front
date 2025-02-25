import { AvatarInfo, WeightHistory, InBody, PointsTotal } from "./types";

export const AvatarMock: AvatarInfo = {
    isSuccess: true,
    code: "string",
    message: "string",
    result:
        {
            imagePath: "string",
            level: 9007199254740991,
            exp: 9007199254740991,
            nickname: "string",
        }
};

export const WeightMock: WeightHistory = {
    isSuccess: true,
    code: "string",
    message: "string",
    result:
        {
            weight: 0.1,
            muscle: 0.1,
            bodyFat: 0.1,
        }
} 

export const InBodyMock: InBody = {
    isSuccess: true,
    code: "string",
    message: "string",
    result:
        {
            weight: 0.1,
            muscle: 0.1,
            bodyFat: 0.1,
            weightStatus: "UP",
            muscleStatus: "UP",
            bodyFatStaus: "UP"
        }
}

export const PointsTotalMock: PointsTotal = {
    isSuccess: true,
    code: "string",
    message: "string",
    result: 9007199254740991
}