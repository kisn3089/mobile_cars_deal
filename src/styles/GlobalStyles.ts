import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }

    body {
        width: 100vw;
        min-height: 100vh;
    }

    
`;

export const RootCenter = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = styled.div`
  width: 420px;
  border: ${({ theme }) => `1px solid ${theme.palette.gray.gray100}`};
  border-radius: 10px;
  min-height: 100vh;
  padding: 0 20px;
`;
