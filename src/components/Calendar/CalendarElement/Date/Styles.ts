import styled from "styled-components";

export const DateCell = styled.div<{ $isCurrentMonth: boolean; $isToday: boolean; $isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 7);
    height: 50px;
    aspect-ratio: 1/1;
    font-weight: ${({ $isToday }) => ($isToday ? "700" : "500")};
    color: ${({ $isToday, $isCurrentMonth, $isSelected }) => {
        if ($isSelected) return "white"; // 선택된 오늘 날짜는 흰색
        if ($isToday) return "green"; // 오늘 날짜는 초록색
        return $isCurrentMonth ? "#333333" : "#B2B2B2"; // 현재 월이면 어두운 색, 아니면 연한 회색
    }};
    background-color: ${({ $isSelected }) => ($isSelected ? "#8FBC8F" : "inherit")};
`;

export const Text = styled.div`
    height: 60%;
    display: flex;
    align-items: flex-end;
    text-align: center;
`;

export const DotWrapper = styled.div`
    margin-top: 15%;
    display: flex;
    justify-content: center;
    gap: 3px;
`;

export const Dot = styled.div<{ $type: string }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ $type }) => ($type === "RED" ? "rgba(249, 115, 22, 1)" : "rgba(37, 99, 235, 1)")};
`;
