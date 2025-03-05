import styled from "styled-components";

export const RoutineContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.div`
    width: 22%;
    padding: 5px 13px;
    border-radius: 100px;
    border: 1px solid rgba(198, 198, 198, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;

export const Dot = styled.div<{ $color: string }>`
    width: 7px;
    height: 7px;
    border-radius: 3px;
    background-color: ${({ $color }) => $color};
`;

export const Input = styled.input`
    padding: 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    background: transparent;

    &:focus {
        border-bottom-color: #007bff;
    }
`;
