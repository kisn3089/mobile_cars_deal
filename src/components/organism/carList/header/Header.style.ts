import styled from "styled-components";

export const HeaderLayout = styled.header`
  width: 100%;
  padding: 24px;
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[32]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  text-align: center;
`;
