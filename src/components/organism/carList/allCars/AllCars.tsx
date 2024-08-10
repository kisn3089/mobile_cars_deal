import CardInfoCar from "@/components/molecule/CardInfocar/CardInfoCar";
import { ContainerAllCars, TitleAllCars } from "./AllCars.style";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import { CarInfoType } from "@/types/CarInfo.type";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";

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
    <ContainerAllCars>
      <TitleAllCars>{"모든 차량"}</TitleAllCars>
      <Skeleton
        hasLoading={hasLoading}
        fallback={<CarInfoSkeleton count={4} />}>
        {carList.map((carItem: CarInfoType) => (
          <CardInfoCar key={carItem.carClassId} listInfoCar={carItem} />
        ))}
      </Skeleton>
    </ContainerAllCars>
  );
};

export default AllCars;
