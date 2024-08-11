import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeaderLayout = styled.header`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[22]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.black};
`;
