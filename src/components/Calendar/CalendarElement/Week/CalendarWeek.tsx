import React from "react";
import * as S from "./Styles";
import { format, isSameMonth, isToday } from "date-fns";
import CalendarDate from "../Date/CalendarDate";
import { defaultCalendarEntry, MonthData } from "../../../../entity/CalendarEntity";

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

                // 선택된 날짜인지 확인
                const isSelected = isSameMonth(day, currentDate) && format(day, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");

                return <CalendarDate key={index} day={day} isCurrentMonth={isSameMonth(day, currentDate)} isToday={isToday(day)} isSelected={isSelected} calendarEntry={calendarEntry || defaultCalendarEntry} onClick={onDateClick} currentDate={currentDate} />;
            })}
        </S.WeekRow>
    );
};

export default CalendarWeek;
