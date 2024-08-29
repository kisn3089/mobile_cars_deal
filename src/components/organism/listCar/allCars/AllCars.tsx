import { Column, TitleSection } from "./AllCars.style";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import { CarInfoWithPrice } from "@/types/CarInfo.type";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import { useContext } from "react";
import DetailCarPage from "@/pages/DetailCarPage";
import { ListCarContext } from "../fetchCar/fetchCarContext";
import CardInfoCar from "@/components/molecule/cardInfoCar/CardInfoCar";
import { GetCarListSuspense } from "@/api/GetCarList";
import { useSearchParams } from "react-router-dom";
import { filteredBySearch } from "@/util/filteredListCar";
import { LIMIT } from "@/util/contstants";

type AllCarsProps = { hasLoading?: boolean };

const AllCars = ({ hasLoading = false }: AllCarsProps) => {
  const [query] = useSearchParams();
  const { page, setDetailCarId } = useContext(ListCarContext);
  const { data: getListCar } = GetCarListSuspense();

  const filteredList = filteredBySearch({ getListCar, query });
  const filteredListCar = filteredList.slice(0, page * LIMIT);

  const cardClick = (id: number) => setDetailCarId(id);

  return (
    <>
      <TitleSection>{"모든 차량"}</TitleSection>
      <Column>
        <Skeleton
          hasLoading={hasLoading}
          fallback={<CarInfoSkeleton count={4} />}>
          {filteredListCar.map((carItem: CarInfoWithPrice) => (
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
