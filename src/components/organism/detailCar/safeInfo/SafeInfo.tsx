import {
  Name,
  SquareLayout,
  SubInfo,
} from "@/components/molecule/detailViewCar/DetailViewCar.style";
import { DetailCarType } from "@/types/DetailCar.type";

const SafeInfo = ({ detailCar }: { detailCar: DetailCarType }) => {
  return (
    <>
      <Name>{"안전 옵션"}</Name>
      <SquareLayout>
        {detailCar.safetyOption.map((safeItem, i) => (
          <SubInfo key={i}>{safeItem}</SubInfo>
        ))}
      </SquareLayout>
    </>
  );
};

export default SafeInfo;
