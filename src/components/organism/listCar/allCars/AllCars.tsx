import { Column, TitleSection } from "./AllCars.style";
import Skeleton from "@/components/molecule/skeleton/skeleton/Skeleton";
import { CarInfoType } from "@/types/CarInfo.type";
import CarInfoSkeleton from "@/components/molecule/skeleton/carInfoSkeleton/CarInfoSkeleton";
import CardInfoCar from "@/components/molecule/cardInfocar/CardInfoCar";
import Modal from "@/components/core/modal/Modal";
import DetailViewCar from "../../../molecule/detailViewCar/DetailViewCar";
import CatchBoundary from "@/components/core/catchBoundary/CatchBoundary";

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
  const click = (id: number) => {
    console.log("all: ", id);
  };

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
              clickCardCar={click}
            />
          ))}
        </Skeleton>
      </Column>
      <Modal>
        <CatchBoundary
          error={({ resetErrorBoundary }) => <h1>Erorr</h1>}
          loading={<h1>Loading</h1>}>
          <DetailViewCar carClassId={carList[0].carClassId}></DetailViewCar>
        </CatchBoundary>
      </Modal>
    </>
  );
};

export default AllCars;
