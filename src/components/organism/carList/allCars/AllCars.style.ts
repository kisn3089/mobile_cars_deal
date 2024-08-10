import styled from "styled-components";

export const ContainerAllCars = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: ${({ theme }) => `0 ${theme.padding.layout}`};
`;

export const TitleAllCars = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[28]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;
