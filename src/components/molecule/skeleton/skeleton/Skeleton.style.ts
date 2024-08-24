import styled, { css } from "styled-components";

export const SkeletonLayout = styled.div`
  .skeleton {
    p,
    h1,
    span,
    .space {
      background: linear-gradient(
        120deg,
        #e5e5e5 30%,
        #f0f0f0 38%,
        #f0f0f0 40%,
        #e5e5e5 48%
      );
      background-size: 200% 100%;
      background-position: 100% 0;
      border-radius: 6px;
      animation: ${({ theme }) =>
        css`
          ${theme.animation.skeletonEffect} ${theme.transTime.long} ${theme
            .transition.smooth} infinite
        `};
    }
  }
`;
