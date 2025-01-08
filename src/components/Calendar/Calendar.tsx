//캘린더 컴포넌트
import { format, startOfMonth, endOfMonth, startOfWeek, addDays } from "date-fns";
import { useState } from "react";
import CalendarHeader from "./CalendarElement/Header/CalendarHeader";
import * as S from "./Styles";
import CalendarWeek from "./CalendarElement/Week/CalendarWeek";

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfMonth(endOfMonth(currentDate));

    // 연도와 월을 하나의 드롭다운에서 선택할 수 있도록 하는 핸들러
    const handleMonthYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const [year, month] = selectedValue.split("-").map((val) => parseInt(val, 10));
        setCurrentDate(new Date(year, month, 1)); // 해당 월로 이동
    };

    const generateCalendar = () => {
        const weeks = [];
        let day = startDate;

        while (day <= endDate) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                week.push(day);
                day = addDays(day, 1);
            }
            weeks.push(week);
        }

        return weeks;
    };

    // 드롭다운에서 선택할 연도와 월의 목록 생성
    const monthYearOptions = Array.from({ length: 12 }, (_, month) => {
        return {
            label: format(new Date(currentDate.getFullYear(), month), "yyyy-MM"),
            value: `${currentDate.getFullYear()}-${month}`,
        };
    });

    const weeks = generateCalendar();

    return (
        <S.Container>
            <S.HeadWrapper>
                <S.Title>일정</S.Title>
                <S.Select onChange={handleMonthYearChange}>
                    {monthYearOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </S.Select>
            </S.HeadWrapper>

            <S.DateWrapper>
                <CalendarHeader />

                {weeks.map((week, weekIndex) => (
                    <CalendarWeek key={weekIndex} week={week} currentDate={currentDate} />
                ))}
            </S.DateWrapper>
        </S.Container>
    );
};

export default Calendar;
