import { CarInfoType } from "@/types/CarInfo.type";
import {
  CarDiscount,
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
  hasLoading?: boolean;
};

const CarInfoCard = ({ carInfoList, hasLoading }: CarInfoCardProps) => {
  if (hasLoading) return <></>;

  const carInfos = new Car(carInfoList);

  return (
    <CarInfoCardLayout>
      <Img src={carInfos.image} alt={carInfos.carClassName} size="large" />
      <CarInfoContainer>
        <CarNameTag>
          <CarName>{carInfos.carClassName}</CarName>
          <CarTag>{carInfos.carTypeTags.map((tag) => tag)}</CarTag>
        </CarNameTag>
        <CarPrice>
          {carInfos.discount()}
          <CarUnit>원</CarUnit>
          {carInfos.discountPercent > 0 && (
            <CarDiscount>{`${carInfos.round()}원`}</CarDiscount>
          )}
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
