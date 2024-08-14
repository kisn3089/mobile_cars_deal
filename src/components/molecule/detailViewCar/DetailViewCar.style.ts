import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Padding = styled.div`
  padding: ${({ theme }) =>
    `12px ${theme.padding.layout} 30px ${theme.padding.layout}`};
`;

export const ColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.palette.primary.black};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  padding: 8px 0;
`;

export const SubInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px 0;
  padding: 8px 0;
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.gray.gray300};
`;

export const PointContent = styled.span`
  color: ${({ theme }) => theme.palette.primary.brand200};
`;

export const SquareLayout = styled.div<{ $repeat?: number }>`
  display: grid;
  grid-template-columns: ${({ $repeat }) => `repeat(${$repeat || 3}, 1fr)`};
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 5px ${theme.palette.gray.gray200}`};
`;
