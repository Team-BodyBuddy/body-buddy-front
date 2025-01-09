import React from "react";
import * as S from "./Styles";
import { isSameMonth, isToday } from "date-fns";
import CalendarDate from "../Date/CalendarDate";

interface WeekRowProps {
    week: Date[];
    currentDate: Date;
}

const CalendarWeek: React.FC<WeekRowProps> = ({ week, currentDate }) => {
    return (
        <S.WeekRow>
            {week.map((day, index) => (
                <CalendarDate key={index} day={day} isCurrentMonth={isSameMonth(day, currentDate)} isToday={isToday(day)} />
            ))}
        </S.WeekRow>
    );
};

export default CalendarWeek;
