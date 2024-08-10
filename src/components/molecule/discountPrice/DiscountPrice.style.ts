import styled from "styled-components";

export const CarDiscount = styled.span`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.gray.gray300};
  margin: 0 6px 0 6px;
  text-decoration: line-through;
`;

export const DiscountPercent = styled.span`
  font-size: ${({ theme }) => theme.fontSize[14]};
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  color: ${({ theme }) => theme.palette.primary.brand};
`;
