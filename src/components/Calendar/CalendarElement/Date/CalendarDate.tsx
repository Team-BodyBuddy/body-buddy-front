import React from "react";
import * as S from "./Styles";
import { format } from "date-fns";
import { MonthData } from "../../../../entity/CalendarEntity";

interface DateCellProps {
    day: Date;
    currentDate: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    calendarEntry: MonthData;
    onClick: (date: Date, currentMonth: string) => void;
}

const CalendarDate: React.FC<DateCellProps> = ({ day, isCurrentMonth, isToday, isSelected, calendarEntry, onClick, currentDate }) => {
    return (
        <S.DateCell $isCurrentMonth={isCurrentMonth} $isToday={isToday} $isSelected={isSelected} $status={calendarEntry.evaluationStatus} onClick={() => onClick(day, format(currentDate, "yyyy-MM"))}>
            <S.Text>{format(day, "d")}</S.Text>
            {calendarEntry.indicatorType && (
                <S.DotWrapper>
                    {calendarEntry.indicatorType !== "NONE" && (
                        <>
                            {calendarEntry.indicatorType === "BOTH" ? (
                                <>
                                    <S.Dot $type="RED" />
                                    <S.Dot $type="BLUE" />
                                </>
                            ) : (
                                <S.Dot $type={calendarEntry.indicatorType} />
                            )}
                        </>
                    )}
                </S.DotWrapper>
            )}
        </S.DateCell>
    );
};

export default CalendarDate;
