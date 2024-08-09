import styled from "styled-components";

export const CarDiscount = styled.span`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize[14]};
  color: ${({ theme }) => theme.palette.gray.gray300};
  margin: 0 8px 0 12px;
  text-decoration: line-through;
`;

export const DiscountPercent = styled.span`
  font-size: ${({ theme }) => theme.fontSize[16]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;
