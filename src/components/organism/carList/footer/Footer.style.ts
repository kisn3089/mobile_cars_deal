import styled from "styled-components";

export const FooterLayout = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const RequestMore = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.primary.brand};
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  transition: ${({ theme }) =>
    `${theme.transTime.short} ${theme.transition.smooth}`};

  &:disabled {
    background-color: ${({ theme }) => theme.palette.gray.gray200};
  }

  &:active {
    width: 90%;
  }
`;
