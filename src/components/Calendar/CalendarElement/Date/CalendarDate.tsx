import React from "react";
import * as S from "./Styles";
import { format } from "date-fns";

interface DateCellProps {
    day: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    indicatorType?: string;
    hasIndicator: boolean;
}

const CalendarDate: React.FC<DateCellProps> = ({ day, isCurrentMonth, isToday, indicatorType, hasIndicator }) => {
    return (
        <S.DateCell $isCurrentMonth={isCurrentMonth} $isToday={isToday}>
            {format(day, "d")}
            {indicatorType && hasIndicator && (
                <div style={{ display: "flex", marginBottom: "30%", gap: "2px" }}>
                    {indicatorType === "BOTH" ? (
                        <>
                            <S.Dot $type="red" />
                            <S.Dot $type="blue" />
                        </>
                    ) : (
                        <S.Dot $type={indicatorType} />
                    )}
                </div>
            )}
        </S.DateCell>
    );
};

export default CalendarDate;
