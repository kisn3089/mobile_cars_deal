import {
  PointContent,
  SubInfo,
  Name,
  SquareLayout,
} from "@/components/molecule/detailViewCar/DetailViewCar.style";
import { DetailCarType } from "@/types/DetailCar.type";

const BaseInfo = ({ detailCar }: { detailCar: DetailCarType }) => {
  return (
    <>
      <Name>{detailCar.carClassName}</Name>
      <SquareLayout $repeat={2}>
        <SubInfo>
          <span>{`제조사`}</span>
          <PointContent>{detailCar.maker}</PointContent>
        </SubInfo>
        <SubInfo>
          <span>{`분류`}</span>
          <PointContent>{detailCar.carModel}</PointContent>
        </SubInfo>
        <SubInfo>
          <span>{`연료`}</span>
          <PointContent>{detailCar.fuel}</PointContent>
        </SubInfo>
        <SubInfo>
          <span>{`변속 방식`}</span>
          <PointContent>{detailCar.gearbox}</PointContent>
        </SubInfo>
      </SquareLayout>
    </>
  );
};

export default BaseInfo;
