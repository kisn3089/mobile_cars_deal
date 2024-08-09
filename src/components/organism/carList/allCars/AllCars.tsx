import { AllCarsContainer, FigureTitle } from "./AllCars.style";
import CarInfoCard from "@/components/molecule/carInfoCard/CarInfoCard";
import { CarInfoType } from "@/types/CarInfo.type";
// import { LIMIT } from "@/util/contstants";

type AllCarsProps = {
  carList: CarInfoType[];
  page: number;
};

const AllCars = ({ carList, page }: AllCarsProps) => {
  return (
    <AllCarsContainer>
      <FigureTitle>{"모든 차량"}</FigureTitle>
      {carList.map((carItem: CarInfoType) => (
        <CarInfoCard key={carItem.carClassId} carInfoList={carItem} />
      ))}
    </AllCarsContainer>
  );
};

export default AllCars;

// {carList.slice(0, page * LIMIT).map((carItem: CarInfoType) => (
