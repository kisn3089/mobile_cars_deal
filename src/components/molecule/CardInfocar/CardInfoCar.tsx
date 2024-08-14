import { CarInfoWithPrice } from "@/types/CarInfo.type";

import Img from "@/components/atom/img/Image";
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
import { ImgSizeType } from "@/components/atom/img/Image.type";

type CardInfoCarProps = {
  listInfoCar: CarInfoWithPrice;
  size?: ImgSizeType;
  clickCardCar: (id: number) => void;
};

const CardInfoCar = ({
  listInfoCar,
  size = "medium",
  clickCardCar,
}: CardInfoCarProps) => {
  return (
    <Layout
      id={listInfoCar.carClassId.toString()}
      $isSmall={size === "small"}
      onClick={() => clickCardCar(listInfoCar.carClassId)}>
      <Img src={listInfoCar.image} alt={listInfoCar.carClassName} size={size} />
      <Column>
        <NameTag>
          <Name>{listInfoCar.carClassName}</Name>
          <Tag>
            {listInfoCar.carTypeTags.map((tag, i) => (
              <LabelTag key={i}>{tag}</LabelTag>
            ))}
          </Tag>
        </NameTag>
        <Price>
          {listInfoCar.discount()}
          <Unit>원</Unit>
          <DiscountPrice carInfos={listInfoCar} />
        </Price>
        <Content>
          {`${
            listInfoCar.year
          }년 • ${listInfoCar.driveFormat()} • ${listInfoCar.regionGroups.join(
            "/"
          )}`}
        </Content>
      </Column>
    </Layout>
  );
};

export default CardInfoCar;
