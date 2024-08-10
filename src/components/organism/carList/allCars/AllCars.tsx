import CardInfoCar from "@/components/molecule/cardInfoCar/CardInfoCar";
import { Layout, TitleSection } from "./AllCars.style";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import { CarInfoType } from "@/types/CarInfo.type";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import HasCars from "@/components/molecule/hasCars/HasCars";
import { GetCarList } from "@/api/GetCarList";

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
  const { data, refetch, isLoading } = GetCarList();
  // console.log(isLoading, data);

  return (
    <>
      <TitleSection>{"모든 차량"}</TitleSection>
      <HasCars
        content={`차량 없습니다. \n다시 시도해보세요!`}
        has={hasLoading || !!carList[0]}
        retry={refetch}>
        <Layout>
          <Skeleton
            hasLoading={isLoading || hasLoading}
            fallback={<CarInfoSkeleton count={4} />}>
            {carList.map((carItem: CarInfoType) => (
              <CardInfoCar key={carItem.carClassId} listInfoCar={carItem} />
            ))}
          </Skeleton>
        </Layout>
      </HasCars>
    </>
  );
};

export default AllCars;
