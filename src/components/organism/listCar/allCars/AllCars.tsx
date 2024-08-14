import { Column, TitleSection } from "./AllCars.style";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import { CarInfoWithPrice } from "@/types/CarInfo.type";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import CardInfoCar from "@/components/molecule/cardInfocar/CardInfoCar";
import { useContext } from "react";
import DetailCarPage from "@/pages/DetailCarPage";
import { ListCarContext } from "../fetchCar/fetchCarContext";

type AllCarsProps = { hasLoading?: boolean };

const AllCars = ({ hasLoading = false }: AllCarsProps) => {
  const { filteredListCar, setDetailCarId } = useContext(ListCarContext);

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
