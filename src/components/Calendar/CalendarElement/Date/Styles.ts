import styled from "styled-components";

export const DateCell = styled.div<{ $isCurrentMonth: boolean; $isToday: boolean }>`
    display: flex;
    flex-direction: column;
    width: calc(100% / 7);
    height: 20px;
    aspect-ratio: 1/1;
    font-weight: ${({ $isToday }) => ($isToday ? "700" : "500")};
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#333333" : "#B2B2B2")};
    text-align: center;
`;
