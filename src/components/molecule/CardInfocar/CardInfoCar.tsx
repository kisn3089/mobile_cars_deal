import { DetailCarType, CarInfoType } from "@/types/CarInfo.type";

import Img from "@/components/atom/img/Image";
import { Car } from "@/util/method/carInfoMethod";
import DiscountPrice from "../discountPrice/DiscountPrice";
import { LabelTag } from "../labelTag/LabelTag.style";
import {
  Column,
  Content,
  Layout,
  Name,
  NameTag,
  Price,
  Tag,
  Unit,
} from "./CardInfoCar.style";

type CardInfoCarProps = {
  listInfoCar: CarInfoType;
  size?: "large" | "small";
};

const CardInfoCar = ({ listInfoCar, size = "large" }: CardInfoCarProps) => {
  const infosCar: DetailCarType = new Car(listInfoCar);

  return (
    <Layout $isSmall={size === "small"}>
      <Img src={infosCar.image} alt={infosCar.carClassName} size={size} />
      <Column>
        <NameTag>
          <Name>{infosCar.carClassName}</Name>
          <Tag>
            {infosCar.carTypeTags.map((tag, i) => (
              <LabelTag key={i}>{tag}</LabelTag>
            ))}
          </Tag>
        </NameTag>
        <Price>
          {infosCar.discount()}
          <Unit>원</Unit>
          <DiscountPrice carInfos={infosCar} />
        </Price>
        <Content>
          {`${infosCar.year}년 • ${infosCar.driveFormat()} • `}
          {infosCar.regionGroups.join("/")}
        </Content>
      </Column>
    </Layout>
  );
};

export default CardInfoCar;
