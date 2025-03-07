import { useState } from "react";
import * as S from "./Styles";

interface RoutineProps {
    color: string;
    label: { key: string; value: string };
    memberId: number;
    date: string;
    onSubmit: (routineData: { memberId: number; date: string; routineType: string; name: string }) => void;
}

const RoutineInput: React.FC<RoutineProps> = ({ color, label, memberId, date, onSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputValue.trim()) {
            const routineData = {
                memberId,
                date,
                routineType: label.key, // key는 routineType
                name: inputValue, // value는 name
            };
            onSubmit(routineData);
            setInputValue("");
        }
    };

    return (
        <S.RoutineContainer>
            <S.Label>
                <S.Dot $color={color} />
                {label.value}
            </S.Label>
            <S.Input value={inputValue} onChange={handleChange} onKeyDown={handleSubmit} placeholder="여기에 루틴을 입력하세요!" />
        </S.RoutineContainer>
    );
};

export default RoutineInput;
