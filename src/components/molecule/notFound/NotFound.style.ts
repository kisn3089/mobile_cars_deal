import styled from "styled-components";

export const NotFoundLayout = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundMessage = styled.h1`
  font-size: ${({ theme }) => theme.fontSize[24]};
  font-weight: ${({ theme }) => theme.fontWeight[700]};
`;
