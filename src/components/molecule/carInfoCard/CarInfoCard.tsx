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

const CarInfoCard = ({ carInfoList }: CarInfoCardProps) => {
  const carInfos = new Car(carInfoList);

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
        <CarInfo>{`${
          carInfos.year
        } | ${carInfos.driveFormat()} | ${carInfos.regionGroups.map(
          (region) => region
        )}`}</CarInfo>
      </CarInfoContainer>
    </CarInfoCardLayout>
  );
};

export default CarInfoCard;
