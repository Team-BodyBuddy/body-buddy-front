import { useState } from "react";
import { CheckButtonGray, CheckButtonGreen, RemoveTodoButton, TodoIconOff, TodoIconOn } from "../icons";
import * as S from "./Styles";
import { RoutineItem } from "../../entity/RoutineEntity";

interface TodoData {
    data: RoutineItem;
    onRemove: (routineData: { memberId: number; date: string; routineType: string; routineId: number; name: string }) => void;
    onToggle: (routineId: number) => void;
}

const TodoElement: React.FC<{ data: TodoData }> = ({ data }) => {
    const [done, setDone] = useState<boolean>(!data.data.completed);

    const handleRemove = () => {
        const routineData = {
            memberId: data.data.memberId,
            date: data.data.date,
            routineType: data.data.type,
            routineId: data.data.id,
            name: data.data.name,
        };
        console.log(routineData);
        data.onRemove(routineData);
    };

    const handleDone = () => {
        setDone(!done);
        data.onToggle(data.data.id);
    };

    return (
        <S.Container>
            <S.LeftWrapper>
                {done === false ? <TodoIconOn /> : <TodoIconOff />}
                <S.ContentWrapper>
                    <S.Title>{data.data.name}</S.Title>
                    <S.Type>{data.data.type === "ROUTINE" ? "루틴" : "수업"}</S.Type>
                </S.ContentWrapper>
            </S.LeftWrapper>
            <S.ButtonWrapper>
                {done === false ? (
                    <CheckButtonGreen onClick={handleDone} />
                ) : (
                    <>
                        <CheckButtonGray onClick={handleDone} />
                        <RemoveTodoButton onClick={handleRemove} />
                    </>
                )}
            </S.ButtonWrapper>
        </S.Container>
    );
};

export default TodoElement;
