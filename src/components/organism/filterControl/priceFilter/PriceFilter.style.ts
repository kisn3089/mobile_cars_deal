import styled, { css } from "styled-components";

export const PriceOptionList = styled.div`
  height: 36px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  animation: ${({ theme }) =>
    css`
      ${theme.animation.appearDown} ${theme.transTime.medium} ${theme.transition
        .smooth}
    `};
`;
