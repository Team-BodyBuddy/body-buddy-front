import styled from "styled-components";

export const DateCell = styled.div<{ $isCurrentMonth: boolean; $isToday: boolean; $isSelected: boolean; $status: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 7);
    height: 50px;
    aspect-ratio: 1/1;
    font-weight: ${({ $isToday }) => ($isToday ? "700" : "500")};
    color: ${({ $isToday, $isCurrentMonth, $isSelected }) => {
        if ($isSelected) return "white"; // 오늘 날짜는 흰색
        if ($isToday) return "green"; // 선택된 오늘 날짜는 녹색
        return $isCurrentMonth ? "#333333" : "#B2B2B2"; // 현재 월이면 어두운 색, 아니면 연한 회색
    }};
    background-color: ${({ $isSelected, $status }) => {
        if ($isSelected) return "rgba(189, 189, 189, 1)"; // 선택된 날짜
        switch ($status) {
            case "GOOD":
                return "rgba(63, 173, 0, 0.69)"; // 초록색 (좋음)
            case "SOSO":
                return "rgba(64, 173, 0, 0.5)"; // 노란색 (보통)
            case "BAD":
                return "rgba(64, 173, 0, 0.2)"; // 빨간색 (나쁨)
            default:
                return "inherit"; // 기본 배경색
        }
    }};
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
