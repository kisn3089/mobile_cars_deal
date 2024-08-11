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
  gap: 16px;
  color: ${({ theme }) => theme.palette.primary.black};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-top: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
  line-height: 150%;
`;

export const Th = styled.p`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  height: 38px;
  display: flex;
  align-items: center;
`;

export const Td = styled.p`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  border-top: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
  height: 38px;
  display: flex;
  align-items: center;
`;
