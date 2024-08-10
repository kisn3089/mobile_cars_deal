import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `0 ${theme.padding.layout}`};
`;

export const TitleSection = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[28]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  padding: ${({ theme }) => `12px ${theme.padding.layout}`};
`;
