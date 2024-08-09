import { AllCarsContainer, FigureTitle } from "./AllCars.style";
import CarInfoCard from "@/components/molecule/carInfoCard/CarInfoCard";
import CarListLoading from "@/components/molecule/loading/carListLoading/CarListLoading";
import { CarInfoType, defaultCarInfo } from "@/types/CarInfo.type";
// import { LIMIT } from "@/util/contstants";

// type AllCarsProps = {
//   carList: CarInfoType[];
//   page: number;
// };

type BaseProps = {
  carList: CarInfoType[];
  hasLoading?: false;
};

type LoadingProps = {
  hasLoading: true;
  carList?: CarInfoType[];
};

type AllCarsProps = BaseProps | LoadingProps;

const AllCars = ({ carList = [], hasLoading = false }: AllCarsProps) => {
  return (
    <AllCarsContainer>
      <FigureTitle>{"모든 차량"}</FigureTitle>
      <CarListLoading
        hasLoading={hasLoading}
        fallback={[1, 2, 3, 4].map((_, i) => (
          <CarInfoCard
            key={i}
            carInfoList={defaultCarInfo}
            hasLoading={hasLoading}
          />
        ))}>
        <>
          {carList.map((carItem: CarInfoType) => (
            <CarInfoCard
              key={carItem.carClassId}
              carInfoList={carItem}
              hasLoading={hasLoading}
            />
          ))}
        </>
      </CarListLoading>
    </AllCarsContainer>
  );
};

export default AllCars;
