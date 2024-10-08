import styled from "styled-components";

export const RequestMore = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary.brand};
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  transition: ${({ theme }) =>
    `${theme.transTime.short} ${theme.transition.smooth}`};

  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.gray.gray200};
    width: 100%;
    height: 48px;
    transform: scale(1);
  }
`;
