import styled from "styled-components";

export const CarInfoCardLayout = styled.article`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 16px 0;
  padding: 20px 12px;
  border: ${({ theme }) => `1px solid ${theme.palette.primary.black}`};
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
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const CarName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.black};
`;

export const CarPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const CarUnit = styled.span`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const CarInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  color: ${({ theme }) => theme.palette.primary.black};
`;
