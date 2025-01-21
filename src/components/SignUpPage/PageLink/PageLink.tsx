import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface PageLinkProps {
    $textcolor?: string;
    to: string;
    children: React.ReactNode;
}

const StyledLink = styled.div<{ $textcolor?: string }>`
    color: ${({ $textcolor }) => $textcolor || "#000"};
    text-align: center;
`;

const PageLink: React.FC<PageLinkProps> = ({ $textcolor, to, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <StyledLink onClick={handleClick} $textcolor={$textcolor}>
            {children}
        </StyledLink>
    );
};

export default PageLink;
