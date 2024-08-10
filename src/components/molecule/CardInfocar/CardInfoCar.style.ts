import styled from "styled-components";

export const Layout = styled.article`
  min-width: 346px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 18px 0;
  padding: 20px 12px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
`;

export const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`;

export const Tag = styled.div`
  display: flex;
  gap: 0 2px;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;

export const Unit = styled.span`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
`;
