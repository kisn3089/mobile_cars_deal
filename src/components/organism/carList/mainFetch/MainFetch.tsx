import { GetCarList } from "@/api/GetCarList";
import { useState } from "react";
import Footer from "../footer/Footer";
import { LIMIT } from "@/util/contstants";
import AllCars from "../allCars/AllCars";
import styled from "styled-components";
// import { dummy } from "@/util/dummy";

const Tp = styled.div`
  width: 100%;
  height: 220px;
  border: 1px solid #374553;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const MainFetch = () => {
  const [page, setPage] = useState(1);
  const { data: carList, isSuccess } = GetCarList(page);
  if (isSuccess) console.log(carList);
  //   const carList = dummy;

  const requestMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      {/* 특가 차량 */}
      <Tp />
      <AllCars carList={carList} page={page} />
      <Footer requestMore={requestMore} disabled={carList.length % LIMIT > 0} />
      {/* <Footer
        requestMore={requestMore}
        disabled={carList.slice(0, page * LIMIT).length % LIMIT > 0}
      /> */}
    </div>
  );
};

export default MainFetch;
