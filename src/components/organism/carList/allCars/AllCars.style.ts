import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `0 ${theme.padding.layout}`};
  gap: 16px 0;
`;

export const TitleSection = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[20]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  padding: ${({ theme }) => `12px ${theme.padding.layout}`};
`;
