import styled from "styled-components";

export const Layout = styled.main`
  width: 360px;
  height: 600px;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 20px;
`;

export const Header = styled.header`
  width: 100%;
  height: 24px;
  padding: 0 20px;
`;

export const XLogo = styled.img`
  width: 24px;
  height: 24px;
  float: right;
  cursor: pointer;
`;
