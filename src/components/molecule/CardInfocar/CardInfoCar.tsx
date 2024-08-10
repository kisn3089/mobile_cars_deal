import { DetailCarType, CarInfoType } from "@/types/CarInfo.type";
import {
  Content,
  Layout,
  Column,
  Name,
  NameTag,
  Price,
  Tag,
  Unit,
} from "./CardInfoCar.style";
import Img from "@/components/atom/img/Image";
import { Car } from "@/util/method/carInfoMethod";
import DiscountPrice from "../discountPrice/DiscountPrice";
import { LabelTag } from "../labelTag/LabelTag.style";

type CardInfoCarProps = {
  listInfoCar: CarInfoType;
};

const CardInfoCar = ({ listInfoCar }: CardInfoCarProps) => {
  const infosCar: DetailCarType = new Car(listInfoCar);

  return (
    <Layout>
      <Img src={infosCar.image} alt={infosCar.carClassName} size="large" />
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
          {infosCar.regionGroups.map((region) => region)}
        </Content>
      </Column>
    </Layout>
  );
};

export default CardInfoCar;
