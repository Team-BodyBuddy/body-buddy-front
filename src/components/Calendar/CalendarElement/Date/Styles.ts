import styled from "styled-components";

export const DateCell = styled.div<{ $isCurrentMonth: boolean; $isToday: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(100% / 7);
    height: 50px;
    aspect-ratio: 1/1;
    font-weight: ${({ $isToday }) => ($isToday ? "700" : "500")};
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#333333" : "#B2B2B2")};
    text-align: center;
`;

export const DotWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 3px;
`;

export const Dot = styled.div<{ $type: string }>`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ $type }) => ($type === "red" ? "#D7567F" : "#2828CD")};
`;
