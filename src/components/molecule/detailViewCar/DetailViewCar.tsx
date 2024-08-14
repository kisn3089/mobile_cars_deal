import Img from "@/components/atom/img/Image";
import { ColumnGroup, Padding } from "./DetailViewCar.style";
import { GetDetailCarSuspense } from "@/api/GetDetailCar";
import BaseInfo from "@/components/organism/detailCar/baseInfo/BaseInfo";
import SafeInfo from "@/components/organism/detailCar/safeInfo/SafeInfo";
import AdditionalInfo from "@/components/organism/detailCar/additionalInfo/AdditionalInfo";

type DetailViewCarProps = {
  carClassId: number;
};

const DetailViewCar = ({ carClassId }: DetailViewCarProps) => {
  const { data: detailCar } = GetDetailCarSuspense({ carClassId });

  return (
    <>
      <Img src={detailCar.carImage} alt={detailCar.carClassName} size="large" />
      <Padding>
        <ColumnGroup>
          <BaseInfo detailCar={detailCar} />
          <SafeInfo detailCar={detailCar} />
          <AdditionalInfo detailCar={detailCar} />
        </ColumnGroup>
      </Padding>
    </>
  );
};

export default DetailViewCar;
