import styled from "styled-components";

export const LabelTag = styled.div`
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.palette.gray.gray100};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary.brand};
  font-size: ${({ theme }) => theme.fontSize[12]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;
