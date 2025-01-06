//다음 페이지로 이동하는 버튼, 로그인 버튼
import React from "react";
import * as S from "./Styles";

interface NextButtonProps{
    onClick: () => void;
    bgColor?: string;
    children: React.ReactNode;
}

const NextButton: React.FC<NextButtonProps> = ({onClick, bgColor, children}) => {
    return <S.NextButton onClick={onClick} bgColor={bgColor}>{children}</S.NextButton>;
};

export default NextButton;