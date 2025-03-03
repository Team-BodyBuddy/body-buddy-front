export interface RegionResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: string[];
}

export interface GymResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        id: number;
        name: string;
        region: string;
    }[];
}
