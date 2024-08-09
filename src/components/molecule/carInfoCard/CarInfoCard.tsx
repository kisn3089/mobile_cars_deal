import { CarInfoType } from "@/types/CarInfo.type";
import {
  CarInfo,
  CarInfoCardLayout,
  CarInfoContainer,
  CarName,
  CarNameTag,
  CarPrice,
  CarTag,
  CarUnit,
} from "./CarInfoCard.style";
import Img from "@/components/atom/img/Image";
import { Car } from "@/util/method/carInfoMethod";

type CarInfoCardProps = {
  carInfoList: CarInfoType;
};

const comp: Record<number, number> = {
  4: 1000,
  5: 10000,
  6: 100000,
};

const tt = (distance: number) => {
  const leng = distance.toString().length;
  const value = distance / comp[leng];
  const rest = distance % comp[leng];
  console.log("distance: ", distance);
  console.log("value: ", value);
  console.log("rest: ", rest);
};

const CarInfoCard = ({ carInfoList }: CarInfoCardProps) => {
  const carInfos = new Car(carInfoList);
  tt(carInfos.drivingDistance);

  return (
    <CarInfoCardLayout>
      <Img src={carInfos.image} alt={carInfos.carClassName} size="large" />
      <CarInfoContainer>
        <CarNameTag>
          <CarName>{carInfos.carModel}</CarName>
          <CarTag>{carInfos.carTypeTags.map((tag) => tag)}</CarTag>
        </CarNameTag>
        <CarPrice>
          {carInfos.round()}
          <CarUnit>원</CarUnit>
        </CarPrice>
        <CarInfo>{`${carInfos.year} | ${
          carInfos.drivingDistance
        }만 | ${carInfos.regionGroups.map((region) => region)}`}</CarInfo>
      </CarInfoContainer>
    </CarInfoCardLayout>
  );
};

export default CarInfoCard;
