import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Padding = styled.div`
  padding: ${({ theme }) => `12px ${theme.padding.layout}`};
`;

export const ColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.palette.primary.black};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  padding: 8px 0;
`;

export const SubInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.gray.gray300};
`;

export const SquareLayout = styled.article`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 20px;
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 5px ${theme.palette.gray.gray200}`};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;
