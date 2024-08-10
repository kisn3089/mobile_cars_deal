import { GetCarList } from "@/api/GetCarList";
import { useState } from "react";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import styled from "styled-components";

const Tp = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid #374553;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const FetchMain = () => {
  const [page, setPage] = useState(1);
  const { data: listCar, isSuccess } = GetCarList(page);
  if (isSuccess) console.log(listCar);

  const requestMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      {/* 특가 차량 */}
      <Tp />
      <AllCars carList={listCar} />
      <Footer requestMore={requestMore} disabled={listCar.length % LIMIT > 0} />
    </div>
  );
};

export default FetchMain;
