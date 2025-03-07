export type getUser = {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        memberId: number;
        nickname: string;
        avatarLevel: number;
        realName: string;
        gender: "MALE" | "FEMALE";
        birthday: string;
        region: string;
        gymName: string;
        heightWeight: string;
    };
};
