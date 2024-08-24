import { Navigate, Route, Routes } from "react-router-dom";
import CarListPage from "./page/CarListPage";
import NotFound from "./components/molecule/notFound/NotFound";
import { coreAxios } from "./util/coreAxios";

function App() {
  const test = async () => {
    const res = await coreAxios.get("/carClasses");
    console.log("result: ", res);
  };
  test();
  // console.log(import.meta.env.VITE_BASE_URL);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <a
    //       className="App-link"
    //       href="https://socarcorp.kr"
    //       target="_blank"
    //       rel="noopener noreferrer">
    //       Happy Coding 🤗
    //     </a>
    //   </header>
    // </div>
    <Routes>
      <Route path="/" element={<Navigate to="/list" replace />} />
      <Route path="/list" element={<CarListPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
