import styled, { css } from "styled-components";

export const CarInfoCardLayout = styled.article`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 16px 0;
  padding: 20px 12px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
  border-radius: 10px;
  cursor: pointer;
`;

export const CarInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

export const CarNameTag = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarTag = styled.p`
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
  // skeleton UI
  min-width: 60px;
  min-height: 20px;
`;

export const CarPrice = styled.p`
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
  // skeleton UI
  min-width: 180px;
  min-height: 22px;
`;

export const CarName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  // skeleton UI
  min-width: 90px;
  min-height: 22px;
`;

export const CarUnit = styled.span`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const CarInfo = styled.span`
  width: fit-content;
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  // skeleton UI
  min-width: 160px;
  min-height: 20px;
`;

export const DeadSpace = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.gray.gray200};
`;
