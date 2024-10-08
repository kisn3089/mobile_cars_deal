import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    overflow-x: hidden;
  }
  
  * {
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      padding: 0;
      margin: 0;
  }
  body {
      width: 100vw;
      min-height: 100vh;
      background-color: ${({ theme }) => theme.palette.gray.gray400};
  }

  button {
    outline: none;
    cursor: pointer;
    border: none;
    user-select: none;
    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    outline: none;
    border: none;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.black};
     -webkit-user-select:all;
    -moz-user-select:all;
    -ms-user-select:all;
    user-select:all
  }

`;

export const RootCenter = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = styled.div`
  width: 100vw;
  max-width: ${({ theme }) => theme.width.maxWidth};
  min-width: 390px;
  min-height: 100vh;
  color: ${({ theme }) => theme.palette.primary.black};
  background-color: ${({ theme }) => theme.palette.gray.gray100};
`;
