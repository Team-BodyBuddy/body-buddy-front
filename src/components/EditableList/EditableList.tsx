import React, { useState } from "react";
import * as S from "./Styles";
import { BigCheckMark } from "../icons";

interface EditableListProps {
    items: string[];
    onItemClick: (item: string) => void;
    onSave: () => void;
}

const EditableList: React.FC<EditableListProps> = ({ items, onItemClick, onSave }) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setSelectedItem(item); 
        onItemClick(item); 
    };

    const handleSave = (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedItem) {
            console.log(`선택된 아이템: ${selectedItem}`);
            onSave();
        } else {
            console.log("아이템을 선택해주세요.");
        }
    };
    
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
