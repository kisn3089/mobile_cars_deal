import styled from "styled-components";

export const Layout = styled.div`
  width: 360px;
  height: 600px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
