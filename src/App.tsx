import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "@/components/molecule/notFound/NotFound";
import ListCarPage from "./pages/ListCarPage";
import "@/styles/font.css";
import TestControl from "./components/organism/testControl/TestControl";

function App() {
  return (
    <>
      <TestControl />
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<ListCarPage />} />
        <Route path="/loading" element={<ListCarPage />} />
        <Route path="/fail" element={<ListCarPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
