import { useMutation, useQueryClient } from "@tanstack/react-query";
import { purchaseItem } from "../../../apis/item";
import { PurchaseItemRequest, PurchaseItemResponse } from "../../../apis/item/types";

export const usePurchaseItemMutation = () => {
    const queryClient = useQueryClient();

    return useMutation<PurchaseItemResponse, Error, PurchaseItemRequest>({
        mutationFn: async (data: PurchaseItemRequest) => purchaseItem(data), 
        onSuccess: (data) => {
            console.log("Purchase Successful:", data);

            queryClient.setQueryData<number>(["points", data.result.itemId], data.result.remainingPoints);
            queryClient.invalidateQueries({ queryKey: ["points", data.result.itemId] });
        },
        onError: (error: Error) => {
            console.error("Purchase Failed:", error);
        }
    });
};
