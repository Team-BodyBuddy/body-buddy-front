import { useQuery } from "@tanstack/react-query";
import { fetchItemCategories } from "../../apis/item";

export const useItemCategories = (memberId: number) => {
    return useQuery({
        queryKey: ["itemCategories", memberId], 
        queryFn: () => fetchItemCategories(memberId),
        retry: 0, 
        refetchOnWindowFocus: false,
        refetchOnReconnect: false, 
        refetchOnMount: false,
    });
};
