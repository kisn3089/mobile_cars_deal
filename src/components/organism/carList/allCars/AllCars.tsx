import { GetCarList } from "@/api/GetCarList";
import { AllCarsContainer } from "./AllCars.style";
import CarInfoCard from "@/components/molecule/carInfoCard/CarInfoCard";
import { CarInfoType } from "@/types/CarInfo.type";

type AllCarsProps = {
  page: number;
};

const AllCars = ({ page }: AllCarsProps) => {
  const { data: carList, isSuccess } = GetCarList(page);
  if (isSuccess) console.log(carList);

  return (
    <AllCarsContainer>
      {isSuccess &&
        carList.map((carItem: CarInfoType) => (
          <CarInfoCard key={carItem.carClassId} carInfoList={carItem} />
        ))}
    </AllCarsContainer>
  );
};

export default AllCars;
