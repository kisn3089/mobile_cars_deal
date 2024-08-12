import styled from "styled-components";

export const Layout = styled.main`
  width: 360px;
  height: 600px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Padding = styled.div`
  padding: ${({ theme }) => `12px ${theme.padding.layout}`};
`;

export const ColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: ${({ theme }) => theme.palette.primary.black};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  padding: 8px 0;
`;

export const SubInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-size: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.gray.gray300};
`;
