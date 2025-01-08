import React from "react";
import * as S from "./Styles";
import { format } from "date-fns";

interface DateCellProps {
    day: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
}

const CalendarDate: React.FC<DateCellProps> = ({ day, isCurrentMonth, isToday }) => {
    return (
        <S.DateCell $isCurrentMonth={isCurrentMonth} $isToday={isToday}>
            {format(day, "d")}
        </S.DateCell>
    );
};

export default CalendarDate;
