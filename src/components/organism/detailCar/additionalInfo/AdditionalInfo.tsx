import {
  Name,
  SquareLayout,
  SubInfo,
} from "@/components/molecule/detailViewCar/DetailViewCar.style";
import { DetailCarType } from "@/types/DetailCar.type";

const AdditionalInfo = ({ detailCar }: { detailCar: DetailCarType }) => {
  return (
    <>
      <Name>{"편의 옵션"}</Name>
      <SquareLayout>
        {detailCar.additionalOption.map((additional, i) => (
          <SubInfo key={i}>{additional}</SubInfo>
        ))}
      </SquareLayout>
    </>
  );
};

export default AdditionalInfo;
