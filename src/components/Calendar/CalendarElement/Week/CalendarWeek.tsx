import React from "react";
import * as S from "./Styles";
import { format, isSameMonth, isToday } from "date-fns";
import CalendarDate from "../Date/CalendarDate";
import { MonthData } from "../../../../entity/CalendarEntity";

interface WeekRowProps {
    week: Date[];
    currentDate: Date;
    calendarData: MonthData[];
    onDateClick: (date: Date, currentMonth: string) => void;
}

const CalendarWeek: React.FC<WeekRowProps> = ({ week, currentDate, calendarData, onDateClick }) => {
    return (
        <S.WeekRow>
            {week.map((day, index) => {
                const formattedDate = format(day, "yyyy-MM-dd");

                // 해당 날짜가 calendarData에 있는지 확인
                const calendarEntry = calendarData.find((entry) => entry.date === formattedDate);
                const hasIndicator = !!calendarEntry; // 존재하면 true
                // 선택된 날짜인지 확인
                const isSelected = isSameMonth(day, currentDate) && format(day, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");

                return <CalendarDate key={index} day={day} isCurrentMonth={isSameMonth(day, currentDate)} isToday={isToday(day)} isSelected={isSelected} indicatorType={calendarEntry?.indicatorType || ""} hasIndicator={hasIndicator} onClick={onDateClick} currentDate={currentDate} />;
            })}
        </S.WeekRow>
    );
};

export default CalendarWeek;
