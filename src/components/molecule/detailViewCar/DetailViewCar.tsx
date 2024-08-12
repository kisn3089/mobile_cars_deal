import Img from "@/components/atom/img/Image";
import {
  ColumnGroup,
  Layout,
  Name,
  Padding,
  SubInfo,
} from "./DetailViewCar.style";
import { GetDetailCarSuspense } from "@/api/GetDetailCar";

type DetailViewCarProps = {
  carClassId: number;
};

const DetailViewCar = ({ carClassId }: DetailViewCarProps) => {
  const { data: detailCar } = GetDetailCarSuspense({ carClassId });
  console.log(detailCar);

  return (
    <Layout>
      <Img src={detailCar.carImage} alt={detailCar.carClassName} size="large" />
      <Padding>
        <ColumnGroup>
          <Name>{detailCar.carClassName}</Name>
          <SubInfo>{`제조사: ${detailCar.maker}`}</SubInfo>
          <SubInfo>{`분류: ${detailCar.carModel}`}</SubInfo>
          <SubInfo>{`연료: ${detailCar.fuel}`}</SubInfo>
          <SubInfo>{`변속 방지: ${detailCar.gearbox}`}</SubInfo>
          <Name>{"안전 옵션"}</Name>
          {detailCar.safetyOption.map((safeItem, i) => (
            <SubInfo key={i}>{safeItem}</SubInfo>
          ))}
          <Name>{"편의 옵션"}</Name>
          {detailCar.additionalOption.map((additional, i) => (
            <SubInfo key={i}>{additional}</SubInfo>
          ))}
        </ColumnGroup>
      </Padding>
    </Layout>
  );
};

export default DetailViewCar;
