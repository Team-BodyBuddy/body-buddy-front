import * as S from "./Styles";

interface RoutineProps {
    color: string;
    label: string;
}

const RoutineInput: React.FC<RoutineProps> = ({ color, label }) => {
    return (
        <S.RoutineContainer>
            <S.Label>
                <S.Dot $color={color} />
                {label}
            </S.Label>
            <S.Input />
        </S.RoutineContainer>
    );
};

export default RoutineInput;
