import { keyframes } from "styled-components";

export const skeletonEffect = keyframes`
    100% {
       background-position: -100% 0;
    }
`;

export const AppearUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY();
    }
`;

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
