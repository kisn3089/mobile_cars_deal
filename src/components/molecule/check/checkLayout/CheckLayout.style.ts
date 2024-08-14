import styled from "styled-components";

export const Padding = styled.div`
  padding: ${({ theme }) => `0 ${theme.padding.layout}`};
`;

export const Layout = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
`;
