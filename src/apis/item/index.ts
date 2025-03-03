import axiosInstance from "../axiosInstance";
import { ApiResponse, PurchaseItemRequest, PurchaseItemResponse } from "./types"; 
import { itemMockData } from "./mocks"; 

const TempToken = process.env.REACT_APP_TEMP_TOKEN;

export const fetchItemCategories = async (memberId: number): Promise<ApiResponse> => {
    try {
        const response = await axiosInstance.get<ApiResponse>(`/api/deco/${memberId}/itemCategory`, 
            {
                headers: {
                    Authorization: `Bearer ${TempToken}`
                },
            });
        return response.data;
    } catch (error) {
        console.error(error);
        return itemMockData; 
    }
};

export const purchaseItem = async (data: PurchaseItemRequest): Promise<PurchaseItemResponse> => {
    try {
        const response = await axiosInstance.post<PurchaseItemResponse>(
            `/api/deco/${data.memberId}/item/${data.itemId}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${TempToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Purchase Item Error:", error);
        throw error;
    }
};