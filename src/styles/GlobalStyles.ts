import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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

`;

export const RootCenter = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = styled.div`
  width: 420px;
  min-height: 100vh;
  color: ${({ theme }) => theme.palette.primary.black};
  background-color: ${({ theme }) => theme.palette.gray.gray100};
`;
