import { CarDetailType, CarInfoType } from "@/types/CarInfo.type";
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
import DiscountPrice from "../discountPrice/DiscountPrice";

type CarInfoCardProps = {
  carInfoList: CarInfoType;
  hasLoading?: boolean;
};

const CarInfoCard = ({ carInfoList, hasLoading }: CarInfoCardProps) => {
  if (hasLoading) return <LoadingCarList />;

  const carInfos: CarDetailType = new Car(carInfoList);

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
          <DiscountPrice carInfos={carInfos} />
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

const LoadingCarList = () => {
  return (
    <CarInfoCardLayout>
      <Img src={""} alt={"loading"} size="large" />
      <CarInfoContainer>
        <CarNameTag>
          <CarName>{"qweq"}</CarName>
          <CarTag>{"qqqweqe"}</CarTag>
        </CarNameTag>
        <CarPrice>{"012312"}</CarPrice>
        <CarInfo>{"12313132wqe"}</CarInfo>
      </CarInfoContainer>
    </CarInfoCardLayout>
  );
};
