import { useQuery } from "@tanstack/react-query";
import { fetchGyms } from "../../../apis/gyms/index";

export const useGyms = (region?: string) => {
    return useQuery({
        queryKey: ["gyms", region],
        queryFn: () => fetchGyms(region),
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};
