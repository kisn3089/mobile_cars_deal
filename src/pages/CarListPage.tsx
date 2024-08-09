import AllCars from "@/components/organism/carList/allCars/AllCars";
import Header from "@/components/organism/carList/header/Header";
import { useState } from "react";
import styled from "styled-components";

const Tp = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid #374553;
  border-radius: 10px;
`;

const CarListPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div onClick={() => setPage((prev) => prev + 1)}>
      <Header />
      {/* 특가 차량 */}
      <Tp />
      <AllCars page={page} />
    </div>
  );
};

export default CarListPage;
