import React from "react";
import * as S from "./Styles";

interface EditableListProps {
    items: string[];
    onItemClick: (item: string) => void;
}

const EditableList: React.FC<EditableListProps> = ({ items, onItemClick }) => {
    return (
        <S.ListContainer>
            <S.Title>포트폴리오 수정하기</S.Title>
            <S.ItemList>
                {items.map((item, index) => (
                    <S.Item key={index} onClick={() => onItemClick(item)}>
                        {item}
                    </S.Item>
                ))}
            </S.ItemList>
        </S.ListContainer>
    );
};

export default EditableList;
