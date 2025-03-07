import React, { useState } from "react";
import * as S from "./Styles";
import { BigCheckMark } from "../icons";
import { useUpdatePortfolio } from "../../react-query/mutation/usePortfolio/useUpdateMutation";

interface EditableListProps {
    items: string[];
    onItemClick: (item: string) => void;
    onSave: () => void;
}

const EditableList: React.FC<EditableListProps> = ({ items, onItemClick, onSave }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true); 
    const trainerId = 10;
    const portfolioId = 1;

    const { mutate } = useUpdatePortfolio();

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        onItemClick(item);
    };

    const handleSave = (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedItem) {
            console.log(`선택된 아이템: ${selectedItem}`);

            mutate({ trainerId, portfolioId, data: { title: selectedItem, description: "수정된 설명" } }, {
                onSuccess: () => {
                    console.log("포트폴리오 수정 성공!");
                    onSave();
                    setIsVisible(false); 
                },
                onError: (error) => {
                    console.error("포트폴리오 수정 실패:", error);
                },
            });
        } else {
            console.log("아이템을 선택해주세요.");
        }
    };

    if (!isVisible) return null; 

    return (
        <S.ListContainer onSubmit={handleSave}>
            <S.HeaderGroup>
                <S.Title>포트폴리오 수정하기</S.Title>
                <S.CloseButton onClick={handleSave}> 
                    <BigCheckMark />
                </S.CloseButton>
            </S.HeaderGroup>
            <S.ItemList>
                {items.map((item, index) => (
                    <S.Item
                        key={index}
                        onClick={() => handleItemClick(item)}
                        $isSelected={item === selectedItem}
                    >
                        {item}
                    </S.Item>
                ))}
            </S.ItemList>
        </S.ListContainer>
    );
};

export default EditableList;
