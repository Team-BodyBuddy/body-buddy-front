import styled from "styled-components";

export const DateCell = styled.div<{ $isCurrentMonth: boolean; $isToday: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 7);
    height: 50px;
    aspect-ratio: 1/1;
    font-weight: ${({ $isToday }) => ($isToday ? "700" : "500")};
    color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#333333" : "#B2B2B2")};
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
    background-color: ${({ $type }) => ($type === "red" ? "rgba(249, 115, 22, 1)" : "rgba(37, 99, 235, 1)")};
`;
