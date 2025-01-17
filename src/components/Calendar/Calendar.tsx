//캘린더 컴포넌트
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, addMonths } from "date-fns";
import { useState } from "react";
import CalendarHeader from "./CalendarElement/Header/CalendarHeader";
import * as S from "./Styles";
import CalendarWeek from "./CalendarElement/Week/CalendarWeek";
import { CalendarIcon, CalendarSelect } from "../icons";

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isDrop, setIsDrop] = useState(false);
    const startDate = startOfWeek(startOfMonth(currentDate));
    const endDate = endOfMonth(endOfMonth(currentDate));

    // 연도와 월을 하나의 드롭다운에서 선택할 수 있도록 하는 핸들러
    const handleMonthYearChange = (year: number, month: number) => {
        setCurrentDate(new Date(year, month, 1));
        setIsDrop(false);
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
    const monthYearOptions = Array.from({ length: 24 }, (_, index) => {
        const optionDate = addMonths(new Date(new Date().getFullYear() - 1, 0, 1), index); // 2년 전부터 시작하여 내년까지
        return {
            label: format(optionDate, "yyyy-MM"), // 연도-월 포맷
            year: optionDate.getFullYear(), // 연도 추출
            month: optionDate.getMonth(), // 월 추출
        };
    });

    const weeks = generateCalendar();

    return (
        <S.Container>
            <S.HeadWrapper>
                <S.Title>일정</S.Title>
                <S.Select $isDrop={isDrop} onClick={() => setIsDrop((prev) => !prev)}>
                    <CalendarIcon />
                    {format(currentDate, "yyyy-MM")}
                    <CalendarSelect />
                    {isDrop && (
                        <S.OptionWrapper>
                            {monthYearOptions.map((option) => (
                                <S.Option
                                    key={option.label}
                                    onClick={(e) => {
                                        e.stopPropagation(); // 이벤트 버블링 방지
                                        handleMonthYearChange(option.year, option.month); // 값 변경 및 드롭다운 닫기
                                    }}
                                    $isSelected={currentDate.getFullYear() === option.year && currentDate.getMonth() === option.month}
                                >
                                    {option.label}
                                </S.Option>
                            ))}
                        </S.OptionWrapper>
                    )}
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
