import styled from "styled-components";

export const LayoutCardCar = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 18px 0;
  padding: 20px 12px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray200}`};
  border-radius: 10px;
  cursor: pointer;
`;

export const ContainerCardCar = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
`;

export const NameTagCar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`;

export const TagCar = styled.div`
  display: flex;
  gap: 0 2px;
`;

export const PriceCar = styled.p`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const NameCar = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;

export const UnitCar = styled.span`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;

export const ContentCar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
`;
