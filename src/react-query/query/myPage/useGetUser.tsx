import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../../apis/MyPage/getUser";
import { getUserMock } from "../../../apis/MyPage/getUser/mocks";

export const useUserInfo = (memberId?: number) => {
    return useQuery({
        queryKey: ["user", memberId],
        queryFn: () => (memberId ? getUserInfo(memberId) : Promise.resolve(getUserMock.result)),
        enabled: !!memberId,
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};
