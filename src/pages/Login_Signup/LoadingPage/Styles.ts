import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;
    overflow-y: auto;

    @media (max-width: 26.875rem) {
        height: auto;
    }

    @media (max-height: 58.25rem) {
        max-height: calc(100vh - 0.625rem);
    }
`;

export const Logo = styled.div`
    position: relative;
    width: 9.3125rem;
    height: 8.125rem;
    top: 21.3125rem;
    left: 2.375rem;
`;
