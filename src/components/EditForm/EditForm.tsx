import React from "react";
import * as S from "./Styles";

interface EditFormProps {
    onSave: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ onSave }) => {
    const handleSave = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("지역과 키/몸무게 정보가 저장되었습니다.");
        onSave();
    };

    return (
        <S.FormContainer onSubmit={handleSave}>
            <S.FormGroup>
                <label>지역</label>
                <S.Select name="region">
                    <option>지역 1</option>
                    <option>지역 2</option>
                </S.Select>
                <S.Select name="gym">
                    <option>Gym 1</option>
                    <option>Gym 2</option>
                </S.Select>
            </S.FormGroup>
            <S.FormGroup>
                <label>키/몸무게</label>
                <S.Input name="height" placeholder="키를 입력하세요..." />
                <S.Input name="weight" placeholder="몸무게를 입력하세요..." />
            </S.FormGroup>
            <S.SaveButton type="submit">저장</S.SaveButton>
        </S.FormContainer>
    );
};

export default EditForm;
