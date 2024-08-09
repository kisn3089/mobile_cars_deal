import styled from "styled-components";

export const AllCarsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  padding: 0 20px;
`;

export const FigureTitle = styled.figure`
  font-size: ${({ theme }) => theme.fontSize[28]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;
