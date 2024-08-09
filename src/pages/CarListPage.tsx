import { GetCarList } from "@/api/GetCarList";
import CarInfoCard from "@/components/molecule/carInfoCard/CarInfoCard";
import { CardListContainer } from "@/components/molecule/carInfoCard/CarInfoCard.style";
import Header from "@/components/organism/carList/header/Header";
import { CarInfoType } from "@/types/CarInfo.type";
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
  const { data: carList, isSuccess } = GetCarList(page);
  if (isSuccess) console.log(carList);
  return (
    <div onClick={() => setPage((prev) => prev + 1)}>
      <Header />
      {/* 특가 차량 */}
      <Tp />
      <CardListContainer>
        {carList &&
          carList.map((carItem: CarInfoType) => (
            <CarInfoCard key={carItem.carClassId} carInfoList={carItem} />
          ))}
      </CardListContainer>
    </div>
  );
};

export default CarListPage;
