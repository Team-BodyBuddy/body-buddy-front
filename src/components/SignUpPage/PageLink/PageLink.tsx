//글자를 눌렀을 때 해당 페이지로 이동
import React from "react";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";

interface PageLinkProps{
    $textcolor?: string;
    text: string;
    to: string;
    className?: string;
}

const PageLink: React.FC<PageLinkProps> = ({$textcolor, text, to, className}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return <S.PageLink 
                onClick={handleClick} 
                $textcolor={$textcolor}
                className={className}>{text}</S.PageLink>;
};

export default PageLink;