import * as S from "./Styles";

const CalendarHeader: React.FC = () => {
    return (
        <S.Container>
            {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <S.DayOfWeek key={day}>{day}</S.DayOfWeek>
            ))}
        </S.Container>
    );
};

export default CalendarHeader;
