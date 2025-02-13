export type ApiResponse<T> = {
    result: T;
    isSuccess: boolean;
    message: string;
};
