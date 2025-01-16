import { styled } from "styled-components";
import { COLORS } from "../../../styles/color";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: 430px) {
        height: auto;
    }

    @media (max-height: 932px) {
        max-height: calc(100vh - 10px);
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 20px;
    width: 100%;
    overflow-y: auto; /* 내용 스크롤 허용 */
`;

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Button = styled.button<{ $active?: boolean }>`
    color: ${({ $active }) => ($active ? "white" : "#C5C5C5")};
    background-color: ${({ $active }) => ($active ? `${COLORS.Green}` : "white")};
    border: ${({ $active }) => ($active ? "none" : `1px solid ${COLORS.LightGray};`)};
    border-radius: 9px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.5s;
    width: 170px;
    height: 50px;
`;

export const Box = styled.div`
    width: 100%;
    height: 58px;
    border: 1px solid ${COLORS.LightGray};
    border-radius: 12px;
    background-color: white;
    padding: 8px 20px;
`;

export const BoxList = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    border: 1px solid ${COLORS.LightGray};
    border-radius: 17px;
    background-color: white;
    padding: 20px 15px;
    padding-top: 0;
    overflow-y: auto;
    -ms-overflow-style: none;
    scroll-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    max-height: 510px;
`;

export const GymInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* 부모 Box에 맞춰 수직 정렬 */
    font-size: 1rem;
    text-align: center;
`;
