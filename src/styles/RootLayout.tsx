import { BrowserRouter } from "react-router-dom";
import { GlobalStyles, Layout, RootCenter } from "./GlobalStyles";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <RootCenter>
          <Layout>{children}</Layout>
        </RootCenter>
      </BrowserRouter>
    </ThemeProvider>
  );
};
