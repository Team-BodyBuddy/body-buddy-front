import { useQuery } from "@tanstack/react-query";
import { fetchRegions } from "../../apis/gyms";

export const useRegions = () => {
    return useQuery({
        queryKey: ["regions"],
        queryFn: fetchRegions,
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};
