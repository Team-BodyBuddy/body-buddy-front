import { styled, keyframes, css } from "styled-components";

// open 애니메이션

const slideIn = keyframes`
    from {
    transform: translateY(-100%);
    opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

//close 애니메이션

const slideOut = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-100%);
        opacity: 0;
    }
`;

export const ModalContainer = styled.div<{ $isClosing: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div<{ $isClosing: boolean }>`
    border-radius: 10px;
    width: 85%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${({ $isClosing }) =>
        $isClosing
            ? css`
                  ${slideOut} 0.5s ease-out;
              `
            : css`
                  ${slideIn} 0.5s ease-in;
              `};
`;
