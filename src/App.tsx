import { Route, Routes } from "react-router-dom";
import CarListPage from "./page/CarListPage";

const BASE_URL = "http://localhost:8080";

function App() {
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
      <Route path="/" element={<CarListPage />} />
    </Routes>
  );
}

export default App;
