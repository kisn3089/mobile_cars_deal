import { DetailCarType, CarInfoType } from "@/types/CarInfo.type";
import {
  ContentCar,
  LayoutCardCar,
  ContainerCardCar,
  NameCar,
  NameTagCar,
  PriceCar,
  TagCar,
  UnitCar,
} from "./CardInfoCar.style";
import Img from "@/components/atom/img/Image";
import { Car } from "@/util/method/carInfoMethod";
import DiscountPrice from "../discountPrice/DiscountPrice";

type CardInfoCarProps = {
  listInfoCar: CarInfoType;
};

const CardInfoCar = ({ listInfoCar }: CardInfoCarProps) => {
  const infosCar: DetailCarType = new Car(listInfoCar);

  return (
    <LayoutCardCar>
      <Img src={infosCar.image} alt={infosCar.carClassName} size="large" />
      <ContainerCardCar>
        <NameTagCar>
          <NameCar>{infosCar.carClassName}</NameCar>
          <TagCar>{infosCar.carTypeTags.map((tag) => tag)}</TagCar>
        </NameTagCar>
        <PriceCar>
          {infosCar.discount()}
          <UnitCar>원</UnitCar>
          <DiscountPrice carInfos={infosCar} />
        </PriceCar>
        <ContentCar>{`${
          infosCar.year
        } | ${infosCar.driveFormat()} | ${infosCar.regionGroups.map(
          (region) => region
        )}`}</ContentCar>
      </ContainerCardCar>
    </LayoutCardCar>
  );
};

export default CardInfoCar;
