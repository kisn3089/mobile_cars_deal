import { Column, TitleSection } from "./AllCars.style";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import { CarInfoType } from "@/types/CarInfo.type";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import CardInfoCar from "@/components/molecule/cardInfocar/CardInfoCar";
import { useContext } from "react";
import { LIMIT } from "@/util/contstants";
import DetailCarPage from "@/pages/DetailCarPage";
import { ListCarContext } from "../fetchCar/fetchCarContext";

type AllCarsProps = { hasLoading?: boolean };

const AllCars = ({ hasLoading = false }: AllCarsProps) => {
  const { getListCar, searchValue, page, setDetailCarId } =
    useContext(ListCarContext);

  const carList =
    getListCar
      ?.filter((car) => car.carClassName.includes(searchValue))
      .slice(0, page * LIMIT) || [];

  const cardClick = (id: number) => setDetailCarId(id);

  return (
    <>
      <TitleSection>{"모든 차량"}</TitleSection>
      <Column>
        <Skeleton
          hasLoading={hasLoading}
          fallback={<CarInfoSkeleton count={4} />}>
          {carList.map((carItem: CarInfoType) => (
            <CardInfoCar
              key={carItem.carClassId}
              listInfoCar={carItem}
              clickCardCar={cardClick}
            />
          ))}
        </Skeleton>
        <DetailCarPage onClose={() => setDetailCarId(null)} />
      </Column>
    </>
  );
};

export default AllCars;
