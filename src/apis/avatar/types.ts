export type Status = "UP" | "DOWN";

export type PointsTotal = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: number;
}

export type InBody = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        weight: number;
        muscle: number;
        bodyFat: number;
        weightStatus: Status;
        muscleStatus: Status;
        bodyFatStaus: Status;
    }
}

export type WeightHistory = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        weight: number;
        muscle: number;
        bodyFat: number;
    }
}

export type AvatarInfo = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        imagePath: string;
        level: number;
        exp: number;
        nickname: string;
    }
}