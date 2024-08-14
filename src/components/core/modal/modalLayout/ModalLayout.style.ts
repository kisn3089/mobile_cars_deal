import styled, { css } from "styled-components";

export const Center = styled.div`
  position: fixed;
  max-width: ${({ theme }) => theme.width.maxWidth};
  width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  z-index: 19;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dim = styled.section`
  width: ${({ theme }) => theme.width.maxWidth};
  min-width: 390px;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: opacity;
  animation: ${({ theme }) =>
    css`
      ${theme.animation.fadeIn} ${theme.transTime.short} ${theme.transition
        .smooth}
    `};
`;
