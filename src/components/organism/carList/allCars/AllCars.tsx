import CardInfoCar from "@/components/molecule/cardInfoCar/CardInfoCar";
import { Column, TitleSection } from "./AllCars.style";
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
    <>
      <TitleSection>{"모든 차량"}</TitleSection>
      <Column>
        <Skeleton
          hasLoading={hasLoading}
          fallback={<CarInfoSkeleton count={4} />}>
          {carList.map((carItem: CarInfoType) => (
            <CardInfoCar key={carItem.carClassId} listInfoCar={carItem} />
          ))}
        </Skeleton>
      </Column>
    </>
  );
};

export default AllCars;
