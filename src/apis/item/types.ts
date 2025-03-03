export interface Item {
    id: number;
    name: string;
    imagePath: string;
    price: number;
    status: "ACTIVE" | "INACTIVE";
}

export interface ApiResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: Item[];
}

export interface PurchaseItemRequest {
    memberId: number;
    itemId: number;
}

export interface PurchaseItemResponse {
    isSuccess: boolean;
    code: string;
    message: string;
    result: {
        itemId: number;
        name: string;
        imagePath: string;
        price: number;
        status: "ACTIVE";
        purchasedAt: string;
        remainingPoints: number;
    };
}
