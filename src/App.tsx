import { Navigate, Route, Routes } from "react-router-dom";
import CarListPage from "@/pages/CarListPage";
import NotFound from "@/components/molecule/notFound/NotFound";
import CarDetailPage from "@/pages/CarDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" replace />} />
      <Route path="/list" element={<CarListPage />} />
      <Route path="/list:id" element={<CarDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
