import { AllCarsContainer, FigureTitle } from "./AllCars.style";
import CarInfoCard from "@/components/molecule/carInfoCard/CarInfoCard";
import { CarInfoType } from "@/types/CarInfo.type";

type AllCarsProps = {
  carList: CarInfoType[];
};

const AllCars = ({ carList }: AllCarsProps) => {
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
