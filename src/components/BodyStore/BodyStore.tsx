import React, { useState, useContext } from "react";
import * as S from "./Styles";
import PopUp from "../PopUp/PopUp";
import PointsPopUp from "../PointsPopUp/PointsPopUp"; 
import { useItemCategories } from "../../react-query/query/useItemQuery";
import { usePurchaseItemMutation } from "../../react-query/mutation/useItemMutation/usePurchaseMutation";
import { FluxContext } from "../../zustand/stores/FluxContext"; 

type Tab = "카테고리1" | "카테고리2" | "카테고리3" | "카테고리4";

const BodyStore: React.FC = () => {
    const fluxContext = useContext(FluxContext);
    if (!fluxContext) {
        throw new Error("BodyStore must be used within a FluxProvider");
    }
    const { state } = fluxContext;
    const memberId = state.memberId;

    const [activeTab, setActiveTab] = useState<Tab>("카테고리1");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPointsPopupVisible, setIsPointsPopupVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState<{ id: number; name: string; price: number } | null>(null);

    const purchaseMutation = usePurchaseItemMutation();
    const { data, isLoading } = useItemCategories(memberId);

    if (isLoading) return <div>아이템을 불러오는 중...</div>;

    const handleGridItemClick = (itemId: number, itemName: string, itemPrice: number): void => {
        setSelectedItem({ id: itemId, name: itemName, price: itemPrice });
        setIsPopupVisible(true); 
    };

    const handlePurchase = () => {
        if (!selectedItem) return;

        purchaseMutation.mutate(
            { memberId, itemId: selectedItem.id },
            {
                onSuccess: (data) => {
                    console.log(data);
                    setIsPopupVisible(false);
                    setIsPointsPopupVisible(true); 
                },
                onError: (error) => {
                    console.error(error);
                },
            }
        );
    };

    return (
        <S.ContentWrapper>
            <S.BodyStoreContainer>
                <S.TabHeader>
                    {["카테고리1", "카테고리2", "카테고리3", "카테고리4"].map((tab) => (
                        <S.TabButton key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab as Tab)}>
                            {tab}
                        </S.TabButton>
                    ))}
                </S.TabHeader>

                <S.TabContent>
                    <S.GridContainer>
                        {data?.result.map((item) => (
                            <S.GridItem
                                key={item.id}
                                onClick={() => handleGridItemClick(item.id, item.name, item.price)}
                                style={{
                                    backgroundColor: item.status === "ACTIVE" ? "#d4edda" : "#f8d7da",
                                    cursor: "pointer",
                                }}
                            >
                                <img src={item.imagePath} alt={item.name} width={40} height={40} />
                                <div>{item.name}</div>
                                <div>{item.price}P</div>
                            </S.GridItem>
                        ))}
                    </S.GridContainer>
                </S.TabContent>
            </S.BodyStoreContainer>

            <PopUp
                isVisible={isPopupVisible}
                onClose={() => setIsPopupVisible(false)}
                onOptionSelect={handlePurchase}
            />

            <PointsPopUp
                isVisible={isPointsPopupVisible}
                onClose={() => setIsPointsPopupVisible(false)}
            />

        </S.ContentWrapper>
    );
};

export default BodyStore;
