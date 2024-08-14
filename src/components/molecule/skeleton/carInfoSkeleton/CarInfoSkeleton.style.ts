import styled from "styled-components";

export const Gap = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding-top: 10px;
`;

export const Layout = styled.article`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 16px 0;
  padding: 20px 12px;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
`;

export const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

export const NameTag = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.p`
  width: 60px;
  height: 20px;
`;

export const Price = styled.p`
  width: 180px;
  height: 22px;
`;

export const Name = styled.h1`
  width: 90px;
  height: 22px;
`;

export const Content = styled.span`
  width: 160px;
  height: 20px;
`;

export const DeadSpace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.gray.gray200};
`;
