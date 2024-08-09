import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./style/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>
);
