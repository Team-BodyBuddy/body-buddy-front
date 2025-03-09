import React from "react";
import * as S from "./Styles";
import { format } from "date-fns";

interface DateCellProps {
    day: Date;
    currentDate: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    indicatorType?: string;
    hasIndicator: boolean;
    onClick: (date: Date, currentMonth: string) => void;
}

const CalendarDate: React.FC<DateCellProps> = ({ day, isCurrentMonth, isToday, isSelected, indicatorType, hasIndicator, onClick, currentDate }) => {
    return (
        <S.DateCell $isCurrentMonth={isCurrentMonth} $isToday={isToday} $isSelected={isSelected} onClick={() => onClick(day, format(currentDate, "yyyy-MM"))}>
            <S.Text>{format(day, "d")}</S.Text>
            {indicatorType && hasIndicator && (
                <S.DotWrapper>
                    {indicatorType !== "NONE" && (
                        <>
                            {indicatorType === "BOTH" ? (
                                <>
                                    <S.Dot $type="RED" />
                                    <S.Dot $type="BLUE" />
                                </>
                            ) : (
                                <S.Dot $type={indicatorType} />
                            )}
                        </>
                    )}
                </S.DotWrapper>
            )}
        </S.DateCell>
    );
};

export default CalendarDate;
