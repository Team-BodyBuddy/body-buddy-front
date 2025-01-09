import { useState } from "react";
import { CheckButtonGray, CheckButtonGreen, RemoveTodoButton, TodoIconOff, TodoIconOn } from "../icons";
import * as S from "./Styles";

interface TodoData {
    title: string;
    type: string;
    done: boolean;
}

const TodoElement: React.FC<{ data: TodoData }> = ({ data }) => {
    const [done, setDone] = useState<boolean>(data.done);

    const handleDone = () => {
        setDone(!done);
    };

    return (
        <S.Container>
            <S.LeftWrapper>
                {done === false ? <TodoIconOn /> : <TodoIconOff />}
                <S.ContentWrapper>
                    <S.Title>{data.title}</S.Title>
                    <S.Type>{data.type}</S.Type>
                </S.ContentWrapper>
            </S.LeftWrapper>
            <S.ButtonWrapper>
                {done === false ? (
                    <CheckButtonGreen onClick={handleDone} />
                ) : (
                    <>
                        <CheckButtonGray onClick={handleDone} />
                        <RemoveTodoButton />
                    </>
                )}
            </S.ButtonWrapper>
        </S.Container>
    );
};

export default TodoElement;
