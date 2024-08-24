import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./style/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
